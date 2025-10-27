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
  const [isKonamiCodeActive, setIsKonamiCodeActive] = useState(false);

  useEffect(() => {
    let keys: string[] = [];

    const handleKeyDown = (event: KeyboardEvent) => {
      keys = [...keys, event.key].slice(-KONAMI_CODE.length);
      if (JSON.stringify(keys) === JSON.stringify(KONAMI_CODE)) {
        setIsKonamiCodeActive(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return isKonamiCodeActive;
};
