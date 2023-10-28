import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useCurrentWindowSize = () => {
  const [currentWindowSize, setCurrentWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      const { innerWidth, innerHeight } = window;
      setCurrentWindowSize({ width: innerWidth, height: innerHeight });
    };

    updateWindowSize();

    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return currentWindowSize;
};
