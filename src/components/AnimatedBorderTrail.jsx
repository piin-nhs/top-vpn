import React from 'react';
import { cn } from '../lib/utils';

export default function AnimatedBorderTrail({ 
  children, 
  className, 
  containerClassName,
  trailColor = "linear-gradient(to right, #674188, #F97316, #C3ACD0)",
  trailSize = 90,
  duration = 5,
  borderRadius = 24,
  hoverOnly = false,
  ...props
}) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden border border-[#674188]/20 bg-white group/trail",
        containerClassName
      )}
      style={{ borderRadius: `${borderRadius}px`, ...props.style }}
      {...props}
    >
      {/* Animated trail element from Animata using CSS motion path */}
      <div
        className={cn(
          "absolute pointer-events-none transition-opacity duration-500",
          hoverOnly ? "opacity-0 group-hover/trail:opacity-100" : "opacity-100"
        )}
        style={{
          width: `${trailSize}px`,
          height: `${trailSize}px`,
          background: trailColor,
          filter: "blur(20px)",
          offsetPath: `rect(0 100% 100% 0 round ${borderRadius}px)`,
          animation: `trail-move ${duration}s linear infinite`,
        }}
      />
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
}
