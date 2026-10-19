<<<<<<< HEAD
import { useRef, useState } from "react";
import { Menu, Volume2, VolumeX, X } from "lucide-react";
=======
import { useEffect, useRef, useState } from "react";
import { VolumeX, Volume2 } from "lucide-react";
import { useI18n } from "../lib/i18n";
>>>>>>> origin/main
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
<<<<<<< HEAD
  const { scrollToId } = useSmoothScroll();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
    } else {
      try {
        await audio.play();
        setAudioError("");
      } catch {
        setIsPlaying(false);
        setAudioError("Audio could not be played. Please try again.");
=======
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
>>>>>>> origin/main
      }
    }
  };

  const base =
    variant === "transparent"
<<<<<<< HEAD
      ? "bg-temple-stone/75 backdrop-blur-xl border-temple-cream/10 text-temple-cream shadow-lg shadow-black/10"
      : "bg-temple-cream/95 backdrop-blur-xl border-temple-gold/15 text-temple-stone shadow-sm shadow-temple-stone/5";

  const handleClick = (e: React.MouseEvent, id: string) => {
    setMobileMenuOpen(false);
    if (!document.getElementById(id)) return;

    e.preventDefault();
    scrollToId(id);
    history.replaceState(null, "", id === "home" ? "/" : `/#${id}`);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${base}`}
    >
      <div className="max-w-7xl mx-auto flex min-h-18 items-center justify-between px-6 md:px-10 py-3">
        <a
          href="/#home"
          onClick={(e) => handleClick(e, "home")}
          aria-label="Shree Radha Raman home"
          className="flex items-center leading-none"
        >
          <img
            src="/images/logo.png"
            alt="Shree Radha Raman"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-11 w-auto object-contain md:h-12"
          />
        </a>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-current/10 bg-current/[0.04] px-2 py-1 text-[10px] uppercase tracking-[0.2em] font-medium">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="group relative rounded-full px-4 py-2 text-current/75 transition-colors duration-200 hover:bg-temple-gold/10 hover:text-temple-saffron focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold"
            >
              <span className="relative z-10">{item.label}</span>
=======
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
>>>>>>> origin/main
            </a>
          ))}
        </div>

<<<<<<< HEAD
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={isPlaying ? "Pause" : "Play"}
            aria-pressed={isPlaying}
            data-tooltip={isPlaying ? "Pause" : "Play"}
            className="has-tooltip inline-flex h-10 w-10 items-center justify-center rounded-full text-current/80 transition-all duration-200 hover:bg-temple-gold/15 hover:text-temple-saffron focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold"
          >
            {isPlaying ? (
              <Volume2 className="h-5 w-5" aria-hidden="true" />
            ) : (
              <VolumeX className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            data-tooltip={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="has-tooltip inline-flex h-10 w-10 items-center justify-center rounded-full text-current/80 transition-all duration-200 hover:bg-temple-gold/15 hover:text-temple-saffron focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        {audioError && (
          <span className="sr-only" role="status">
            {audioError}
          </span>
        )}
        <audio
          ref={audioRef}
          src={assets.backgroundMusic}
          preload="none"
          loop
          onPlay={() => {
            setIsPlaying(true);
            setAudioError("");
          }}
          onPause={() => setIsPlaying(false)}
          onError={() => {
            setIsPlaying(false);
            setAudioError("Temple music could not be loaded.");
          }}
        />
      </div>
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col border-t border-current/10 bg-temple-stone/95 px-6 py-2 text-xs uppercase tracking-[0.2em] text-temple-cream backdrop-blur-xl">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="rounded px-3 py-4 text-temple-cream/80 transition-colors hover:bg-temple-gold/10 hover:text-temple-saffron focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
=======
        <button type="button" onClick={toggleAudio} className="cursor-pointer">
          {isPlaying ? (
            <Volume2 className="h-5 w-5" />
          ) : (
            <VolumeX className="h-5 w-5" />
          )}
        </button>
        <audio ref={audioRef} src={assets.heroVideo} preload="auto" loop />
>>>>>>> origin/main
      </div>
    </nav>
  );
}
