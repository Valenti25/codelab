'use client';
import { motion, useInView, type Variants, type Transition } from 'framer-motion';
import * as React from 'react';

export function TextFade({
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
}: {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  // ล็อกชนิด transition ให้ถูกต้อง
  const spring: Transition = { type: 'spring' };

  // ประกาศเป็น Variants ชัดเจน และคำนวณจาก direction
  const FADE_Y = direction === 'down' ? -18 : 18;
  const FADE_DOWN: Variants = {
    show: { opacity: 1, y: 0, transition: spring },
    hidden: { opacity: 0, y: FADE_Y },
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren } as Transition,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : undefined}   // ✅ ไม่ใช้ '' แล้ว
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
