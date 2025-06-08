
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassyPanelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  blur?: 'light' | 'medium' | 'strong';
  opacity?: 'low' | 'medium' | 'high';
}

const GlassyPanel = ({ 
  children, 
  className,
  style,
  blur = 'medium', 
  opacity = 'medium' 
}: GlassyPanelProps) => {
  const blurClasses = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    strong: 'backdrop-blur-lg'
  };

  const opacityClasses = {
    low: 'bg-background/10',
    medium: 'bg-background/20',
    high: 'bg-background/30'
  };

  return (
    <div 
      className={cn(
        'rounded-xl border border-background/20 shadow-lg',
        blurClasses[blur],
        opacityClasses[opacity],
        'backdrop-saturate-150',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassyPanel;
