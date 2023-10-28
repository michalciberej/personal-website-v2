import { useState, useEffect, useRef } from 'react';

export const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState('home');
  let sections = useRef<NodeListOf<HTMLElement>>();

  const handleScroll = () => {
    sections.current = document.querySelectorAll('section');
    const pageYOffset = window.scrollY;
    let newActiveSection: string = '';

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }

      if (
        window.scrollY ===
        Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ) -
          window.innerHeight
      ) {
        newActiveSection = 'contact';
      }
    });
    setCurrentSection(newActiveSection);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return currentSection;
};
