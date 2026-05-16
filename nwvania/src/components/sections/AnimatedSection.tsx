"use client";

// AnimatedSection uses the browser's IntersectionObserver API to detect
// when an element enters the viewport and applies a CSS transition to it.
// This makes sections "fade in" as the user scrolls — the same technique
// used by Apple, Google, and major tech company landing pages.

import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Optional delay in milliseconds before animation starts
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    // Create observer that fires when element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Wait for optional delay, then apply the "visible" state
          timeoutId = setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) translateX(0)";
          }, delay);
          // Stop observing once animated — no need to re-trigger
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08, // Fire when 8% of element is visible
        rootMargin: "0px 0px -40px 0px", // Start slightly before full visibility
      },
    );

    observer.observe(el);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, [delay]);

  // Determine initial transform based on direction
  const initialTransform = {
    up: "translateY(36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
    none: "none",
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition:
          "opacity 0.7s ease, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
