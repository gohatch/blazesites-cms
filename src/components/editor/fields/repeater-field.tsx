'use client';

import { type FieldDef } from '@/lib/editor/content-sections';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';

/**
 * Placeholder repeater field component.
 * Renders a basic list of items with add/remove controls.
 * Will be expanded with sub-field support in a future iteration.
 */
export function RepeaterField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (path: string, value: unknown) => void;
}) {
  const items = Array.isArray(value) ? value : [];

  function handleAdd() {
    onChange(field.path, [...items, '']);
  }

  function handleRemove(index: number) {
    const updated = items.filter((_, i) => i !== index);
    onChange(field.path, updated);
  }

  function handleItemChange(index: number, newValue: string) {
    const updated = items.map((item, i) => (i === index ? newValue : item));
    onChange(field.path, updated);
  }

  return (
    <div>
      <Label className="text-xs">{field.label}</Label>
      <div className="mt-1 space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={typeof item === 'string' ? item : JSON.stringify(item)}
              onChange={(e) => handleItemChange(index, e.target.value)}
              className="flex-1"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0 text-muted-foreground hover:text-destructive"
              onClick={() => handleRemove(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={handleAdd}
        >
          <Plus className="mr-1 h-3 w-3" />
          Add item
        </Button>
      </div>
    </div>
  );
}
