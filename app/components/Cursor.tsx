'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const isTouchDevice = 'ontouchstart' in window;

  useEffect(() => {
    const cursor = cursorRef.current;

    if (isTouchDevice || !cursor) {
      return;
    }

    const handleMouseMovement = (e: MouseEvent) => {
      const { clientX, clientY, target } = e;

      const shouldAnimate =
        (target as HTMLElement).closest('a') ||
        (target as HTMLElement).closest('button') ||
        (target as HTMLElement).getAttribute('data-hovered');

      gsap.to(cursor, {
        x: clientX + 3,
        y: clientY + 3,
        duration: 0.4,
        ease: 'power3.out',
        transform: `scale(${shouldAnimate ? 8 : 1})`,
      });
    };

    window.addEventListener('mousemove', handleMouseMovement);
    return () => window.removeEventListener('mousemove', handleMouseMovement);
  }, [isTouchDevice]);

  return (
    <div
      ref={cursorRef}
      className='w-2 h-2 rounded-full fixed -top-2 -left-2 mix-blend-difference bg-white pointer-events-none'
    />
  );
};

export default Cursor;
