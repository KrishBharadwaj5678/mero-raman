import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { assets } from "../constants/assets";
import { SiteHeader } from "../components/site-header";
import { useI18n } from "../lib/i18n";
import { ImageWithSkeleton } from "../components/image-with-skeleton";
import { FaArrowLeft } from "react-icons/fa";

type ArticleContent = {
  title: string;
  lede: string;
  body: string[];
  pull: string;
};

type Article = {
  slug: string;
  image: string;
  imageAlt: string;
  en: ArticleContent;
};

const articles: Record<string, Article> = {
  "braj-architecture": {
    slug: "braj-architecture",
    image: assets.brajArchitecture,
    imageAlt: "Carved stone façade of Radha Raman Mandir",
    en: {
      title: "Braj Architecture of Radha Raman Mandir",
      lede: "This is one of the rare remaining temples from the Goswami period that has remained where it was built originally, an epitome of the devotionally-oriented architecture of Braj.",
      pull: "A temple designed for closeness where architecture becomes an extension of devotion itself",
      body: [
        "While the huge shikharas are common in the big temples in North India, the temple of Radha Raman was constructed using the milder language of Vrindavan: small shrines, deeply shaded courtyards, and elaborate stone jalis that break up the afternoon sunlight into golden shafts.",
        "The original building, consecrated in 1542, has been maintained and subtly enlarged through a chain of Goswami caretakers that remains unbroken. The walls made of local sandstone, the manually shaped lintels, and the jaali windows all maintain the character of the original, despite necessary renovations.",
        "The architecture here is actually a symbol of the act of seva itself. The garbhagriha, which is the inner sanctum, is designed in such a way that the deity remains the center of everyone’s sight. There is a very narrow circumambulation path to make sure that the devotees stay close by. The kitchen, bhoga hall, and sleeping chambers are placed to facilitate uninterrupted performance of the rituals.",
        "The wood carvings on the doors are of the lotus, peacock, and kadamba tree from Vrindavan, the same images as found in the Gaudiya Vaishnava poems. Walking inside the temple is reading those poems in stones.",
      ],
    },
  },
  "ashta-yama-seva": {
    slug: "ashta-yama-seva",
    image: assets.incenseSanctum,
    imageAlt: "Incense smoke rising in the sanctum",
    en: {
      title: "Ashta-yama Seva: The Eight Daily Services",
      lede: "Every day at Radha Raman Ji is ordered around the timeless tradition of Ashta-yama Seva, eight sacred services that accompany the Lord from dawn until night.",
      pull: "A daily rhythm of worship where time itself is organized around sacred service",
      body: [
        "The ashta yama seva was instituted by the six goswamis of Vrindavan, whereby they structured the eight mood periods of the day based on the lila or divine play of Lord Krishna into three-hour periods. The tradition of ashta yama seva at Radha Raman Temple has been uninterrupted from 1542.",
        "Aarti begins at dawn with priests awakening the deity with conch shells, bells, and light from ghee lamps. This is followed by the Shringar Darshan where the deity gets dressed and decorated in silk fabric and flowers picked from the forest that night.",
        "Mid-day is marked by Rajbhog, which is an elaborate ritual consisting of rice, dal, and a variety of other items cooked in the same holy fire which has been burning for close to half a millennium now. Once a little time has elapsed, the Lord is awakened with Utthapana, after which the famous Sandhya Aarti begins. The evening is marked by Shayan Aarti, where the Lord is put to rest.",
        "Every watch has its own ragas, its own offerings, and its own emotional spectrum. It is enough to participate in just one aarti to be part of a stream that has been flowing incessantly ever since the time of the Goswamis.",
      ],
    },
  },
  "eternal-kitchen": {
    slug: "eternal-kitchen",
    image: assets.sacredFlowers,
    imageAlt: "Sacred flowers prepared for the deity",
    en: {
      title: "The Eternal Kitchen of Radha Raman",
      lede: "Behind the sanctum, a smoke-darkened kitchen shelters a sacred flame that has burned continuously for more than four hundred and eighty years.",
      pull: "A sacred flame that has been tended continuously since the deity's manifestation, where every offering is prepared on the same eternal fire",
      body: [
        "The kitchen in Radha Raman Mandir is probably the most subtly incredible institution in Vrindavan. Illuminated by Gopala Bhatta Goswami when the deity manifested in 1542, the chulha (hearth) has continuously been kept alive through the centuries, with fire coals being meticulously covered and lit again every day, not once dying out.",
        "The worship of Sri Radha Raman receives all its bhogas from this same unbroken flame. Whether it is the most basic offering in the morning, or the grand festival food offerings on occasions like Janmashtami and Govardhan Puja, all are prepared from this fire alone.",
        "The practice is quite stringent. Cooks adhere to strict practices of personal cleanliness. The ingredients are cleaned using water from the well, ground on stone, and cooked using utensils made of copper and brass that are only used for the temple. The recipes were orally transferred through the Goswami family lineage.",
        "And there can be nothing more unique than the feeling that one gets standing outside the kitchen door early in the morning: the sheer physicality of being devoted. Smoke from the wood fire that rises for almost five hundred years.",
      ],
    },
  },
};

export const Route = createFileRoute("/articles/$slug")({
  beforeLoad: ({ params }) => {
    if (!articles[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const a = articles[params.slug];
    if (!a) return { meta: [{ title: "Article · Shree Radha Raman" }] };
    return {
      meta: [
        { title: `${a.en.title} · Shree Radha Raman` },
        { name: "description", content: a.en.lede },
        { property: "og:title", content: a.en.title },
        { property: "og:description", content: a.en.lede },
        { property: "og:image", content: a.image },
        { name: "twitter:image", content: a.image },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
  errorComponent: ArticleError,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-temple-cream text-temple-stone">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-5xl mb-4">Article not found</h1>
        <Link to="/" className="text-temple-gold underline">
          Return to temple
        </Link>
      </div>
    </div>
  );
}

function ArticleError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-temple-cream text-temple-stone">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Something went wrong</h1>
        <p className="text-sm text-temple-stone/60 mb-6">{error.message}</p>
        <button onClick={reset} className="text-temple-gold underline">
          Try again
        </button>
      </div>
    </div>
  );
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const { t } = useI18n();
  const article = articles[slug];
  if (!article) return <ArticleNotFound />;
  const content = article.en;

  return (
    <div className="bg-temple-cream text-temple-stone min-h-screen">
      {/* Hero cover */}
      <header className="relative h-[60vh] min-h-110 overflow-hidden">
        <ImageWithSkeleton
          src={article.image}
          alt={article.imageAlt}
          wrapperClassName="absolute inset-0 w-full h-full"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-linear-to-b from-temple-stone/40 via-temple-stone/55 to-temple-cream" />
        <div className="relative max-w-4xl mx-auto h-full flex flex-col justify-end px-6 md:px-10 pb-16 text-temple-cream">
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance text-shadow-premium max-w-3xl">
            {content.title}
          </h1>
        </div>
      </header>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11.4px] uppercase tracking-[0.12em] text-temple-gold mb-12 hover:text-temple-saffron transition-colors"
        >
          <span>
            <FaArrowLeft className="text-temple-gold/70" />
          </span>
          {t("art.back")}
        </Link>

        <p className="font-display text-2xl md:text-3xl italic leading-snug text-temple-stone/85 mb-14">
          {content.lede}
        </p>

        <div className="space-y-7 text-lg leading-[1.85] text-temple-stone/85 font-light">
          {content.body.slice(0, 2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <blockquote className="my-14 border-l-2 border-temple-gold pl-6 md:pl-8 font-display text-2xl md:text-3xl italic text-temple-stone/90 leading-snug">
          {content.pull}
        </blockquote>

        <div className="space-y-7 text-lg leading-[1.85] text-temple-stone/85 font-light">
          {content.body.slice(2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-20 border-t border-temple-gold/20  r"></div>
      </article>
    </div>
  );
}
