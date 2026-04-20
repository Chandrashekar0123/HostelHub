import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Card = React.forwardRef(({ className, children, topAccent, hoverEffect = false, ...props }, ref) => {
  const CardComponent = hoverEffect ? motion.div : 'div';
  const hoverProps = hoverEffect ? { whileHover: { y: -5 }, transition: { duration: 0.2 } } : {};
  
  const accentClasses = {
    blue: "border-t-blue-500",
    indigo: "border-t-indigo-500",
    purple: "border-t-purple-500",
    rose: "border-t-rose-500",
    emerald: "border-t-emerald-500",
    amber: "border-t-amber-500"
  };

  return (
    <CardComponent
      ref={ref}
      className={cn(
        "rounded-2xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden relative",
        topAccent && "border-t-4",
        topAccent && accentClasses[topAccent],
        className
      )}
      {...hoverProps}
      {...props}
    >
      {children}
    </CardComponent>
  );
});

const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
);

const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

const CardFooter = ({ className, ...props }) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

Card.displayName = "Card";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
