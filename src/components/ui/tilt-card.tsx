  import { ReactNode, useRef } from "react";

  interface TiltCardProps {
    children: ReactNode;
  }

  export const TiltCard = ({ children }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;

      ref.current.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      ref.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    return (
      <div
        className="relative"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
            will-change-transform
            transition-transform
            duration-300
          "
          style={{
            transformStyle: "flat", // 🔥 THIS IS THE KEY FIX
          }}
        >
          {children}
        </div>
      </div>
    );
  };
