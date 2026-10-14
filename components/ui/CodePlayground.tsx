'use client';

import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Card } from './Card';
import { cn } from '@/lib/utils/cn';

interface CodePlaygroundProps {
  code: string;
  title?: string;
  description?: string;
  className?: string;
  scope?: Record<string, any>;
  noInline?: boolean;
  showPreview?: boolean;
}

export function CodePlayground({
  code,
  title,
  description,
  className,
  scope = {},
  noInline = false,
  showPreview = true,
}: CodePlaygroundProps) {
  // Add React to scope so JSX works in live code
  const enhancedScope = {
    React,
    ...scope,
  };

  return (
    <Card className={cn('overflow-hidden', className)}>
      {(title || description) && (
        <div className="mb-4 pb-4 border-b border-border">
          {title && (
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-secondary">{description}</p>
          )}
        </div>
      )}

      <LiveProvider code={code} scope={enhancedScope} noInline={noInline}>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Editor */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-secondary uppercase tracking-wider">
              Code Editor
            </div>
            <div className="rounded-lg overflow-hidden border border-border bg-card-bg">
              <LiveEditor
                className="font-mono text-sm"
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  backgroundColor: 'transparent',
                  padding: '1rem',
                }}
              />
            </div>
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="space-y-2">
              <div className="text-xs font-medium text-secondary uppercase tracking-wider">
                Live Preview
              </div>
              <div className="rounded-lg border border-border bg-background p-4 min-h-[200px]">
                <LivePreview />
              </div>
            </div>
          )}
        </div>

        {/* Error Display */}
        <LiveError className="mt-4 p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm font-mono" />
      </LiveProvider>
    </Card>
  );
}
