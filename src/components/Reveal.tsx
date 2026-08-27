"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, for offsetting a list of siblings. */
  delay?: number;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal${className ? ` ${className}` : ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
