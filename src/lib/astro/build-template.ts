import { execSync } from 'child_process';
import { existsSync, cpSync, writeFileSync, readFileSync, rmSync, mkdirSync } from 'fs';
import path from 'path';
import { adaptBrandToTemplate } from '@/lib/ai/adapt-brand-to-template';
import type { AstroBrandContent } from '@/types';

const TEMPLATES_DIR = path.join(process.cwd(), 'templates');
const BUILD_TIMEOUT = 60_000; // 60 seconds

interface BuildResult {
  success: boolean;
  outputDir: string;
  error?: string;
}

/**
 * Builds an Astro template with custom brand content.
 *
 * 1. Copies template to a temp dir
 * 2. Writes adapted brand.json
 * 3. Runs `astro build`
 * 4. Returns path to dist/ output
 *
 * The caller is responsible for uploading dist/ contents and cleaning up.
 */
export async function buildAstroTemplate(
  templateDir: string,
  brandContent: AstroBrandContent,
  projectId: string
): Promise<BuildResult> {
  const sourceDir = path.join(TEMPLATES_DIR, templateDir);
  const buildDir = path.join('/tmp', `astro-build-${projectId}`);

  // Validate template exists
  if (!existsSync(sourceDir)) {
    return { success: false, outputDir: '', error: `Template "${templateDir}" not found` };
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

    // Update Astro config base path to match the project slug (not the template dir)
    const astroConfigPath = path.join(buildDir, 'astro.config.mjs');
    if (existsSync(astroConfigPath)) {
      const configContent = readFileSync(astroConfigPath, 'utf-8');
      const updatedConfig = configContent.replace(
        /base:\s*['"]\/previews\/[^'"]+['"]/,
        `base: '/previews/${projectId}'`
      );
      writeFileSync(astroConfigPath, updatedConfig);
    }

    // Symlink node_modules from source template to avoid re-installing
    const sourceNodeModules = path.join(sourceDir, 'node_modules');
    const buildNodeModules = path.join(buildDir, 'node_modules');
    if (existsSync(sourceNodeModules) && !existsSync(buildNodeModules)) {
      execSync(`ln -s "${sourceNodeModules}" "${buildNodeModules}"`);
    } else if (!existsSync(buildNodeModules)) {
      // Fallback: install dependencies
      execSync('npm install --production', {
        cwd: buildDir,
        timeout: BUILD_TIMEOUT,
        stdio: 'pipe',
        env: {
          ...process.env,
          PATH: `/opt/homebrew/bin:/usr/local/bin:${process.env.PATH || ''}`,
        },
      });
    }

    // Run Astro build — use the local astro binary from symlinked node_modules
    const astroBin = path.join(buildDir, 'node_modules', '.bin', 'astro');
    const buildCmd = existsSync(astroBin) ? `"${astroBin}" build` : 'npx astro build';
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

    return { success: true, outputDir: distDir };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown build error';
    // Log stderr from execSync errors for debugging
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
 * This makes it servable by Next.js as a static file.
 */
export function deployToPublicPreviews(distDir: string, slug: string): string {
  const targetDir = path.join(process.cwd(), 'public', 'previews', slug);

  // Clear existing preview
  if (existsSync(targetDir)) {
    rmSync(targetDir, { recursive: true, force: true });
  }

  // Copy dist to public previews
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
