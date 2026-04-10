'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  // Parse the numeric part and preserve prefix/suffix
  const { number, prefix, suffix } = parseValue(value);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 20, duration: 1.5 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) {
      motionValue.set(number);
    }
  }, [inView, motionValue, number]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (displayRef.current) {
        const formatted = number >= 100
          ? Math.round(latest).toLocaleString()
          : Number.isInteger(number)
          ? Math.round(latest).toString()
          : latest.toFixed(1);
        displayRef.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix, number]);

  return (
    <motion.span ref={ref} className={className}>
      <span ref={displayRef}>{prefix}0{suffix}</span>
    </motion.span>
  );
}

function parseValue(raw: string): { number: number; prefix: string; suffix: string } {
  // Handle cases like "$14.2k", "200+", "99.99%", "4.8★", "<50ms", "2,800+"
  const cleaned = raw.replace(/,/g, '');
  const match = cleaned.match(/^([^0-9]*)([\d.]+)(.*)$/);
  if (!match) return { number: 0, prefix: '', suffix: raw };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}
