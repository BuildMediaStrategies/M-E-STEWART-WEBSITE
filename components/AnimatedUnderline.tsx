import React, { useEffect, useRef, useState } from 'react';

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  delay?: number;
  color?: string;
}

export const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  children,
  delay = 0,
  color = '#0095ff'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <span
      ref={elementRef}
      className="animated-underline-wrapper"
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {children}
      <span
        className={`animated-underline ${isVisible ? 'visible' : ''}`}
        style={{
          position: 'absolute',
          bottom: '-4px',
          left: 0,
          width: '100%',
          height: '3px',
          backgroundColor: color,
          transformOrigin: 'left',
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        }}
      />
    </span>
  );
};
