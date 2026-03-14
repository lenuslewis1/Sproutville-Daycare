import React from 'react';
import { useInView } from '@/hooks/use-in-view';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 700,
}: FadeInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const getTransform = () => {
    if (isInView) return 'translate-x-0 translate-y-0 scale-100';
    switch (direction) {
      case 'up': return 'translate-y-8';
      case 'down': return '-translate-y-8';
      case 'left': return 'translate-x-8';
      case 'right': return '-translate-x-8';
      case 'none': return 'scale-95';
      default: return 'translate-y-8';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all ease-out ${className} ${
        isInView ? 'opacity-100' : 'opacity-0'
      } ${getTransform()}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
