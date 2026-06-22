import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// ─── BENEFITS AIRBNB ──────────────────────────────────────────────────────────
const airbnbBenefits = [
  {
    value: 30,
    suffix: "%",
    title: "Revenus optimisés",
    text: "Grâce à une stratégie tarifaire intelligente et une visibilité renforcée sur Airbnb & Booking, nous maximisons le potentiel locatif de votre logement.",
  },
  {
    value: 0,
    suffix: "",
    title: "Stress au quotidien",
    text: "AMAFA Conciergerie prend en charge l'ensemble de la gestion : voyageurs, ménage, maintenance, assistance et suivi du logement.",
  },
  {
    value: 5,
    suffix: "★",
    title: "Expérience voyageurs",
    text: "Chaque séjour est soigneusement préparé afin d'offrir une expérience premium et d'obtenir des avis voyageurs de qualité.",
  },
  {
    value: 90,
    suffix: "%",
    title: "Taux d'occupation",
    text: "Nous optimisons votre calendrier et la performance des annonces afin d'améliorer le remplissage du logement toute l'année.",
  },
  {
    value: 100,
    suffix: "%",
    title: "Gestion déléguée",
    text: "Vous gardez les revenus et la propriété du logement pendant que nous gérons l'intégralité des opérations.",
  },
  {
    label: "20%",
    title: "Commission claire",
    text: "Une commission unique sur vos revenus encaissés. Aucun frais fixe, aucune mauvaise surprise.",
  },
];

// ─── BENEFITS CHANTIER ────────────────────────────────────────────────────────
const chantierBenefits = [
  {
    value: 48,
    suffix: "h",
    title: "Délai de contrôle",
    text: "Après chaque envoi d'argent, notre agent passe sur le chantier sous 48h pour vérifier que les matériaux sont bien présents.",
  },
  {
    value: 0,
    suffix: "",
    title: "Mauvaise surprise",
    text: "Vous recevez la vérité chaque semaine, pas des promesses. Aucune découverte au moment de vos vacances au pays.",
  },
  {
    value: 1,
    suffix: "/semaine",
    title: "Visite sur place",
    text: "Chaque vendredi, un rapport complet avec photos et vidéos horodatées de l'avancement réel de votre chantier.",
  },
  {
    value: 100,
    suffix: "%",
    title: "Livraisons contrôlées",
    text: "Notre agent est physiquement présent à chaque livraison de matériaux pour vérifier quantités et qualité apparente.",
  },
  {
    value: 100,
    suffix: "%",
    title: "Transport inclus",
    text: "Vous ne gérez jamais notre déplacement. Les trajets de notre agent à Dakar sont toujours inclus dans le tarif.",
  },
  {
    label: "60€",
    title: "À partir de",
    text: "39 000 FCFA par mois pour un suivi hebdomadaire complet de votre chantier, sans engagement long.",
  },
];

type TabKey = "airbnb" | "chantier";

const tabsConfig: Record<
  TabKey,
  {
    label: string;
    benefits: typeof airbnbBenefits;
    heading: string;
    sub: string;
    bottomTitle: string;
    bottomText: string;
    cta1: { label: string; href: string };
    cta2: { label: string; href: string };
  }
> = {
  airbnb: {
    label: "Location courte durée",
    benefits: airbnbBenefits,
    heading: "Une gestion premium pensée\npour la performance",
    sub: "AMAFA Conciergerie accompagne les propriétaires au Sénégal dans la gestion complète de leurs locations courte durée avec une approche moderne, transparente et haut de gamme.",
    bottomTitle: "Maximisez vos revenus.\nSans contraintes.",
    bottomText:
      "Confiez votre logement à une équipe spécialisée dans la gestion premium Airbnb & Booking. Nous nous occupons de tout afin de transformer votre bien en une location performante, rentable et parfaitement suivie.",
    cta1: { label: "Découvrir nos services", href: "/services" },
    cta2: { label: "Estimer mes revenus", href: "/estimation" },
  },
  chantier: {
    label: "Suivi de chantier · Sénégal",
    benefits: chantierBenefits,
    heading: "Un contrôle rigoureux pensé\npour votre tranquillité",
    sub: "AMAFA Conciergerie accompagne la diaspora sénégalaise dans le suivi et le contrôle de leurs chantiers à Dakar avec une approche transparente, réactive et sans surprise.",
    bottomTitle: "Vous envoyez.\nNous vérifions.",
    bottomText:
      "Confiez le contrôle de votre chantier à une équipe présente sur le terrain à Dakar. Nous ne gérons pas vos travaux — nous sommes vos yeux, pour que chaque euro envoyé se transforme bien en matériaux réels.",
    cta1: { label: "Découvrir le suivi de chantier", href: "/chantier" },
    cta2: { label: "Parler à un conseiller", href: "/contact" },
  },
};

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Benefits() {
  const [tab, setTab] = useState<TabKey>("airbnb");
  const current = tabsConfig[tab];

  return (
    <section className="relative bg-[#F5F3EF] py-24 md:py-32 px-6 md:px-10 overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4C542]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#1F3D37]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="w-24 h-[3px] bg-[#F4C542] mx-auto rounded-full mb-6"></div>

          <span className="uppercase tracking-[4px] text-sm text-[#C8A84E] font-semibold">
            Pourquoi AMAFA Conciergerie
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight whitespace-pre-line">
                {current.heading}
              </h2>

              <p className="max-w-3xl mx-auto mt-8 text-[#555] text-base md:text-lg leading-relaxed">
                {current.sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TOGGLE TABS */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm">
            {(Object.keys(tabsConfig) as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  tab === key
                    ? "bg-[#1F3D37] text-white shadow-md"
                    : "text-[#666] hover:text-[#1A1A1A]"
                }`}
              >
                {tabsConfig[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {current.benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="
                    relative h-full
                    bg-white/70
                    backdrop-blur-xl
                    border border-white
                    rounded-[32px]
                    p-8 md:p-10
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    overflow-hidden
                  "
                >
                  {/* GOLD LIGHT */}
                  <div
                    className="
                      absolute -top-20 -right-20
                      w-40 h-40
                      bg-[#F4C542]/10
                      blur-3xl
                      rounded-full
                      opacity-0
                      group-hover:opacity-100
                      transition duration-700
                    "
                  ></div>

                  {/* NUMBER */}
                  <div
                    className="
                      w-24 h-24
                      rounded-3xl
                      bg-[#F4C542]
                      text-[#1A1A1A]
                      flex items-center justify-center
                      text-3xl font-bold
                      shadow-lg
                      group-hover:scale-110
                      transition duration-500
                    "
                  >
                    {"value" in item && item.value !== undefined ? (
                      <Counter end={item.value} suffix={item.suffix} />
                    ) : (
                      <span className="text-xl">{(item as any).label}</span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-[#555] leading-relaxed mt-5 text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM BLOCK */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`
              mt-20
              rounded-[40px]
              p-10 md:p-14
              text-center
              shadow-2xl
              transition-colors duration-500
              ${tab === "airbnb" ? "bg-[#1A1A1A]" : "bg-[#0d1f1b]"}
            `}
          >
            <span className="uppercase tracking-[4px] text-sm text-[#F4C542] font-semibold">
              AMAFA Conciergerie
            </span>

            <h3 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight whitespace-pre-line">
              {current.bottomTitle}
            </h3>

            <p className="text-white/70 max-w-3xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
              {current.bottomText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href={current.cta1.href}
                className="
                  bg-[#F4C542]
                  text-black
                  font-semibold
                  px-8 py-4
                  rounded-2xl
                  hover:scale-105
                  transition duration-300
                "
              >
                {current.cta1.label}
              </a>

              <a
                href={current.cta2.href}
                className="
                  border border-white/20
                  text-white
                  px-8 py-4
                  rounded-2xl
                  hover:bg-white
                  hover:text-black
                  transition duration-300
                "
              >
                {current.cta2.label}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}