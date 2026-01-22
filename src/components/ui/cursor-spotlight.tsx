'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type CursorSpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function CursorSpotlight({
  className,
  size = 280,
  springOptions = { bounce: 0, stiffness: 200, damping: 30 },
}: CursorSpotlightProps) {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      // Use pageX/pageY for full document position (works with scroll)
      mouseX.set(event.pageX);
      mouseY.set(event.pageY);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mouseleave', handleLeave);

    // Set initial visibility
    setIsVisible(true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      className={cn(
        'pointer-events-none absolute rounded-full transition-opacity duration-200',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.15) 65%, transparent 85%)',
        filter: 'blur(25px)',
      }}
    />
  );
}
