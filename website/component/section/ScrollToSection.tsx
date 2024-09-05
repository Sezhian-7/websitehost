import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

interface ScrollToSectionProps {
  sectionId: string;
  className: string;
  children: any;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({
  sectionId,
  children,
  className,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const location = useRouter();

  useEffect(() => {
    const { hash } = window.location;
    console.log('hash', hash);

    if (hash === `#${sectionId}` && sectionRef.current) {
      const element = document.querySelector(hash);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top;
        const offset = window.pageYOffset + offsetTop - 100; // adjust this value as needed
        setTimeout(() => {
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location, sectionId]);

  return (
    <div
      ref={sectionRef}
      id={sectionId}
      className={`${className ? className : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollToSection;
