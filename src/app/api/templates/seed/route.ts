import { NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { seedTemplates } from '@/lib/templates/seed-templates';
import { batch1Templates } from '@/lib/templates/seed-templates-batch1';
import { batch2Templates } from '@/lib/templates/seed-templates-batch2';
import { batch3Templates } from '@/lib/templates/seed-templates-batch3';
import { batch4Templates } from '@/lib/templates/seed-templates-batch4';

export async function POST() {
  const supabase = await createServiceRoleClient();

  const results = { inserted: 0, updated: 0, errors: [] as string[] };

  const allTemplates = [...seedTemplates, ...batch1Templates, ...batch2Templates, ...batch3Templates, ...batch4Templates];

  for (const template of allTemplates) {
    // Check if template with this name already exists
    const { data: existing } = await supabase
      .from('templates')
      .select('id')
      .eq('name', template.name)
      .single();

    if (existing) {
      // Update existing template
      const { error } = await supabase
        .from('templates')
        .update({
          description: template.description,
          industry_tags: template.industry_tags,
          style_tags: template.style_tags,
          page_count: template.page_count,
          template_data: template.template_data,
          status: 'active',
        })
        .eq('id', existing.id);

      if (error) {
        results.errors.push(`Update "${template.name}": ${error.message}`);
      } else {
        results.updated++;
      }
    } else {
      // Insert new template
      const { error } = await supabase
        .from('templates')
        .insert({
          name: template.name,
          description: template.description,
          industry_tags: template.industry_tags,
          style_tags: template.style_tags,
          page_count: template.page_count,
          template_data: template.template_data,
          status: 'active',
        });

      if (error) {
        results.errors.push(`Insert "${template.name}": ${error.message}`);
      } else {
        results.inserted++;
      }
    }
  }

  return NextResponse.json({
    success: results.errors.length === 0,
    total: allTemplates.length,
    ...results,
  });
}
