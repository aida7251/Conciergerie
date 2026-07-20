import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ─── SERVICES AIRBNB ──────────────────────────────────────────────────────────
const airbnbServices = [
  {
    id: "annonce",
    title: "Annonces Airbnb & Booking",
    video: "/images/annonce.jpg",
    description:
      "Création et optimisation complète de vos annonces pour maximiser vos réservations.",
  },
  {
    id: "menage",
    title: "Ménage professionnel",
    video: "/images/menage.jpg",
    description:
      "Nettoyage complet avec changement de draps et serviettes.",
  },
  {
    id: "photo",
    title: "Shooting photo",
    video: "/images/photo.jpg",
    description:
      "Photos professionnelles pour valoriser votre bien.",
  },
  {
    id: "assurance",
    title: "Assurance",
    video: "/images/assurance.jpg",
    description:
      "Gestion de l'assurance Airbnb et couverture complémentaire.",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    video: "/images/maintenance.jpg",
    description:
      "Intervention rapide en cas de problème.",
  },
  {
    id: "checkin",
    title: "Check-in / Check-out",
    video: "/images/checkin.jpg",
    description:
      "Accueil des voyageurs et état des lieux complet.",
  },
  {
    id: "control",
    title: "Contrôle hebdomadaire",
    video: "/images/control.jpg",
    description:
      "Inspection régulière du logement.",
  },
  {
    id: "facturation",
    title: "Facturation",
    video: "/images/facturation.jpg",
    description:
      "Gestion complète des paiements et factures.",
  },
  {
    id: "admin",
    title: "Démarches administratives",
    video: "/images/admin.jpg",
    description:
      "Accompagnement pour les équipements et obligations.",
  },
];

// ─── SERVICES CHANTIER ────────────────────────────────────────────────────────
const chantierServices = [
  {
    id: "reporting",
    title: "Reporting hebdomadaire",
    video: "/images/control.jpg",
    description:
      "Photos et vidéos horodatées de votre chantier chaque vendredi.",
  },
  {
    id: "envois",
    title: "Contrôle des envois d'argent",
    video: "/images/chantier-envois.jpg",
    description:
      "Vérification sous 48h que votre argent est bien en matériaux.",
  },
  {
    id: "livraisons",
    title: "Contrôle des livraisons",
    video: "/images/chantier-livraisons.jpg",
    description:
      "Présence physique au moment de chaque livraison de matériaux.",
  },
  {
    id: "devis",
    title: "Analyse de devis",
    video: "/images/chantier-devis.jpg",
    description:
      "Comparaison avec les prix réels du marché à Dakar.",
  },
  {
    id: "urgence",
    title: "Intervention d'urgence",
    video: "/images/chantier-urgence.jpg",
    description:
      "Visite sous 24 à 48h en cas de doute ou d'anomalie.",
  },
  {
    id: "reception",
    title: "Réception finale",
    video: "/images/chantier-reception.jpg",
    description:
      "Visite complète avant le paiement du solde au maçon.",
  },
];

type TabKey = "airbnb" | "chantier";

const tabsConfig: Record<
  TabKey,
  { label: string; services: typeof airbnbServices; route: string; ctaLabel: string }
> = {
  airbnb: {
    label: "Location courte durée",
    services: airbnbServices,
    route: "/services",
    ctaLabel: "Découvrir tous nos services Airbnb",
  },
  chantier: {
    label: "Suivi de chantier · Sénégal",
    services: chantierServices,
    route: "/chantier",
    ctaLabel: "Découvrir le suivi de chantier",
  },
};

export default function Services() {
  const [tab, setTab] = useState<TabKey>("airbnb");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const current = tabsConfig[tab];

  const handleTabChange = (key: TabKey) => {
    setTab(key);
    setActiveIndex(null);
  };

  return (
    <section className="bg-[#1F3D37] py-24 px-6 md:px-10">

      {/* TITRE */}
      <div className="text-center mb-10">
        <div className="animated-line mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold text-white">Nos Services</h2>
        <p className="text-white/50 mt-3 max-w-xl mx-auto text-sm">
          Choisissez l'univers qui vous concerne.
        </p>
      </div>

      {/* TOGGLE TABS */}
      <div className="flex justify-center mb-14">
        <div className="inline-flex bg-white/8 border border-white/12 rounded-2xl p-1.5">
          {(Object.keys(tabsConfig) as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                tab === key
                  ? "bg-[#F4C542] text-[#1A1A1A] shadow-md"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {tabsConfig[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID — ANIMATED ON TAB CHANGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {current.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden cursor-pointer group transition duration-500"
              onClick={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* VIDEO */}
             {/* IMAGE */}
<img
  src={service.video}
  alt={service.title}
  className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-700 bg-[#162e29]"
  loading="lazy"
/>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

              {/* TAG si chantier */}
              {tab === "chantier" && (
                <span className="absolute top-3 right-3 bg-[#F4C542] text-[#1A1A1A] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  Sénégal
                </span>
              )}

              {/* CONTENU */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{service.title}</h3>

                {activeIndex === index && (
                  <div className="mt-2">
                    <p className="text-sm mb-3">{service.description}</p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`${current.route}#${service.id}`);
                      }}
                      className="bg-[#F4C542] text-black px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                    >
                      Découvrir
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* BOUTON GLOBAL */}
      <div className="text-center mt-16">
        <button
          onClick={() => navigate(current.route)}
          className="bg-[#F4C542] text-black px-6 py-3 rounded-xl hover:scale-105 hover:shadow-lg transition duration-300"
        >
          {current.ctaLabel}
        </button>
      </div>

    </section>
  );
}