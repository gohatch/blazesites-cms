'use client';

import { useContentEditorStore } from '@/lib/editor/content-store';
import { contentSections, type FieldDef } from '@/lib/editor/content-sections';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MediaUploader } from '@/components/ui/media-uploader';
import { RepeaterField } from './fields/repeater-field';

const GOOGLE_FONTS = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Poppins',
  'Raleway',
  'Oswald',
  'Merriweather',
  'Playfair Display',
  'Nunito',
  'Source Sans 3',
  'PT Sans',
  'Work Sans',
  'DM Sans',
  'Space Grotesk',
  'Outfit',
  'Sora',
  'Manrope',
  'Lexend',
];

/** Safely access a nested value by dot-separated path */
function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function FieldRenderer({
  field,
  value,
  onChange,
  onAddItem,
  onRemoveItem,
  onMoveItem,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (path: string, value: unknown) => void;
  onAddItem?: (path: string, item: unknown) => void;
  onRemoveItem?: (path: string, index: number) => void;
  onMoveItem?: (path: string, from: number, to: number) => void;
}) {
  switch (field.type) {
    case 'text':
      return (
        <div>
          <Label className="text-xs">{field.label}</Label>
          <Input
            value={(value as string) ?? ''}
            onChange={(e) => onChange(field.path, e.target.value)}
            placeholder={field.placeholder}
            className="mt-1"
          />
        </div>
      );

    case 'textarea':
      return (
        <div>
          <Label className="text-xs">{field.label}</Label>
          <Textarea
            value={(value as string) ?? ''}
            onChange={(e) => onChange(field.path, e.target.value)}
            placeholder={field.placeholder}
            rows={4}
            className="mt-1"
          />
        </div>
      );

    case 'color':
      return (
        <div>
          <Label className="text-xs">{field.label}</Label>
          <div className="mt-1 flex gap-2">
            <input
              type="color"
              value={(value as string) || '#000000'}
              onChange={(e) => onChange(field.path, e.target.value)}
              className="h-9 w-9 cursor-pointer rounded border"
            />
            <Input
              value={(value as string) ?? ''}
              onChange={(e) => onChange(field.path, e.target.value)}
              placeholder="#000000"
              className="flex-1"
            />
          </div>
        </div>
      );

    case 'image':
      return (
        <div>
          <Label className="text-xs">{field.label}</Label>
          <div className="mt-1">
            <MediaUploader
              value={(value as string) ?? ''}
              onChange={(url) => onChange(field.path, url)}
              compact
            />
          </div>
        </div>
      );

    case 'font':
      return (
        <div>
          <Label className="text-xs">{field.label}</Label>
          <select
            value={(value as string) ?? ''}
            onChange={(e) => onChange(field.path, e.target.value)}
            className="mt-1 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Select a font...</option>
            {GOOGLE_FONTS.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      );

    case 'repeater':
      return (
        <RepeaterField
          field={field}
          items={Array.isArray(value) ? value : []}
          onUpdateField={onChange}
          onAddItem={onAddItem!}
          onRemoveItem={onRemoveItem!}
          onMoveItem={onMoveItem!}
        />
      );

    default:
      return null;
  }
}

export function ContentFields() {
  const activeSection = useContentEditorStore((s) => s.activeSection);
  const brandContent = useContentEditorStore((s) => s.brandContent);
  const updateField = useContentEditorStore((s) => s.updateField);
  const addArrayItem = useContentEditorStore((s) => s.addArrayItem);
  const removeArrayItem = useContentEditorStore((s) => s.removeArrayItem);
  const moveArrayItem = useContentEditorStore((s) => s.moveArrayItem);

  if (!activeSection) {
    return (
      <aside className="flex h-full w-80 flex-col border-l bg-background">
        <div className="flex flex-1 items-center justify-center p-6">
          <p className="text-center text-sm text-muted-foreground">
            Select a section from the sidebar to start editing
          </p>
        </div>
      </aside>
    );
  }

  const section = contentSections.find((s) => s.id === activeSection);

  if (!section) {
    return (
      <aside className="flex h-full w-80 flex-col border-l bg-background">
        <div className="flex flex-1 items-center justify-center p-6">
          <p className="text-center text-sm text-muted-foreground">
            Unknown section
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="flex h-full w-80 flex-col border-l bg-background">
      <div className="border-b p-3">
        <h3 className="text-sm font-semibold">{section.label}</h3>
        {/* Section description if available */}
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-3">
        {section.fields.map((field) => {
          const value = getByPath(brandContent, field.path);
          return (
            <FieldRenderer
              key={field.path}
              field={field}
              value={value}
              onChange={updateField}
              onAddItem={addArrayItem}
              onRemoveItem={removeArrayItem}
              onMoveItem={moveArrayItem}
            />
          );
        })}
      </div>
    </aside>
  );
}
