import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── DATA SERVICES ────────────────────────────────────────────────────────────
const services = [
  {
    id: "reporting",
    icon: "01",
    tag: "Le plus demandé",
    title: "Reporting hebdomadaire d'avancement",
    short:
      "Chaque vendredi, recevez photos et vidéos horodatées de votre chantier. Vous voyez exactement où en sont vos travaux, sans dépendre des messages de votre maçon.",
    details: [
      "1 visite sur place chaque semaine à jour et heure fixes",
      "15 à 20 photos horodatées et géolocalisées par visite",
      "Vidéo complète du chantier filmée méthodiquement",
      "Commentaire audio ou écrit simple sur l'avancement",
      "Envoi chaque vendredi avant 18h sur WhatsApp ou email",
      "Possibilité de poser des questions et demander un point spécifique",
    ],
    note: "Nous ne jugeons pas la qualité technique. Nous observons et rapportons.",
  },
  {
    id: "envois",
    icon: "02",
    tag: "Anti-arnaque",
    title: "Contrôle des envois d'argent",
    short:
      "Vous venez d'envoyer de l'argent pour acheter des matériaux ? Notre agent passe sur le chantier dans les 48h et vérifie que votre argent s'est bien transformé en matériaux visibles.",
    details: [
      "Visite dans les 48h suivant chaque envoi d'argent",
      "Photos horodatées des matériaux présents sur le chantier",
      "Comptage visible : sacs de ciment, barres de fer, parpaings, gravier",
      "Comparaison avec ce que vous avez déclaré avoir payé",
      "Rapport simple : envoyé X € pour Y → voici ce que nous avons constaté",
      "Alerte immédiate si écart important détecté",
    ],
    note: "Vous envoyez de l'argent depuis la France. Nous sommes vos yeux sur place.",
  },
  {
    id: "livraisons",
    icon: "03",
    tag: "Sécurité",
    title: "Contrôle des livraisons de matériaux",
    short:
      "Votre agent est physiquement présent au moment de la livraison pour vérifier que ce qui est déchargé correspond exactement à ce que vous avez commandé et payé.",
    details: [
      "Présence physique au moment de la livraison",
      "Filmage et photographie de tout ce qui est déchargé",
      "Comptage et vérification des quantités avec le bon de livraison",
      "Vérification visuelle de la qualité apparente des matériaux",
      "Signature du bon de livraison et envoi immédiat du rapport",
      "Transmission complète au client avec photos à l'appui",
    ],
    note: "Quelqu'un de votre côté était là. Vous avez la preuve.",
  },
  {
    id: "devis",
    icon: "04",
    tag: "Économies",
    title: "Analyse et vérification des devis",
    short:
      "Votre maçon vous envoie une facture. Vous ne savez pas si les prix sont honnêtes. Nous comparons avec les prix réels du marché à Dakar pour vous éviter les surfacturations.",
    details: [
      "Collecte des prix réels du marché local à Dakar",
      "Comparaison avec ce qui vous est facturé",
      "Analyse : prix dans la norme, légèrement élevé ou clairement excessif",
      "Fourchette de prix réels fournie pour renégocier",
      "Rapport écrit transmis sous 48h",
      "Conseil sur les postes à négocier en priorité",
    ],
    note: "Sur 200 sacs de ciment surfacturés de 2 500 FCFA chacun : 750€ économisés pour 100€ de prestation.",
  },
  {
    id: "urgence",
    icon: "05",
    tag: "Réactivité",
    title: "Intervention d'urgence",
    short:
      "Le chantier est à l'arrêt depuis 10 jours. Le maçon ne répond plus. Quelque chose d'anormal est signalé. Notre agent intervient dans les 24 à 48h avec un rapport complet.",
    details: [
      "Visite non programmée dans les 24 à 48h",
      "Constat complet de la situation avec photos et vidéo",
      "Rapport d'urgence transmis le jour même",
      "Description précise de ce qui est observé, sans interprétation technique",
      "Vous décidez ensuite de la marche à suivre avec votre maçon",
      "Disponible 7 jours sur 7",
    ],
    note: "Vous n'êtes jamais seul face à un problème sur votre chantier.",
  },
  {
    id: "reception",
    icon: "06",
    tag: "Fin de chantier",
    title: "Visite de réception finale",
    short:
      "Votre maçon dit que c'est terminé et réclame le solde. Avant de payer, vérifiez avec nous que tout ce qui était prévu est bien présent et conforme à votre liste de travaux.",
    details: [
      "Visite complète et méthodique du chantier terminé",
      "Vidéo longue pièce par pièce, intérieur et extérieur",
      "Vérification que tout ce qui était prévu est présent",
      "Comparaison avec le plan ou la liste de travaux fournie",
      "Rapport écrit : ce qui est fait, ce qui semble manquant ou incomplet",
      "Vous décidez si vous payez le solde ou retenez une partie",
    ],
    note: "Nous ne jugeons pas la conformité technique. Nous constatons ce qui est présent ou absent.",
  },
];

// ─── PACKS ────────────────────────────────────────────────────────────────────
const packs = [
  {
    name: "Sérénité",
    emoji: "",
    priceEur: "100",
    priceFcfa: "65 000",
    period: "/ mois",
    highlight: false,
    tag: null,
    desc: "Pour les chantiers en cours. Chaque vendredi vous recevez la preuve que votre argent avance réellement.",
    includes: [
      "4 visites sur place par mois",
      "Photos + vidéos horodatées chaque vendredi",
      "Tableau de suivi budgétaire partagé",
      "Réponse à vos questions sous 24h",
      "Transport aller-retour inclus à Dakar",
    ],
    cta: "Démarrer",
  },
  {
    name: "Tranquillité",
    emoji: "",
    priceEur: "150",
    priceFcfa: "98 000",
    period: "/ mois",
    highlight: true,
    tag: "Le plus complet",
    desc: "Tout inclus. Reporting + toutes les livraisons contrôlées + analyse des devis + 1 urgence par mois.",
    includes: [
      "4 visites hebdomadaires sur place",
      "Contrôle de toutes les livraisons",
      "Analyse des devis et factures",
      "Tableau budgétaire partagé",
      "1 visite d'urgence incluse / mois",
      "Appel visio mensuel avec vous",
      "Transport aller-retour inclus à Dakar",
    ],
    cta: "Choisir ce pack",
  },
  {
    name: "À la carte",
    emoji: "",
    priceEur: "À partir de 30€",
    priceFcfa: "",
    period: "",
    highlight: false,
    tag: null,
    desc: "Pas d'abonnement. Vous commandez uniquement ce dont vous avez besoin, quand vous en avez besoin. Transport inclus à Dakar, sur devis hors Dakar.",
    includes: [
      "Contrôle d'envoi d'argent : à partir de 30€",
      "Contrôle de livraison : à partir de 30€",
      "Analyse de devis : à partir de 30€",
      "Visite d'urgence : sur devis",
      "Visite de réception finale : sur devis",
      "→ Voir le détail des tarifs ci-dessous",
    ],
    cta: "Voir les tarifs",
  },
];

// ─── TARIFS À LA CARTE ────────────────────────────────────────────────────────
const carteItems = [
  {
    icon: "",
    service: "Contrôle d'envoi d'argent",
    desc: "Passage sur le chantier dans les 48h après votre envoi. Vérification que les matériaux correspondent au montant envoyé. Transport inclus à Dakar.",
    eur: "À partir de 30€",
    fcfa: "À partir de 20 000 F",
  },
  {
    icon: "",
    service: "Contrôle de livraison",
    desc: "Présence physique au moment de la livraison. Comptage, vérification et rapport immédiat. Transport inclus à Dakar.",
    eur: "À partir de 30€",
    fcfa: "À partir de 20 000 F",
  },
  {
    icon: "",
    service: "Analyse de devis / facture",
    desc: "Comparaison avec les prix réels du marché à Dakar. Rapport écrit sous 48h.",
    eur: "À partir de 30€",
    fcfa: "À partir de 20 000 F",
  },
  {
    icon: "",
    service: "Visite d'urgence",
    desc: "Intervention dans les 24 à 48h. Constat complet avec photos et vidéo transmis le jour même. Transport inclus à Dakar.",
    eur: "Sur devis",
    fcfa: "Sur devis",
  },
  {
    icon: "",
    service: "Visite de réception finale",
    desc: "Visite complète pièce par pièce avant paiement du solde. Rapport écrit de tout ce qui est présent ou manquant. Transport inclus à Dakar.",
    eur: "Sur devis",
    fcfa: "Sur devis",
  },
];

// ─── FAQ COMPONENT ────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Est-ce qu'AMAFA gère mon chantier ?",
    a: "Non. Votre maçon reste votre maçon. Vous gérez les travaux, vous prenez les décisions techniques. Nous sommes uniquement vos yeux sur place : nous observons, nous photographions, nous rapportons. Nous ne donnons pas d'ordres aux ouvriers.",
  },
  {
    q: "Et si je n'ai pas de maçon encore ?",
    a: "Notre service de contrôle s'applique aux chantiers déjà en cours avec un maçon choisi par vous. Nous ne recrutons pas d'artisans à votre place.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Paiement mensuel à l'avance pour les formules en abonnement. Paiement avant intervention pour les services à la carte. Virement bancaire ou paiement en ligne.",
  },
  {
    q: "Où intervenez-vous au Sénégal ?",
    a: "Principalement à Dakar et ses environs. Pour des chantiers dans d'autres villes (Thiès, Mbour, Saint-Louis), contactez-nous : nous étudions la faisabilité selon la localisation.",
  },
  {
    q: "Que se passe-t-il si mon agent détecte une anomalie grave ?",
    a: "Vous êtes alerté immédiatement par WhatsApp avec photos et description de la situation. Vous décidez ensuite de la marche à suivre. Nous pouvons retourner sur place pour un suivi si nécessaire.",
  },
  {
    q: "Les frais de transport sont-ils inclus ?",
    a: "Oui, pour tous les chantiers situés à Dakar et ses environs immédiats. Vous ne gérez rien et ne payez rien de plus. Pour les chantiers hors Dakar (Thiès, Mbour, Saint-Louis, Ziguinchor...), un supplément de déplacement est calculé et communiqué avant toute intervention.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="bg-[#F5F3EF] py-20 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1F3D37] mb-3">Questions fréquentes</h2>
          <p className="text-gray-500">Tout ce que vous devez savoir avant de démarrer.</p>
        </div>
        {faqItems.map((item, i) => (
          <div key={i} className="border-b border-gray-200 py-5">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-start text-left gap-4"
            >
              <span className="font-semibold text-[#1F3D37] text-base">{item.q}</span>
              <span className={`text-[#F4C542] text-xl transition-transform duration-300 mt-0.5 ${openIndex === i ? "rotate-180" : ""}`}>
                ↓
              </span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 text-sm leading-relaxed pt-3">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ChantierPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setTimeout(() => {
      refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
  };

  return (
    <>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] bg-[#0d1f1b] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f1b] via-[#1a3530] to-[#0d1f1b] opacity-95" />
        {/* decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C542]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F4C542]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F4C542]/15 border border-[#F4C542]/30 text-[#F4C542] text-xs tracking-[3px] uppercase px-5 py-2 rounded-full mb-8">
              AMAFA · Diaspora Sénégalaise
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Vos yeux sur le chantier
              <br />
              <span className="text-[#F4C542]">depuis la France</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Vous construisez au Sénégal et vous avez peur que votre argent disparaisse
              sans que les travaux avancent ? Nous sommes votre relais de confiance sur place.
            </p>

            <p className="text-white/50 text-sm max-w-xl mx-auto mb-10 italic">
              Nous ne gérons pas votre chantier. Nous le contrôlons et vous en rendons compte.
              Votre maçon reste le vôtre : nous sommes vos yeux.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => document.getElementById("packs")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#F4C542] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
              >
                Voir les formules
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border border-white/30 text-white px-7 py-3.5 rounded-2xl hover:bg-white hover:text-black transition duration-300"
              >
                Parler à un conseiller
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROOF BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a3530] py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            ["1 visite / semaine", "Chaque vendredi"],
            ["48h", "Après chaque envoi d'argent"],
            ["100%", "Livraisons contrôlées"],
            ["0", "Mauvaise surprise non signalée"],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-[#F4C542] font-bold text-xl">{val}</div>
              <div className="text-white/50 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F3EF] py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <div className="w-16 h-[3px] bg-[#F4C542] rounded-full mx-auto mb-5" />
            <h2 className="text-4xl font-bold text-[#1F3D37] mb-4">Nos services de contrôle</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Chaque service est conçu pour répondre à un problème précis que rencontre la diaspora
              quand elle construit au Sénégal depuis la France.
            </p>
          </div>

          <div className="space-y-5">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={service.id}
                  ref={(el) => { refs.current[index] = el; }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden"
                >
                  {/* HEADER */}
                  <div
                    className="flex items-start gap-5 p-7 cursor-pointer group"
                    onClick={() => handleToggle(index)}
                  >
                    <div className="w-14 h-14 min-w-[3.5rem] bg-[#F4C542] rounded-2xl flex items-center justify-center font-bold text-[#1A1A1A] text-lg shadow-md">
                      {service.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-xl font-bold text-[#1F3D37]">{service.title}</h3>
                        {service.tag && (
                          <span className="bg-[#F4C542]/20 text-[#8B6914] text-xs font-semibold px-3 py-1 rounded-full">
                            {service.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.short}</p>
                    </div>

                    <div className={`text-[#1F3D37] text-xl font-light transition-transform duration-300 mt-1 ${isOpen ? "rotate-180" : ""}`}>
                      ↓
                    </div>
                  </div>

                  {/* DETAILS */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-7 border-t border-gray-100 pt-6">
                          <div className="grid md:grid-cols-2 gap-3 mb-5">
                            {service.details.map((d, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-5 h-5 min-w-[1.25rem] bg-[#F4C542] rounded-full flex items-center justify-center mt-0.5">
                                  <span className="text-[#1A1A1A] text-xs font-bold">✓</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                              </div>
                            ))}
                          </div>

                          {/* NOTE */}
                          <div className="bg-[#1F3D37]/5 border-l-4 border-[#F4C542] rounded-r-xl px-5 py-3 mb-5">
                            <p className="text-[#1F3D37] text-sm italic font-medium">
                              {service.note}
                            </p>
                          </div>

                          <button
                            onClick={() => navigate("/contact")}
                            className="bg-[#1F3D37] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#254840] transition text-sm"
                          >
                            Demander ce service →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-[3px] bg-[#F4C542] rounded-full mx-auto mb-5" />
          <h2 className="text-4xl font-bold text-[#1F3D37] mb-14">Comment ça marche ?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", icon: "", title: "Vous nous contactez", desc: "Vous nous expliquez votre projet, la localisation du chantier et vos besoins." },
              { n: "2", icon: "", title: "On définit la formule", desc: "On choisit ensemble le pack adapté à votre situation et vos envois." },
              { n: "3", icon: "", title: "Notre agent intervient", desc: "Votre agent de confiance à Dakar réalise les visites selon le protocole AMAFA." },
              { n: "4", icon: "", title: "Vous recevez le rapport", desc: "Photos, vidéos, commentaires. Vous savez exactement ce qui se passe." },
            ].map((step) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-[#F4C542] rounded-2xl flex items-center justify-center font-bold text-[#1A1A1A] text-lg mb-4 shadow-md">
                  {step.n}
                </div>
                                <h3 className="font-bold text-[#1F3D37] mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKS ────────────────────────────────────────────────────────────── */}
      <section id="packs" className="bg-[#0d1f1b] py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-16 h-[3px] bg-[#F4C542] rounded-full mx-auto mb-5" />
            <h2 className="text-4xl font-bold text-white mb-4">Nos formules</h2>
            <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
              Choisissez la formule adaptée à votre situation. Pas de frais cachés,
              pas d'engagement minimum sur les formules à la carte.
            </p>
          </div>

          {/* TRANSPORT INFO BOX */}
          <div className="bg-[#F4C542]/10 border border-[#F4C542]/30 rounded-2xl px-6 py-5 mb-10 flex items-start gap-4">
            
            <div>
              <p className="text-[#F4C542] font-bold text-sm mb-1">Transport inclus : sans supplément pour vous</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Vous n'avez pas à gérer notre déplacement. Les frais de transport aller-retour de notre agent
                sont <span className="text-white font-medium">entièrement inclus dans le tarif</span> pour
                tous les chantiers situés à Dakar et ses environs immédiats.
                Pour les chantiers en dehors de Dakar (Thiès, Mbour, Saint-Louis, etc.),
                un <span className="text-white font-medium">supplément de déplacement</span> sera indiqué
                au moment du devis.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packs.map((pack, i) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  pack.highlight
                    ? "bg-[#F4C542] text-[#1A1A1A]"
                    : "bg-white/8 border border-white/12 text-white"
                }`}
              >
                {pack.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1F3D37] text-[#F4C542] text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                    {pack.tag}
                  </div>
                )}

                                <h3 className={`text-xl font-bold mb-1 ${pack.highlight ? "text-[#1A1A1A]" : "text-white"}`}>
                  Formule {pack.name}
                </h3>

                {/* PRIX EUR + FCFA */}
                {pack.priceFcfa !== "" ? (
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-bold ${pack.highlight ? "text-[#1A1A1A]" : "text-[#F4C542]"}`}>
                        {pack.priceEur}€
                      </span>
                      <span className={`text-sm ${pack.highlight ? "text-[#1A1A1A]/60" : "text-white/50"}`}>
                        {pack.period}
                      </span>
                    </div>
                    <p className={`text-xs mt-0.5 ${pack.highlight ? "text-[#1A1A1A]/50" : "text-white/35"}`}>
                      ≈ {pack.priceFcfa} FCFA {pack.period}
                    </p>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className={`text-xl font-bold ${pack.highlight ? "text-[#1A1A1A]" : "text-[#F4C542]"}`}>
                      {pack.priceEur}
                    </span>
                    <p className={`text-xs mt-0.5 ${pack.highlight ? "text-[#1A1A1A]/50" : "text-white/35"}`}>
                      Voir le détail des tarifs ci-dessous
                    </p>
                  </div>
                )}

                <p className={`text-sm leading-relaxed mb-6 ${pack.highlight ? "text-[#1A1A1A]/70" : "text-white/60"}`}>
                  {pack.desc}
                </p>

                <div className="space-y-2.5 mb-8 flex-1">
                  {pack.includes.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 min-w-[1rem] rounded-full flex items-center justify-center mt-0.5 ${
                        pack.highlight ? "bg-[#1A1A1A]" : "bg-[#F4C542]"
                      }`}>
                        <span className={`text-[10px] font-bold ${pack.highlight ? "text-[#F4C542]" : "text-[#1A1A1A]"}`}>✓</span>
                      </div>
                      <span className={`text-sm leading-snug ${pack.highlight ? "text-[#1A1A1A]" : "text-white/75"}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (pack.name === "À la carte") {
                      document.getElementById("carte")?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate("/contact");
                    }
                  }}
                  className={`w-full py-3 rounded-2xl font-semibold text-sm transition duration-300 hover:scale-105 ${
                    pack.highlight
                      ? "bg-[#1A1A1A] text-white hover:bg-[#1F3D37]"
                      : "bg-[#F4C542] text-[#1A1A1A]"
                  }`}
                >
                  {pack.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* NOTE BAS */}
          <p className="text-center text-white/40 text-sm mt-8 italic">
            Taux de conversion indicatif : 1€ ≈ 655 FCFA. Les prix peuvent varier selon la localisation exacte du chantier.
          </p>
        </div>
      </section>

      {/* ── TARIFS À LA CARTE ────────────────────────────────────────────────── */}
      <section id="carte" className="bg-[#F5F3EF] py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-[3px] bg-[#F4C542] rounded-full mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-[#1F3D37] mb-3">Tarifs à la carte</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Pas d'abonnement. Vous payez uniquement ce que vous commandez.
              Chaque prix est affiché en euros et en francs CFA.
            </p>
          </div>

          {/* TRANSPORT NOTE */}
          <div className="bg-[#1F3D37] rounded-2xl px-6 py-5 mb-8 flex items-start gap-4">
            
            <div>
              <p className="text-[#F4C542] font-bold text-sm mb-1">Transport toujours inclus à Dakar</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Pour tous les chantiers situés à <span className="text-white font-medium">Dakar et ses environs</span>,
                le transport aller-retour de notre agent est compris dans le tarif indiqué.
                Vous ne gérez rien, vous ne payez rien de plus.
                <br />
                <span className="text-[#F4C542]">Hors Dakar</span> (Thiès, Mbour, Saint-Louis, Ziguinchor...) :
                supplément de déplacement calculé et communiqué avant toute intervention.
              </p>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            {/* HEADER */}
            <div className="grid grid-cols-12 bg-[#1F3D37] px-6 py-4 text-xs font-bold text-white/70 uppercase tracking-wider">
              <div className="col-span-5">Service</div>
              <div className="col-span-4 hidden md:block">Description</div>
              <div className="col-span-3 md:col-span-1 text-right">Prix €</div>
              <div className="col-span-4 md:col-span-2 text-right">Prix FCFA</div>
            </div>

            {carteItems.map((item, i) => (
              <div
                key={item.service}
                className={`grid grid-cols-12 px-6 py-5 items-start gap-2 border-b border-gray-100 last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F5F3EF]"
                }`}
              >
                {/* SERVICE */}
                <div className="col-span-12 md:col-span-5 flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-[#1F3D37] text-sm">{item.service}</p>
                    <p className="text-gray-400 text-xs mt-0.5 md:hidden leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {/* DESC desktop */}
                <div className="col-span-4 hidden md:block">
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
                {/* PRIX EUR */}
                <div className="col-span-6 md:col-span-1 text-right">
                  <span className="font-bold text-[#1F3D37] text-sm">{item.eur}</span>
                </div>
                {/* PRIX FCFA */}
                <div className="col-span-6 md:col-span-2 text-right">
                  <span className="text-[#C59B00] font-semibold text-sm">{item.fcfa}</span>
                </div>
              </div>
            ))}

            {/* FOOTER */}
            <div className="px-6 py-5 bg-[#F4C542]/10 border-t border-[#F4C542]/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-gray-500 text-xs leading-relaxed">
                  Transport inclus pour tout chantier à Dakar. Hors Dakar, le déplacement est établi sur devis.<br />
                  Taux indicatif : <strong>1€ = 655 FCFA</strong>
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-[#1F3D37] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#254840] transition whitespace-nowrap"
                >
                  Commander un service →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ CHANTIER ─────────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section className="bg-[#1F3D37] py-16 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à ne plus construire à l'aveugle ?
          </h2>
          <p className="text-white/60 mb-8 text-lg leading-relaxed">
            Contactez-nous pour un premier échange gratuit.
            On vous explique comment on peut vous aider selon votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#F4C542] text-[#1A1A1A] font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition shadow-lg"
            >
              Parler à un conseiller
            </button>
            <button
              onClick={() => document.getElementById("packs")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
            >
              Voir les formules
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}