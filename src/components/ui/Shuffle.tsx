import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Shuffle.css";

type ShuffleProps = {
  text: string;
  direction?: "left" | "right";
  duration?: number;
  stagger?: number;
  className?: string;
};

const Shuffle: React.FC<ShuffleProps> = ({
  text,
  direction = "right",
  duration = 0.7,
  stagger = 0.06,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const chars = el.querySelectorAll(".shuffle-char");

    // 🔥 Increased offset for visibility
    const offset = direction === "right" ? -60 : 60;

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        x: offset,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        ease: "power3.out",
        stagger,
        clearProps: "transform",
      }
    );
  }, [direction, duration, stagger]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="shuffle-char inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default Shuffle;
