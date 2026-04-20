import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const LiveBadge = ({ status = 'Live', color = 'emerald' }) => {
  const colorMap = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    primary: 'bg-primary',
    amber: 'bg-amber-500',
    destructive: 'bg-destructive'
  };

  const selectedColor = colorMap[color] || colorMap.emerald;

  return (
    <div className="flex items-center gap-2 border border-border bg-secondary/50 rounded-full px-2.5 py-1 text-xs font-medium w-fit">
      <span className="relative flex h-2 w-2">
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", selectedColor)}></span>
        <span className={cn("relative inline-flex rounded-full h-2 w-2", selectedColor)}></span>
      </span>
      <span className="text-foreground">{status}</span>
    </div>
  );
};

export const LiveDot = ({ color = 'emerald' }) => {
  const colorMap = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    primary: 'bg-primary',
    amber: 'bg-amber-500',
    destructive: 'bg-destructive'
  };
  const selectedColor = colorMap[color] || colorMap.emerald;

  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", selectedColor)}></span>
      <span className={cn("relative inline-flex rounded-full h-2 w-2", selectedColor)}></span>
    </span>
  );
};
