import { execSync } from 'child_process';
import { existsSync, cpSync, writeFileSync, readFileSync, rmSync, mkdirSync } from 'fs';
import path from 'path';
import { adaptBrandToTemplate } from '@/lib/ai/adapt-brand-to-template';
import { isR2Configured, uploadPreviewToR2 } from '@/lib/cloudflare/r2';
import type { AstroBrandContent } from '@/types';

const TEMPLATES_DIR = path.join(process.cwd(), 'templates');
const BUILD_TIMEOUT = 60_000; // 60 seconds

interface BuildResult {
  success: boolean;
  outputDir: string;
  builtUrl?: string;
  error?: string;
}

/**
 * Builds an Astro template with custom brand content.
 *
 * 1. Copies template to a temp dir
 * 2. Writes adapted brand.json
 * 3. Installs dependencies (or symlinks if local)
 * 4. Runs `astro build`
 * 5. Uploads dist/ to R2 (or copies to public/previews/ locally)
 * 6. Returns built URL
 */
export async function buildAstroTemplate(
  templateDir: string,
  brandContent: AstroBrandContent,
  projectId: string,
  slug?: string
): Promise<BuildResult> {
  const sourceDir = path.join(TEMPLATES_DIR, templateDir);
  const buildDir = path.join('/tmp', `astro-build-${projectId}`);

  // Validate template exists
  if (!existsSync(sourceDir)) {
    return { success: false, outputDir: '', error: `Template "${templateDir}" not found at ${sourceDir}` };
  }

  try {
    // Clean up any previous build attempt
    if (existsSync(buildDir)) {
      rmSync(buildDir, { recursive: true, force: true });
    }

    // Copy template to temp directory (excluding node_modules and dist)
    mkdirSync(buildDir, { recursive: true });
    cpSync(sourceDir, buildDir, {
      recursive: true,
      filter: (src) => {
        const rel = path.relative(sourceDir, src);
        if (rel.startsWith('node_modules') || rel.startsWith('dist') || rel.startsWith('.astro')) {
          return false;
        }
        return true;
      },
    });

    // Adapt brand content to template-specific schema and write brand.json
    const adaptedBrand = adaptBrandToTemplate(brandContent, templateDir);
    writeFileSync(
      path.join(buildDir, 'brand.json'),
      JSON.stringify(adaptedBrand, null, 2)
    );

    // For R2 deployment, use root base path (R2 serves from the prefix directly)
    // For local deployment, use the preview path
    const deploySlug = slug || projectId;
    const useR2 = isR2Configured();

    const astroConfigPath = path.join(buildDir, 'astro.config.mjs');
    if (existsSync(astroConfigPath)) {
      const configContent = readFileSync(astroConfigPath, 'utf-8');
      const basePath = useR2 ? '/' : `/previews/${deploySlug}`;
      const updatedConfig = configContent.replace(
        /base:\s*['"][^'"]*['"]/,
        `base: '${basePath}'`
      );
      writeFileSync(astroConfigPath, updatedConfig);
    }

    // Install or symlink node_modules
    const sourceNodeModules = path.join(sourceDir, 'node_modules');
    const buildNodeModules = path.join(buildDir, 'node_modules');

    if (existsSync(sourceNodeModules) && !existsSync(buildNodeModules)) {
      // Local dev: symlink from source template (fast)
      try {
        execSync(`ln -s "${sourceNodeModules}" "${buildNodeModules}"`);
      } catch {
        // Symlink failed (e.g. cross-device) — fall through to npm install
      }
    }

    if (!existsSync(buildNodeModules)) {
      // Serverless/CI: install dependencies from scratch
      console.log(`[astro-build] Installing dependencies for ${templateDir}...`);
      execSync('npm install --production --no-audit --no-fund', {
        cwd: buildDir,
        timeout: BUILD_TIMEOUT,
        stdio: 'pipe',
        env: {
          ...process.env,
          PATH: `/opt/homebrew/bin:/usr/local/bin:${process.env.PATH || ''}`,
        },
      });
    }

    // Run Astro build
    const astroBin = path.join(buildDir, 'node_modules', '.bin', 'astro');
    const buildCmd = existsSync(astroBin) ? `"${astroBin}" build` : 'npx astro build';
    console.log(`[astro-build] Running: ${buildCmd} in ${buildDir}`);
    execSync(buildCmd, {
      cwd: buildDir,
      timeout: BUILD_TIMEOUT,
      stdio: 'pipe',
      env: {
        ...process.env,
        NODE_ENV: 'production',
        PATH: `/opt/homebrew/bin:/usr/local/bin:${process.env.PATH || ''}`,
      },
    });

    const distDir = path.join(buildDir, 'dist');
    if (!existsSync(distDir)) {
      return { success: false, outputDir: '', error: 'Build succeeded but no dist/ directory found' };
    }

    // Deploy: upload to R2 or copy to public/previews/
    let builtUrl: string;
    if (useR2) {
      console.log(`[astro-build] Uploading to R2: previews/${deploySlug}/`);
      builtUrl = await uploadPreviewToR2(distDir, deploySlug);
    } else {
      builtUrl = deployToPublicPreviews(distDir, deploySlug);
    }

    return { success: true, outputDir: distDir, builtUrl };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown build error';
    if (err && typeof err === 'object' && 'stderr' in err) {
      const stderr = (err as { stderr: Buffer }).stderr?.toString?.() || '';
      console.error(`[astro-build] ${templateDir}/${projectId} failed:`, stderr.slice(0, 500));
    } else {
      console.error(`[astro-build] ${templateDir}/${projectId} failed:`, message);
    }
    return { success: false, outputDir: '', error: message };
  }
}

/**
 * Copies built Astro dist to the public previews directory.
 * Used for local dev when R2 is not configured.
 */
export function deployToPublicPreviews(distDir: string, slug: string): string {
  const targetDir = path.join(process.cwd(), 'public', 'previews', slug);

  if (existsSync(targetDir)) {
    rmSync(targetDir, { recursive: true, force: true });
  }

  cpSync(distDir, targetDir, { recursive: true });

  return `/previews/${slug}/index.html`;
}

/**
 * Cleans up a build directory.
 */
export function cleanupBuild(projectId: string): void {
  const buildDir = path.join('/tmp', `astro-build-${projectId}`);
  if (existsSync(buildDir)) {
    rmSync(buildDir, { recursive: true, force: true });
  }
}
