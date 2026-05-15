"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function parseNumeric(val: string): { num: number; prefix: string; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9\s]+)([^0-9]*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  const num = parseInt(match[2].replace(/\s/g, ""), 10);
  return { num, prefix: match[1], suffix: match[3] };
}

export default function AnimatedCounter({ target, duration = 2000 }: Props) {
  const { num, prefix, suffix } = parseNumeric(target);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * num));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, duration]);

  const display = num >= 1000 ? count.toLocaleString("sk-SK") : count.toString();

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
