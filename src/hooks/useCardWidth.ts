import { useEffect, useState, useRef } from 'react';

export function useCardWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    update();

    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);

  return { ref, width };
}
