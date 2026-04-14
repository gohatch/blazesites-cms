'use client';

import { useState, useRef } from 'react';
import { type FieldDef } from '@/lib/editor/content-sections';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ChevronDown, ChevronRight, GripVertical, Plus, Trash2 } from 'lucide-react';

interface RepeaterFieldProps {
  field: FieldDef;
  items: unknown[];
  onUpdateField: (path: string, value: unknown) => void;
  onAddItem: (path: string, item: unknown) => void;
  onRemoveItem: (path: string, index: number) => void;
  onMoveItem: (path: string, from: number, to: number) => void;
}

/** Get a summary title from the first text sub-field, or fall back to "Item {n}" */
function getItemTitle(item: unknown, subFields: FieldDef[] | undefined, index: number): string {
  if (item && typeof item === 'object' && subFields) {
    const textField = subFields.find((f) => f.type === 'text');
    if (textField) {
      const val = (item as Record<string, unknown>)[textField.path];
      if (typeof val === 'string' && val.trim().length > 0) {
        return val;
      }
    }
  }
  return `Item ${index + 1}`;
}

export function RepeaterField({
  field,
  items,
  onUpdateField,
  onAddItem,
  onRemoveItem,
  onMoveItem,
}: RepeaterFieldProps) {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());
  const dragIndexRef = useRef<number | null>(null);

  function toggleExpanded(index: number) {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function handleDragStart(e: React.DragEvent, index: number) {
    dragIndexRef.current = index;
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDrop(e: React.DragEvent, dropIndex: number) {
    e.preventDefault();
    const fromIndex = dragIndexRef.current;
    if (fromIndex !== null && fromIndex !== dropIndex) {
      onMoveItem(field.path, fromIndex, dropIndex);
    }
    dragIndexRef.current = null;
  }

  function handleAdd() {
    if (field.defaultItem) {
      onAddItem(field.path, field.defaultItem());
      // Auto-expand the new item
      setExpandedIndices((prev) => new Set(prev).add(items.length));
    }
  }

  function renderSubField(subField: FieldDef, item: unknown, index: number) {
    const itemObj = (item && typeof item === 'object' ? item : {}) as Record<string, unknown>;
    const value = itemObj[subField.path];
    const fullPath = `${field.path}.${index}.${subField.path}`;

    switch (subField.type) {
      case 'text':
        return (
          <div key={subField.path}>
            <Label className="text-xs">{subField.label}</Label>
            <Input
              value={(value as string) ?? ''}
              onChange={(e) => onUpdateField(fullPath, e.target.value)}
              placeholder={subField.placeholder}
              className="mt-1"
            />
          </div>
        );

      case 'textarea':
        return (
          <div key={subField.path}>
            <Label className="text-xs">{subField.label}</Label>
            <Textarea
              value={(value as string) ?? ''}
              onChange={(e) => onUpdateField(fullPath, e.target.value)}
              placeholder={subField.placeholder}
              rows={3}
              className="mt-1"
            />
          </div>
        );

      case 'image':
        return (
          <div key={subField.path}>
            <Label className="text-xs">{subField.label}</Label>
            <Input
              value={(value as string) ?? ''}
              onChange={(e) => onUpdateField(fullPath, e.target.value)}
              placeholder="Image URL"
              className="mt-1"
            />
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <Label className="text-xs">{field.label}</Label>
        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className="mt-2 space-y-2">
        {items.map((item, index) => {
          const isExpanded = expandedIndices.has(index);
          const title = getItemTitle(item, field.repeaterFields, index);

          return (
            <div
              key={index}
              className="group rounded-lg border bg-card"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              {/* Card header */}
              <div
                className="flex cursor-pointer items-center gap-1 px-2 py-2"
                onClick={() => toggleExpanded(index)}
              >
                <div
                  className="cursor-grab text-muted-foreground hover:text-foreground"
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <GripVertical className="h-4 w-4" />
                </div>

                <span className="flex-1 truncate text-sm font-medium">{title}</span>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 shrink-0 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveItem(field.path, index);
                  }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>

                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </div>

              {/* Expanded sub-fields */}
              {isExpanded && field.repeaterFields && (
                <div className="space-y-3 border-t px-3 py-3">
                  {field.repeaterFields.map((subField) =>
                    renderSubField(subField, item, index),
                  )}
                </div>
              )}
            </div>
          );
        })}

        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={handleAdd}
        >
          <Plus className="mr-1 h-3 w-3" />
          Add {field.label?.toLowerCase() === 'repeater' ? 'item' : field.label?.toLowerCase() || 'item'}
        </Button>
      </div>
    </div>
  );
}
