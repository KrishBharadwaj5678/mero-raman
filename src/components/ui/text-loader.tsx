import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../../lib/utils";

interface TextLoaderProps {
  text?: string;
  className?: string;
  onComplete?: () => void;
  gradientColors?: string[];
  backgroundColor?: string;
  duration?: {
    slideUp?: number;
    reveal?: number;
    slideDown?: number;
  };
  delays?: {
    stagger?: number;
    betweenAnimations?: number;
    beforeSlideDown?: number;
  };
}

const TextLoader: React.FC<TextLoaderProps> = ({
  text = "Mero Radha Raman",
  className = "",
  onComplete,
  gradientColors = ["#EC952B"],
  backgroundColor = "#17171A",
  duration = {
    slideUp: 0.5,
    reveal: 0.7,
    slideDown: 0.5,
  },
  delays = {
    stagger: 0.05,
    betweenAnimations: 0.3,
    beforeSlideDown: 0.5,
  },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const letters = textRef.current.querySelectorAll(".letter");
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.();
        },
      });

      // Set initial state
      gsap.set(letters, {
        y: 100,
        "--clipPath": "inset(100% 0 0 0)",
      });

      // Animation sequence
      tl.to(letters, {
        duration: duration.slideUp,
        y: 0,
        stagger: delays.stagger,
        ease: "power2.out",
      })
        .to(letters, {
          "--clipPath": "inset(0% 0 0 0)",
          duration: duration.reveal,
          delay: delays.betweenAnimations,
          ease: "power1.inOut",
        })
        .to(letters, {
          duration: duration.slideDown,
          y: -150,
          stagger: delays.stagger,
          delay: delays.beforeSlideDown,
          ease: "power2.in",
        })
        .to(
          containerRef.current,
          {
            y: "-100%",
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.3,
          },
          "-=0.2",
        );
    },
    { scope: containerRef, dependencies: [text, duration, delays, onComplete] },
  );

  const gradientString = `linear-gradient(45deg, ${gradientColors.join(", ")})`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 flex items-center justify-center overflow-hidden z-50",
        className,
      )}
      style={{ backgroundColor }}
    >
      <div
        ref={textRef}
        className="text-container flex relative overflow-hidden"
        style={{
          fontFamily: '"Oswald", "Bebas Neue", sans-serif',
          fontSize: "clamp(3rem, 12vw, 6.5rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          whiteSpace: "pre-wrap",
          wordSpacing: "0.02em",
        }}
      >
        {text.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="letter inline-block relative overflow-visible"
            data-text={char}
            style={
              {
                color: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(100px)",
                "--clipPath": "inset(100% 0 0 0)",
              } as React.CSSProperties
            }
          >
            {char}
            <span
              className="absolute left-0 top-0 w-full h-full"
              style={{
                content: `"${char}"`,
                backgroundImage: gradientString,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                clipPath: "var(--clipPath)",
                WebkitClipPath: "var(--clipPath)",
                transition: "clip-path 0s",
              }}
            >
              {char}
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");

        .text-container {
          /* Responsive font sizing */
          font-size: clamp(2.5rem, 8vw, 6.5rem);
        }

        @media (max-width: 640px) {
          .text-container {
            font-size: clamp(2rem, 10vw, 4rem);
          }
        }

        @media (max-width: 480px) {
          .text-container {
            font-size: clamp(1.5rem, 12vw, 3rem);
          }
        }

        @media (max-width: 360px) {
          .text-container {
            font-size: clamp(1.2rem, 14vw, 2.5rem);
          }
        }

        /* Ensure proper spacing on mobile */
        @media (max-width: 768px) {
          .letter {
            letter-spacing: -0.02em;
          }
        }
      `}</style>
    </div>
  );
};

export default TextLoader;
