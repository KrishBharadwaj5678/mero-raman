import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type Ctx = { scrollToId: (id: string) => void };
const SmoothScrollContext = createContext<Ctx>({ scrollToId: () => {} });

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToId = (id: string) => {
    if (typeof window === "undefined") return;
    if (id === "top" || id === "hero") {
<<<<<<< HEAD
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { offset: 0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -72 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
=======
      lenisRef.current?.scrollTo(0, { offset: 0 });
      return;
    }
    const el = document.getElementById(id);
    if (el) lenisRef.current?.scrollTo(el, { offset: -72 });
>>>>>>> origin/main
  };

  return (
    <SmoothScrollContext.Provider value={{ scrollToId }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export const useSmoothScroll = () => useContext(SmoothScrollContext);
