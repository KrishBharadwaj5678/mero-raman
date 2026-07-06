import { useEffect, useRef, useState } from "react";
import { VolumeX, Volume2 } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { useSmoothScroll } from "../lib/smooth-scroll";
import { assets } from "../constants/assets";

const NAV = [
  { id: "home", label: "Home" },
  { id: "articles", label: "Articles" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader({
  variant = "light",
}: {
  variant?: "light" | "transparent";
}) {
  const { t } = useI18n();
  const { scrollToId } = useSmoothScroll();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const base =
    variant === "transparent"
      ? "bg-temple-stone/30 backdrop-blur-xl border-temple-cream/10 text-temple-cream"
      : "bg-temple-cream/85 backdrop-blur-xl border-temple-gold/10 text-temple-stone";

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToId(id);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", id === "home" ? " " : `#${id}`);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 border-b transition-colors ${base}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a
          href="#"
          onClick={(e) => handleClick(e, "home")}
          className="flex flex-col leading-none group"
        >
          <span
            className={`font-display text-2xl font-semibold tracking-tight ${
              variant === "transparent"
                ? "text-temple-cream"
                : "text-temple-gold"
            } group-hover:opacity-90 transition`}
          >
            {t("brand.name")}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-[0.23em] font-medium">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="group relative px-1 py-1 text-inherit "
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <button type="button" onClick={toggleAudio} className="cursor-pointer">
          {isPlaying ? (
            <Volume2 className="h-5 w-5" />
          ) : (
            <VolumeX className="h-5 w-5" />
          )}
        </button>
        <audio ref={audioRef} src={assets.heroVideo} preload="auto" loop />
      </div>
    </nav>
  );
}
