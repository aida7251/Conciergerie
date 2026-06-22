import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type TabKey = "airbnb" | "chantier";

const tabsConfig: Record<
  TabKey,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    desc: string;
    benefits: { title: string; text: string }[];
    boxTitle: string;
    boxDesc: string;
    cta1: { label: string; route: string };
    cta2: { label: string; route: string };
    trust: string[];
  }
> = {
  airbnb: {
    badge: "Conciergerie Airbnb Premium",
    title: "Transformez votre logement en",
    titleHighlight: "source de revenus rentable",
    desc: "Nous prenons en charge la gestion complète de votre location courte durée : optimisation Airbnb, gestion voyageurs, ménage professionnel, maintenance et suivi du logement. Vous profitez des revenus, nous gérons le reste.",
    benefits: [
      {
        title: "Revenus optimisés",
        text: "Tarification intelligente, optimisation des annonces Airbnb et visibilité renforcée pour maximiser vos réservations.",
      },
      {
        title: "Gestion complète & premium",
        text: "AMAFA Conciergerie prend en charge l'intégralité de la gestion de votre logement : accueil voyageurs, ménage professionnel, maintenance, assistance et suivi qualité.",
      },
      {
        title: "Visibilité optimisée",
        text: "Votre annonce est optimisée pour Airbnb, Booking.com et les principales plateformes afin d'augmenter votre visibilité, vos réservations et votre rentabilité.",
      },
    ],
    boxTitle: "Estimez gratuitement le potentiel de votre logement",
    boxDesc: "Découvrez combien votre bien peut générer en location courte durée grâce à notre expertise en gestion Airbnb et optimisation locative.",
    cta1: { label: "Estimer mes revenus", route: "/estimation" },
    cta2: { label: "Parler à un conseiller", route: "/contact" },
    trust: [
      "Accompagnement personnalisé",
      "Réponse rapide de notre équipe",
      "Sans engagement",
    ],
  },
  chantier: {
    badge: "Suivi de chantier · Diaspora Sénégal",
    title: "Ne construisez plus jamais",
    titleHighlight: "à l'aveugle",
    desc: "Nous sommes vos yeux sur votre chantier à Dakar : contrôle des envois d'argent, vérification des livraisons, reporting photo chaque semaine. Vous gardez votre maçon, nous vérifions que tout avance vraiment.",
    benefits: [
      {
        title: "Argent vérifié",
        text: "Chaque envoi est contrôlé sous 48h sur le chantier pour s'assurer que les matériaux sont bien présents et conformes.",
      },
      {
        title: "Reporting hebdomadaire",
        text: "Chaque vendredi vous recevez photos et vidéos horodatées de l'avancement réel — sans dépendre des messages de votre maçon.",
      },
      {
        title: "Transport toujours inclus",
        text: "Vous ne gérez jamais notre déplacement. Pour tout chantier à Dakar, le transport de notre agent est compris dans le tarif.",
      },
    ],
    boxTitle: "Échangez gratuitement sur votre chantier",
    boxDesc: "Expliquez-nous votre situation, la localisation de votre chantier et vos besoins. On vous propose la formule la plus adaptée.",
    cta1: { label: "Découvrir les formules", route: "/chantier" },
    cta2: { label: "Parler à un conseiller", route: "/contact" },
    trust: [
      "Premier échange gratuit",
      "Réponse rapide de notre équipe",
      "Sans engagement",
    ],
  },
};

export default function CTA() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabKey>("airbnb");
  const current = tabsConfig[tab];
  const isChantier = tab === "chantier";

  return (
    <section
      className={`relative overflow-hidden py-28 px-6 md:px-10 transition-colors duration-500 ${
        isChantier ? "bg-[#0d1f1b]" : "bg-[#10231F]"
      }`}
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F4C542]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F4C542]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* TOGGLE TABS */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/8 border border-white/12 rounded-2xl p-1.5">
            {(Object.keys(tabsConfig) as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  tab === key
                    ? "bg-[#F4C542] text-[#1A1A1A] shadow-md"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {key === "airbnb" ? "Location courte durée" : "Suivi de chantier"}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >

            {/* TOP BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-[#F4C542] text-[#10231F] font-bold px-6 py-3 rounded-full uppercase tracking-wider text-sm shadow-xl">
                {current.badge}
              </div>
            </motion.div>

            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-5xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                {current.title}
                <span className="text-[#F4C542]"> {current.titleHighlight}</span>
              </h2>

              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-14">
                {current.desc}
              </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              {current.benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 shadow-xl"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#F4C542]/10 border border-[#F4C542]/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#F4C542]"></div>
                  </div>

                  <h3 className="text-white text-2xl font-bold mb-4">{b.title}</h3>

                  <p className="text-gray-300 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA BLOCK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[35px] p-10 md:p-14 shadow-2xl text-center max-w-5xl mx-auto"
            >
              <h3 className="text-3xl md:text-5xl font-black text-[#10231F] mb-6 leading-tight">
                {current.boxTitle}
              </h3>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                {current.boxDesc}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col md:flex-row gap-5 justify-center">
                <button
                  onClick={() => navigate(current.cta1.route)}
                  className="bg-[#10231F] hover:bg-[#18352E] text-white px-10 py-5 rounded-2xl text-lg font-bold transition duration-300 hover:scale-105 shadow-xl"
                >
                  {current.cta1.label}
                </button>

                <button
                  onClick={() => navigate(current.cta2.route)}
                  className="border-2 border-[#10231F] text-[#10231F] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#10231F] hover:text-white transition duration-300"
                >
                  {current.cta2.label}
                </button>
              </div>

              {/* TRUST */}
              <div className="mt-10 text-gray-500 text-sm md:text-base leading-relaxed space-y-1">
                {current.trust.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}