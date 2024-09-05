import React, { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  addclass?: string;
  children?: any;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  addclass,
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate');
        }
        // else {
        //   sectionRef.current?.classList.remove('animate');
        // }
      });
    });

    const target = sectionRef.current;
    if (target) {
      observerRef.current.observe(target);
    }

    return () => {
      const target = sectionRef.current;
      if (target) {
        observerRef.current?.unobserve(target);
      }
    };
  }, []);

  return (
    <div className={`${addclass ? addclass : ''}`} ref={sectionRef}>
      {children}
    </div>
  );
};
