'use client';

import { cn } from '@/lib/utils';
import React from 'react';

type DottedBackgroundProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedBackground({ className, children, ...props }: DottedBackgroundProps) {
  return (
    <div
      className={cn('relative', className)}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0',
      }}
      {...props}
    >
      {children}
    </div>
  );
}