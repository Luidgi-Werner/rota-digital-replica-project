"use client";

import { useState, useEffect, useRef } from 'react';
import NumberFlow, { type Value } from "@number-flow/react";

interface AnimatedNumberProps {
  value: number;
  className?: string;
}

export function AnimatedNumber({ value, className = "" }: AnimatedNumberProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate to the target value
          setCurrentValue(value);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, isVisible]);

  return (
    <div ref={ref} className={className}>
      <NumberFlow value={currentValue} />
    </div>
  );
}

export { NumberFlow };