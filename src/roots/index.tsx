import { createFileRoute, Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SiteHeader } from "../components/site-header";
import { useI18n } from "../lib/i18n";
import { useSmoothScroll } from "../lib/smooth-scroll";
import { useIntroLoader } from "../lib/intro-loader";
=======
import { useState } from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiteHeader } from "../components/site-header";
import { useI18n } from "../lib/i18n";
import { useSmoothScroll } from "../lib/smooth-scroll";
>>>>>>> origin/main
import { ImageWithSkeleton } from "../components/image-with-skeleton";
import TextLoader from "../components/ui/text-loader";
import { assets } from "../constants/assets";

export const Route = createFileRoute("/")({
  head: () => {
    const title =
      "Shree Radha Raman Mandir · Vrindavan | Self-Manifested Deity Since 1542";
    const description =
      "Plan your darshan at Shree Radha Raman Mandir in Vrindavan — the 484 year unbroken seva of the self-manifested deity established by Gopala Bhatta Goswami in 1542.";
    const keywords =
      "Radha Raman Temple, Shree Radha Raman Mandir, Vrindavan temples, Gopala Bhatta Goswami, self-manifested deity, Gaudiya Vaishnava, darshan timings, Vrindavan pilgrimage, Braj";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "/" },
        { property: "og:image", content: assets.heroTemple },
        {
          property: "og:image:alt",
          content: "Shree Radha Raman Mandir, Vrindavan",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: assets.heroTemple },
      ],
      links: [{ rel: "canonical", href: "/" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Shree Radha Raman Mandir",
            url: "/",
            inLanguage: "en",
            about: {
              "@type": "HinduTemple",
              name: "Shree Radha Raman Mandir",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vrindavan",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
            },
          }),
        },
      ],
    };
  },
  component: Index,
});

const aartis = [
  { key: "mangala", time: "05:30" },
  { key: "shringar", time: "08:00" },
  { key: "rajbhog", time: "12:00" },
  { key: "utthapana", time: "18:00" },
  { key: "sandhya", time: "19:30" },
  { key: "shayan", time: "21:00" },
] as const;

const articles = [
  {
    slug: "braj-architecture",
    img: assets.brajArchitecture,
    titleKey: "art.braj.title",
    sumKey: "art.braj.summary",
  },
  {
    slug: "ashta-yama-seva",
    img: assets.incenseSanctum,
    titleKey: "art.seva.title",
    sumKey: "art.seva.summary",
  },
  {
    slug: "eternal-kitchen",
    img: assets.sacredFlowers,
    titleKey: "art.kitchen.title",
    sumKey: "art.kitchen.summary",
  },
] as const;

<<<<<<< HEAD
const galleryImages = [
  {
    src: assets.gallery1,
    span: "col-span-2 row-span-3",
    caption: "A glimpse of Shree Radha Raman Mandir",
  },
  {
    src: assets.gallery2,
    span: "col-span-2 md:col-span-2 row-span-2",
    caption: "Sacred spaces of Shree Radha Raman Mandir",
  },
  {
    src: assets.gallery3,
    span: "col-span-2 md:col-span-2 row-span-2",
    caption: "Devotional moments from the temple",
  },
  {
    src: assets.gallery6,
    span: "col-span-2 md:col-span-4 row-span-2",
    caption: "The temple and its surroundings",
  },
  {
    src: assets.gallery4,
    span: "col-span-2 md:col-span-2 row-span-3",
    caption: "A closer look at the temple",
  },
  {
    src: assets.gallery5,
    span: "col-span-2 md:col-span-4 row-span-2",
    caption: "A view from the Radha Raman Mandir gallery",
  },
] as const;

=======
>>>>>>> origin/main
function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={className} aria-hidden>
      <path
        d="M0 6 H50 M70 6 H120"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.6"
      />
      <circle
        cx="60"
        cy="6"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle cx="60" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function Index() {
  const { t } = useI18n();
  const { scrollToId } = useSmoothScroll();
<<<<<<< HEAD
  const { isComplete: loaderComplete, complete: completeLoader } =
    useIntroLoader();
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<
    number | null
  >(null);
  const initialGalleryControlRef = useRef<HTMLButtonElement | null>(null);
  const galleryTriggerRef = useRef<HTMLButtonElement | null>(null);
  const galleryTouchStartRef = useRef<{ x: number; y: number } | null>(null);
  const lightboxWasOpenRef = useRef(false);
  const isLightboxOpen = selectedGalleryIndex !== null;

  useEffect(() => {
    if (!isLightboxOpen) {
      if (lightboxWasOpenRef.current) {
        galleryTriggerRef.current?.focus();
        lightboxWasOpenRef.current = false;
      }
      return;
    }

    lightboxWasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    initialGalleryControlRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedGalleryIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedGalleryIndex((index) =>
          index === null
            ? null
            : (index - 1 + galleryImages.length) % galleryImages.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedGalleryIndex((index) =>
          index === null ? null : (index + 1) % galleryImages.length,
        );
      }
      if (event.key === "Tab") {
        const dialog = document.querySelector(
          '[role="dialog"][aria-label="Temple photo gallery"]',
        );
        const controls = dialog?.querySelectorAll<HTMLButtonElement>("button");
        const firstControl = controls?.[0];
        const lastControl = controls?.[controls.length - 1];
        if (
          event.shiftKey &&
          firstControl &&
          document.activeElement === firstControl
        ) {
          event.preventDefault();
          lastControl?.focus();
        } else if (
          !event.shiftKey &&
          lastControl &&
          document.activeElement === lastControl
        ) {
          event.preventDefault();
          firstControl?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  const handleGalleryTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.changedTouches[0];
    if (touch)
      galleryTouchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleGalleryTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const start = galleryTouchStartRef.current;
    const touch = event.changedTouches[0];
    galleryTouchStartRef.current = null;
    if (!start || !touch) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    setSelectedGalleryIndex((index) => {
      if (index === null) return null;
      return deltaX < 0
        ? (index + 1) % galleryImages.length
        : (index - 1 + galleryImages.length) % galleryImages.length;
    });
  };
=======
  const [loaderComplete, setLoaderComplete] = useState(false);
>>>>>>> origin/main

  return (
    <div className="bg-temple-cream text-temple-stone">
      {!loaderComplete ? (
<<<<<<< HEAD
        <TextLoader onComplete={completeLoader} />
=======
        <TextLoader onComplete={() => setLoaderComplete(true)} />
>>>>>>> origin/main
      ) : (
        <>
          <SiteHeader variant="transparent" />

          {/* HERO — editorial, restrained */}
          <header
            id="home"
            className="relative min-h-svh overflow-hidden -mt-18.25 pt-18.25 bg-temple-stone text-temple-cream"
          >
<<<<<<< HEAD
            {/* Default temple background image */}
            <div className="absolute inset-0">
              <img
                src={assets.heroTemple}
                alt="Shree Radha Raman Mandir, Vrindavan"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
=======
            {/* Background video */}
            <div className="absolute inset-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={assets.heroTemple}
                className="w-full h-full object-cover"
              >
                <source src={assets.heroVideo} type="video/mp4" />
              </video>
>>>>>>> origin/main

              {/* Single, deliberate gradient — no flame orbs, no shimmer */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,12,0.55)_0%,rgba(20,15,12,0.35)_40%,rgba(20,15,12,0.85)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,15,12,0.65)_0%,rgba(20,15,12,0.15)_55%,transparent_100%)]" />
              {/* fine grain */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "3px 3px",
                }}
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 min-h-[calc(100svh-73px)] flex flex-col">
              {/* main copy */}
              <div className="flex-1 flex flex-col justify-center max-w-4xl py-20 animate-fade-up">
                <h1 className="font-display font-light text-[3rem] sm:text-6xl lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-[-0.02em] text-balance mb-10">
                  {t("hero.title.1")}
                </h1>

                <p className="text-base md:text-[1.05rem] leading-[1.8] text-temple-cream/75 max-w-xl font-light">
                  {t("hero.body")}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-12">
                  <a
                    href="#seva"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId("seva");
<<<<<<< HEAD
                      history.replaceState(null, "", "/#seva");
                    }}
                    className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-sm border border-temple-saffron bg-temple-saffron px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-temple-stone shadow-md shadow-black/20 transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-temple-cream hover:bg-temple-cream hover:shadow-lg hover:shadow-black/25 active:translate-y-0 active:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-saffron"
                  >
                    {t("hero.cta.primary")}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
=======
                    }}
                  >
                    <button className="cursor-pointer px-8 py-4 rounded-xs bg-[#EC952B] text-white font-bold transition duration-200 hover:bg-gray-200 hover:text-black border-2 border-transparent hover:border-[#EC952B] tracking-[0.16em] uppercase text-[12.3px]">
                      {t("hero.cta.primary")}
                    </button>
>>>>>>> origin/main
                  </a>
                </div>
              </div>

              {/* STATS */}
              <div className="border-temple-cream/15 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-1 sm:gap-x-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="py-6 px-4 first:sm:pl-0 last:sm:pr-0 text-center"
                    >
                      <div className="text-[9px] uppercase tracking-[0.3em] text-temple-cream/50 mb-3">
                        {t(`hero.stat${i}.label`)}
                      </div>
                      <div className="font-display font-semibold text-3xl md:text-4xl text-temple-cream tabular-nums leading-none">
                        {t(`hero.stat${i}.value`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* scroll cue */}
              <button
<<<<<<< HEAD
                ref={initialGalleryControlRef}
                type="button"
                onClick={() => scrollToId("history")}
                aria-label="Scroll down to temple history"
                className="absolute bottom-10 right-6 hidden flex-col items-center gap-3 text-temple-cream/70 transition-colors hover:text-temple-saffron focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-saffron md:bottom-16 md:right-0 md:flex"
              >
                <span
                  aria-hidden="true"
                  className="relative flex h-9 w-5 justify-center rounded-full border border-current/70 p-1"
                >
                  <span className="h-1.5 w-1 rounded-full bg-current animate-scroll-indicator" />
                </span>
=======
                type="button"
                onClick={() => scrollToId("history")}
                className="absolute right-6 md:right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 text-temple-cream/50 hover:text-gray-300 transition-colors"
                aria-label="Scroll to next section"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
                  {t("hero.scroll")}
                </span>
                <div className="w-px h-10 bg-linear-to-b from-temple-cream/50 to-transparent" />
>>>>>>> origin/main
              </button>
            </div>
          </header>

          {/* HISTORY */}
          <section
            id="history"
            className="py-28 md:py-40 bg-temple-stone text-temple-cream relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-temple-gold/10 blur-3xl"
            />

            <div className="max-w-4xl mx-auto text-center px-6 md:px-10 relative">
              <Ornament className="w-32 h-3 mx-auto mb-10 text-temple-gold" />
              <span className="text-temple-saffron text-xs block mb-10 uppercase tracking-[0.25em]">
                {t("phil.eyebrow")}
              </span>
              <p className="text-2xl md:text-4xl font-display leading-snug font-light italic text-balance text-temple-cream/95">
                {t("phil.quote")}
              </p>
              <div className="mt-14 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.25em] text-temple-cream/55">
                <div className="w-12 h-px bg-temple-gold/50" />
                <span>{t("phil.attribution")}</span>
                <div className="w-12 h-px bg-temple-gold/50" />
              </div>
            </div>
          </section>

          {/* ARTICLES */}
          <section
            className="py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto"
            id="articles"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-temple-gold text-xs uppercase tracking-[0.22em] mb-4 block">
                  {t("features.eyebrow")}
                </span>
                <h2 className="font-display text-4xl md:text-5xl max-w-xl leading-[1.05]">
                  {t("features.heading")}
                </h2>
              </div>
              <Ornament className="w-32 h-3 text-temple-gold hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {articles.map((a, i) => (
                <article
                  key={a.slug}
                  className={`group ${i === 1 ? "md:pt-16" : ""}`}
                >
                  <Link
                    to="/articles/$slug"
                    params={{ slug: a.slug }}
                    className="block"
                  >
                    <div className="relative overflow-hidden ring-1 ring-temple-stone/5 mb-6">
                      <ImageWithSkeleton
                        src={a.img}
                        alt={t(a.titleKey)}
                        width={608}
                        height={800}
                        loading="lazy"
                        wrapperClassName="aspect-[3/4] w-full"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-temple-stone/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                    <h3 className="text-3xl font-display group-hover:text-temple-gold transition-colors mb-3">
                      {t(a.titleKey)}
                    </h3>
                    <p className="text-sm text-temple-stone/65 leading-relaxed mb-5">
                      {t(a.sumKey)}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-temple-gold border-b border-temple-gold/30 pb-1 group-hover:border-temple-gold transition-all">
                      {t("art.readMore")}
                      <span className="transition-transform group-hover:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

<<<<<<< HEAD
          <section
            aria-label="Shri Radha Ramano Vijayate"
            className="relative overflow-hidden bg-[#FAF4E6] py-5 text-temple-stone md:py-5"
          >
            <div className="sr-only">Shri Radha Ramano Vijayate</div>
            <div
              aria-hidden="true"
              className="marquee-edge-fade overflow-hidden"
            >
              <div className="animate-text-marquee flex w-max items-center">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12"
                  >
                    {Array.from({ length: 4 }, (_, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-5 whitespace-nowrap font-display text-lg font-medium tracking-[0.015em] text-temple-stone/80 md:gap-7 md:text-xl"
                      >
                        Shri Radha Ramano Vijayate
                        <img
                          src={`${import.meta.env.BASE_URL}images/flute.png`}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-7 w-20 object-contain opacity-80 md:h-8 md:w-24"
                        />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

=======
>>>>>>> origin/main
          {/* DARSHAN */}
          <section
            id="seva"
            className="py-28 md:py-36 px-6 md:px-10 bg-temple-cream border-y border-temple-gold/15"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
                <span className="text-temple-gold text-xs uppercase tracking-[0.24em] mb-4 block">
                  {t("darshan.eyebrow")}
                </span>
                <h2 className="font-display text-5xl md:text-6xl leading-[0.98] mb-6">
                  {t("darshan.heading.1")}{" "}
                  <span className="italic">{t("darshan.heading.2")}</span>
                </h2>
                <p className="text-temple-stone/65 max-w-sm leading-relaxed">
                  {t("darshan.body")}
                </p>
                <Ornament className="w-32 h-3 mt-8 text-temple-gold" />
              </div>
              <div className="md:col-span-8">
                <ul className="divide-y divide-temple-gold/15">
                  {aartis.map((a) => (
                    <li
                      key={a.key}
                      className="grid grid-cols-12 items-baseline py-7 group hover:bg-temple-gold/5 transition-colors px-4 -mx-4 cursor-default"
                    >
                      <span className="col-span-12 sm:col-span-5 font-display text-2xl md:text-3xl">
                        {t(`aarti.${a.key}.name`)}
                      </span>
                      <span className="col-span-8 sm:col-span-5 text-sm text-temple-stone/55 mt-1 sm:mt-0">
                        {t(`aarti.${a.key}.note`)}
                      </span>
                      <span className="col-span-4 sm:col-span-2 text-right font-display text-2xl md:text-3xl text-temple-gold tabular-nums mt-1 sm:mt-0">
                        {a.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* GALLERY */}
          <section
            id="gallery"
            className="relative py-28 md:py-40 px-6 md:px-10 bg-temple-stone text-temple-cream overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute top-1/3 -left-32 w-130 h-130 rounded-full bg-temple-gold/10 blur-3xl pointer-events-none"
            />
            <div className="relative max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-xl">
                  <span className="text-temple-saffron text-xs uppercase tracking-[0.24em] mb-5 block">
                    {t("gallery.eyebrow")}
                  </span>
                  <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-balance">
                    {t("gallery.heading.1")}{" "}
                    <span className="italic bg-gold-shimmer">
                      {t("gallery.heading.2")}
                    </span>
                  </h2>
                </div>
                <p className="md:max-w-sm text-temple-cream/70 leading-relaxed">
                  {t("gallery.body")}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-30 md:auto-rows-37.5 gap-3 md:gap-5">
<<<<<<< HEAD
                {galleryImages.map((g, i) => (
=======
                {[
                  {
                    src: assets.gallery1,
                    span: "col-span-2 row-span-3",
                  },
                  {
                    src: assets.gallery2,
                    span: "col-span-2 md:col-span-2 row-span-2",
                  },
                  {
                    src: assets.gallery3,
                    span: "col-span-2 md:col-span-2 row-span-2",
                  },
                  {
                    src: assets.gallery6,
                    span: "col-span-2 md:col-span-4 row-span-2",
                  },
                  {
                    src: assets.gallery4,
                    span: "col-span-2 md:col-span-2 row-span-3",
                  },
                  {
                    src: assets.gallery5,
                    span: "col-span-2 md:col-span-4 row-span-2",
                  },
                ].map((g, i) => (
>>>>>>> origin/main
                  <figure
                    key={i}
                    className={`group relative overflow-hidden ring-1 ring-temple-cream/10 ${g.span}`}
                  >
                    <ImageWithSkeleton
                      src={g.src}
<<<<<<< HEAD
                      alt={g.caption}
=======
>>>>>>> origin/main
                      loading="lazy"
                      wrapperClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-1600 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-temple-stone via-temple-stone/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
<<<<<<< HEAD
                    <button
                      type="button"
                      onClick={(event) => {
                        galleryTriggerRef.current = event.currentTarget;
                        setSelectedGalleryIndex(i);
                      }}
                      aria-label={`Open photo: ${g.caption}`}
                      className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-temple-saffron"
                    />
=======
                    <figcaption className="absolute left-4 bottom-3 right-4 text-[10px] uppercase tracking-[0.3em] text-temple-cream/85 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"></figcaption>
>>>>>>> origin/main
                  </figure>
                ))}
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {selectedGalleryIndex !== null && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-temple-stone/95 p-4 md:p-10 animate-lightbox-in"
              id="gallery-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Temple photo gallery"
              onClick={() => setSelectedGalleryIndex(null)}
            >
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedGalleryIndex(
                    (selectedGalleryIndex - 1 + galleryImages.length) %
                      galleryImages.length,
                  );
                }}
                aria-label="Previous photo"
                data-tooltip="Previous"
                className="has-tooltip absolute left-3 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-temple-cream/20 bg-temple-stone/50 text-temple-cream shadow-lg backdrop-blur-md transition-[background-color,border-color,transform] duration-200 hover:scale-105 hover:border-temple-gold/60 hover:bg-temple-stone/80 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-saffron md:left-8 md:h-14 md:w-14"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <figure
                className="flex max-h-full max-w-6xl flex-col items-center gap-4"
                onClick={(event) => event.stopPropagation()}
                onTouchStart={handleGalleryTouchStart}
                onTouchEnd={handleGalleryTouchEnd}
                onTouchCancel={() => {
                  galleryTouchStartRef.current = null;
                }}
                style={{ touchAction: "pan-y" }}
              >
                <img
                  src={galleryImages[selectedGalleryIndex].src}
                  alt={galleryImages[selectedGalleryIndex].caption}
                  loading="eager"
                  decoding="async"
                  className="max-h-[78vh] max-w-full object-contain shadow-2xl"
                />
              </figure>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedGalleryIndex(
                    (selectedGalleryIndex + 1) % galleryImages.length,
                  );
                }}
                aria-label="Next photo"
                data-tooltip="Next"
                className="has-tooltip absolute right-3 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-temple-cream/20 bg-temple-stone/50 text-temple-cream shadow-lg backdrop-blur-md transition-[background-color,border-color,transform] duration-200 hover:scale-105 hover:border-temple-gold/60 hover:bg-temple-stone/80 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-saffron md:right-8 md:h-14 md:w-14"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          )}

=======
>>>>>>> origin/main
          {/* VISIT + MAP */}
          <section
            id="contact"
            className="bg-temple-cream py-24 md:py-32 px-6 md:px-10"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              <div className="lg:col-span-5 flex flex-col">
<<<<<<< HEAD
                <span className="text-temple-gold text-xs uppercase tracking-[0.23em] mb-4 block">
=======
                <span className="text-temple-gold text-xs uppercase tracking-[0.24em] mb-4 block">
>>>>>>> origin/main
                  {t("visit.eyebrow")}
                </span>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8 text-balance">
                  {t("visit.heading")}
                </h2>
                <div className="space-y-5 text-temple-stone/75 leading-relaxed">
                  <p>
                    {t("visit.address.line1")}
                    <br />
                    {t("visit.address.line2")}
                  </p>
                  <div className="pt-4 border-t border-temple-gold/20 space-y-2 text-sm">
                    <a
                      href="mailto:radharamanmandir@gmail.com"
                      className="hover:text-gray-800 transition-colors"
                    >
                      radharamanmandir@gmail.com
                    </a>
                    <br />
                    <a
                      href="tel:+91-8368783201"
                      className="hover:text-gray-800 transition-colors"
                    >
                      +91-8368783201
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative h-105 md:h-full min-h-105 ring-1 ring-temple-gold/25 shadow-2xl shadow-temple-stone/15 overflow-hidden">
                  <iframe
                    title="Shree Radha Raman Mandir on the map"
                    src="https://www.google.com/maps?q=Radha+Raman+Temple+Vrindavan&output=embed"
                    className="w-full h-full border-0 grayscale-[0.25] contrast-105"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-temple-stone/10" />
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-temple-stone text-temple-cream/60 py-15 px-6 md:px-10 border-t border-temple-cream/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5 space-y-5">
                <div className="text-3xl font-display text-temple-gold">
                  {t("brand.name")}
                </div>
                <p className="max-w-xs text-sm leading-relaxed">
                  {t("visit.address.line1")}
                  <br />
                  {t("visit.address.line2")}
                </p>
                <p className="text-xs uppercase tracking-widest text-temple-cream/40">
                  {t("footer.brand.tag")}
                </p>
              </div>
              <div className="md:col-span-4">
                <span className="text-[11px] uppercase tracking-[0.24em] text-temple-saffron block mb-6">
                  {t("footer.explore")}
                </span>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      to="/"
                      hash="history"
<<<<<<< HEAD
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToId("history");
                        history.replaceState(null, "", "/#history");
                      }}
=======
>>>>>>> origin/main
                      className="hover:text-temple-cream transition-colors"
                    >
                      {t("footer.about")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/$slug"
                      params={{ slug: "braj-architecture" }}
                      className="hover:text-temple-cream transition-colors"
                    >
                      {t("art.braj.title")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/$slug"
                      params={{ slug: "ashta-yama-seva" }}
                      className="hover:text-temple-cream transition-colors"
                    >
                      {t("art.seva.title")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/$slug"
                      params={{ slug: "eternal-kitchen" }}
                      className="hover:text-temple-cream transition-colors"
                    >
                      {t("art.kitchen.title")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3">
                <span className="text-[11px] uppercase tracking-[0.24em] text-temple-saffron block mb-6">
                  {t("footer.contact")}
                </span>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="mailto:radharamanmandir@gmail.com"
                      className="hover:text-gray-100 transition-colors"
                    >
                      radharamanmandir@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+91-8368783201"
                      className="hover:text-gray-100 transition-colors"
                    >
                      +91-8368783201
                    </a>
                  </li>
                </ul>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/shriradharamanju/"
                    target="_blank"
                    rel="noreferrer"
<<<<<<< HEAD
                    aria-label="Instagram"
                    data-tooltip="Instagram"
                    className="has-tooltip inline-flex h-10 w-10 items-center justify-center rounded-full border border-temple-cream/20 bg-temple-cream/10 text-temple-cream transition-all duration-400 hover:bg-temple-cream hover:text-temple-stone"
=======
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-temple-cream/20 bg-temple-cream/10 text-temple-cream transition-all duration-400 hover:bg-temple-cream hover:text-temple-stone"
                    aria-label="Instagram"
>>>>>>> origin/main
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@chandanjiofficial"
                    target="_blank"
                    rel="noreferrer"
<<<<<<< HEAD
                    aria-label="YouTube"
                    data-tooltip="YouTube"
                    className="has-tooltip inline-flex h-10 w-10 items-center justify-center rounded-full border border-temple-cream/20 bg-temple-cream/10 text-temple-cream transition-all duration-400 hover:bg-temple-cream hover:text-temple-stone"
=======
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-temple-cream/20 bg-temple-cream/10 text-temple-cream transition-all duration-400 hover:bg-temple-cream hover:text-temple-stone"
                    aria-label="YouTube"
>>>>>>> origin/main
                  >
                    <FaYoutube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/+918368783201"
                    target="_blank"
                    rel="noreferrer"
<<<<<<< HEAD
                    aria-label="WhatsApp"
                    data-tooltip="WhatsApp"
                    className="has-tooltip inline-flex h-10 w-10 items-center justify-center rounded-full border border-temple-cream/20 bg-temple-cream/10 text-temple-cream transition-all duration-400 hover:bg-temple-cream hover:text-temple-stone"
=======
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-temple-cream/20 bg-temple-cream/10 text-temple-cream transition-all duration-400 hover:bg-temple-cream hover:text-temple-stone"
                    aria-label="WhatsApp"
>>>>>>> origin/main
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
