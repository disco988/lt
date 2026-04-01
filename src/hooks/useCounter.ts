import { useState, useEffect, useRef, RefObject } from 'react';

export function useCounter(
  target: number,
  duration = 1800
): [number, RefObject<HTMLSpanElement>] {
  const [count, setCount]  = useState(0);
  const ref                = useRef<HTMLSpanElement>(null);
  const started            = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          /* make the element visible */
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';

          const fps   = 60;
          const steps = duration / (1000 / fps);
          const inc   = target / steps;
          let cur     = 0;

          const timer = setInterval(() => {
            cur += inc;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else               { setCount(Math.round(cur)); }
          }, 1000 / fps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}
