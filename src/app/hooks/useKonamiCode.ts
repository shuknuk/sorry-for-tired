'use client';

import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const useKonamiCode = () => {
  const [keys, setKeys] = useState<string[]>([]);
  const [isKonamiCodeActive, setIsKonamiCodeActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, event.key].slice(-KONAMI_CODE.length);
        if (JSON.stringify(newKeys) === JSON.stringify(KONAMI_CODE)) {
          setIsKonamiCodeActive(true);
        }
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return isKonamiCodeActive;
};
