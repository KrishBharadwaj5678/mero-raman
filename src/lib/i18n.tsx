import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en";

type Dict = Record<string, string>;

const en: Dict = {
  "brand.name": "Shree Radha Raman",

  "nav.gallery": "Gallery",
  "nav.articles": "Articles",

  "hero.title.1": "The Self-Manifested",
  "hero.body":
    "Since 1542, Shree Radha Raman Ji has graced Vrindavan emerging from a sacred Shaligram Shila without the touch of a chisel.",
  "hero.cta.primary": "Plan Your Darshan",
  "hero.stat1.value": "484",
  "hero.stat1.label": "Years of unbroken seva",
  "hero.stat2.value": "5",
  "hero.stat2.label": "Daily aartis",
  "hero.stat3.value": "1542",
  "hero.stat3.label": "Manifested in",
<<<<<<< HEAD
=======
  "hero.scroll": "Scroll to explore",

>>>>>>> origin/main
  "phil.eyebrow": "An Eternal Tradition",
  "phil.quote":
    "In the heart of the sacred groves, the fire lit by Gopala Bhatta Goswami five centuries ago still burns, preparing the bhoga for the Lord in an unbroken tradition of devotion.",
  "phil.attribution": "Gaudiya Vaishnava Sampradaya",

  "features.eyebrow": "Heritage in Detail",
  "features.heading": "Three threads of an unbroken weave.",
  "art.braj.title": "Braj Architecture",
  "art.braj.summary":
    "Explore the intricate carvings and spiritual geometry of one of the few original Goswami-era temples standing today.",
  "art.seva.title": "Ashta-yama Seva",
  "art.seva.summary":
    "Witness the eight-fold daily service offered with profound precision and ancient Sanskrit chants from before dawn till the deity's rest.",
  "art.kitchen.title": "The Eternal Kitchen",
  "art.kitchen.summary":
    "Renowned for its unparalleled culinary tradition, where the sacred fire has been kept alive without interruption for over 480 years.",
  "art.readMore": "Read the full article",
<<<<<<< HEAD
  "art.back": "Back",
=======
  "art.back": "Back to temple",
>>>>>>> origin/main

  "darshan.eyebrow": "Darshan Timings",
  "darshan.heading.1": "Daily Sevas at",
  "darshan.heading.2": "Mandir",
  "darshan.body":
    "The daily routine of Shri Radha Raman Ji is a spiritual ritual of service beginning with the lighting of the first lamp early morning till the singing of the lullaby in the evening. Plan your darshan accordingly.",

  "aarti.mangala.name": "Mangala Aarti",
  "aarti.mangala.note": "First glimpse of the Lord",
  "aarti.shringar.name": "Shringar Darshan",
  "aarti.shringar.note": "Adornment of the deity",
  "aarti.rajbhog.name": "Rajbhog Aarti",
  "aarti.rajbhog.note": "Midday royal offering",
  "aarti.utthapana.name": "Utthapana",
  "aarti.utthapana.note": "Awakening the Lord",
  "aarti.sandhya.name": "Sandhya Aarti",
  "aarti.sandhya.note": "Evening worship with lamps",
  "aarti.shayan.name": "Shayan Aarti",
  "aarti.shayan.note": "Resting the deity",

  "gallery.eyebrow": "Through the Lens",
  "gallery.heading.1": "A glimpse into the",
  "gallery.heading.2": "sanctum.",
  "gallery.body":
    "A visual archive of Shri Radha Raman Ji showcasing sacred moments and timeless devotion.",

<<<<<<< HEAD
  "visit.eyebrow": "Visit the Temple",
=======
  "visit.eyebrow": "Find the Temple",
>>>>>>> origin/main
  "visit.heading": "Where the lanes of Vrindavan bend toward the divine.",
  "visit.address.line1": "Shri Radha Raman Temple, Nidhivan Road",
  "visit.address.line2": "Vrindavan, Uttar Pradesh 281121, India",

  "footer.brand.tag": "A living temple of devotion since 1542",
  "footer.explore": "Explore",
  "footer.about": "About the Temple",
  "footer.contact": "Contact",
};

const dicts: Record<Lang, Dict> = { en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const value = useMemo<Ctx>(() => {
    const setLang = (l: Lang) => {
      setLangState(l);
      if (typeof document !== "undefined") {
        document.documentElement.lang = l;
      }
    };
    const t = (key: string) => dicts[lang][key] ?? en[key] ?? key;
    return { lang, setLang, t };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // Safe fallback during SSR before provider mounts in tree
    return {
      lang: "en" as Lang,
      setLang: () => {},
      t: (k: string) => en[k] ?? k,
    } satisfies Ctx;
  }
  return ctx;
}

export const dictionaries = { en };
