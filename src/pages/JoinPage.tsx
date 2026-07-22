import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "33609886595";
const CONTACT_EMAIL = "amafaconciergerie@gmail.com";

// ─── OFFRES ───────────────────────────────────────────────────────────────────
type ContratType = "ponctuel" | "evolutif";

interface Offre {
  id: string;
  title: string;
  zone: string;
  type: ContratType;
  badge: string;
  desc: string;
  missions: string[];
  profil: string[];
}

const offres: Offre[] = [
  {
    id: "menage",
    title: "Agent de ménage / linge",
    zone: "Dakar et environs",
    type: "evolutif",
    badge: "Selon besoin, évolutif",
    desc: "Interventions ponctuelles entre chaque séjour voyageur, avec possibilité d'évolution vers une collaboration régulière voire un CDI selon le développement de notre activité.",
    missions: [
      "Nettoyage complet et désinfection du logement",
      "Changement et gestion du linge hôtelier",
      "Contrôle qualité avec photos après intervention",
      "Réapprovisionnement des consommables",
    ],
    profil: [
      "Expérience en ménage ou hôtellerie appréciée",
      "Rigueur et ponctualité indispensables",
      "Disponibilité variable selon les réservations",
      "Smartphone pour l'envoi de photos de contrôle",
    ],
  },
  {
    id: "agent-chantier",
    title: "Agent de suivi de chantier",
    zone: "Dakar et environs",
    type: "ponctuel",
    badge: "Mission selon besoin",
    desc: "Visites hebdomadaires sur les chantiers suivis par AMAFA pour la diaspora. Mission au cas par cas selon le nombre de chantiers actifs.",
    missions: [
      "Visite hebdomadaire avec photos et vidéos horodatées",
      "Comptage des matériaux livrés sur le chantier",
      "Rédaction d'un compte-rendu simple après chaque visite",
      "Signalement immédiat de toute anomalie constatée",
    ],
    profil: [
      "Bonne connaissance du secteur du bâtiment",
      "Sérieux et fiabilité absolue (poste de confiance)",
      "Moyen de transport pour se déplacer sur Dakar",
      "Smartphone avec bon appareil photo",
    ],
  },
  {
    id: "plombier",
    title: "Plombier",
    zone: "Dakar et environs",
    type: "ponctuel",
    badge: "Intervention selon besoin",
    desc: "Interventions ponctuelles sur les logements et chantiers suivis par AMAFA, en cas de panne ou de besoin d'installation.",
    missions: [
      "Dépannage de fuites et de canalisations",
      "Installation et réparation de sanitaires",
      "Intervention rapide en cas d'urgence voyageur",
    ],
    profil: [
      "Expérience confirmée en plomberie",
      "Disponibilité rapide en cas d'urgence",
      "Outillage personnel",
    ],
  },
  {
    id: "electricien",
    title: "Électricien",
    zone: "Dakar et environs",
    type: "ponctuel",
    badge: "Intervention selon besoin",
    desc: "Interventions ponctuelles pour les pannes électriques et installations sur nos logements et chantiers partenaires.",
    missions: [
      "Diagnostic et réparation de pannes électriques",
      "Installation de prises, éclairages et équipements",
      "Mise en conformité électrique de base",
    ],
    profil: [
      "Expérience confirmée en électricité",
      "Habilitation électrique appréciée",
      "Disponibilité rapide en cas d'urgence",
    ],
  },
  {
    id: "serrurier",
    title: "Serrurier",
    zone: "Dakar et environs",
    type: "ponctuel",
    badge: "Intervention selon besoin",
    desc: "Interventions ponctuelles en cas de problème d'accès, de serrure défectueuse ou de mise en place de systèmes d'entrée autonome.",
    missions: [
      "Dépannage de serrures et systèmes d'accès",
      "Installation de boîtes à clés et serrures connectées",
      "Intervention rapide en cas de perte de clés voyageur",
    ],
    profil: [
      "Expérience en serrurerie",
      "Réactivité, notamment en cas d'urgence",
      "Outillage personnel",
    ],
  },
  {
    id: "maintenance-generale",
    title: "Agent de maintenance générale",
    zone: "Dakar et environs",
    type: "ponctuel",
    badge: "Intervention selon besoin",
    desc: "Petites réparations et entretien général sur nos logements en gestion : peinture, menuiserie, électroménager, petits travaux.",
    missions: [
      "Petites réparations diverses dans les logements",
      "Entretien général et préventif",
      "Installation et réparation d'électroménager",
    ],
    profil: [
      "Polyvalence et débrouillardise",
      "Autonomie dans l'organisation des interventions",
      "Outillage de base",
    ],
  },
];

const typeStyles: Record<ContratType, { bg: string; text: string }> = {
  ponctuel: { bg: "bg-[#F5F3EF]", text: "text-[#666]" },
  evolutif: { bg: "bg-[#F4C542]/15", text: "text-[#8B6914]" },
};

export default function JoinPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"tous" | ContratType>("tous");

  const filtered =
    filter === "tous" ? offres : offres.filter((o) => o.type === filter);

  const applyMessage = (offre: Offre) =>
    encodeURIComponent(
      `Bonjour AMAFA Conciergerie,%0A%0A` +
      `Je souhaite postuler pour le poste de : ${offre.title}%0A` +
      `Zone : ${offre.zone}%0A%0A` +
      `Merci de me recontacter pour échanger sur cette opportunité.`
    );

  return (
    <>
      <Navbar />

      {/* HERO */}
      {/* HERO */}
<section className="relative h-[55vh] overflow-hidden flex items-center justify-center">

  {/* IMAGE */}
  <img
    src="/images/hero-recrutement.jpg"
    alt="Rejoignez AMAFA Conciergerie à Dakar"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Contenu */}
  <div className="relative z-10 text-center px-6 max-w-3xl">

    <span className="uppercase tracking-[4px] text-sm text-[#F4C542] font-semibold mb-4 block">
      Nous rejoindre
    </span>

    <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
      Rejoignez le réseau de prestataires AMAFA
    </h1>

    <p className="text-lg text-white/85 leading-relaxed">
      Vous êtes basé à Dakar et souhaitez réaliser des missions ponctuelles dans la
      conciergerie Airbnb ou le suivi de chantier ? Rejoignez notre réseau de
      partenaires de confiance.
    </p>

  </div>

</section>

      {/* EXPLICATION DU MODÈLE */}
      <div className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-[#F5F3EF] rounded-2xl p-7">
            <h3 className="font-bold text-[#1F3D37] mb-2">Missions ponctuelles</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              La majorité de nos besoins sont des interventions au cas par cas :
              plombier, électricien, serrurier, agent de suivi de chantier ou
              de maintenance. Nous vous contactons lorsqu'une mission se
              présente, sans engagement de volume ni de régularité garantie.
            </p>
          </div>
          <div className="bg-[#F4C542]/10 border border-[#F4C542]/30 rounded-2xl p-7">
            <h3 className="font-bold text-[#8B6914] mb-2">Ménage : un cas particulier</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le poste d'agent de ménage démarre lui aussi par des missions
              selon les besoins, mais peut évoluer vers une collaboration
              régulière, voire un contrat plus stable, à mesure que notre
              activité de gestion de logements se développe à Dakar.
            </p>
          </div>
        </div>
      </div>

      {/* FILTRES */}
      <div className="bg-[#F5F3EF] pt-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">
            Les profils que nous recherchons
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Toutes nos missions sont basées à Dakar et ses environs.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm">
            {[
              { key: "tous", label: "Tous les profils" },
              { key: "ponctuel", label: "Mission ponctuelle" },
              { key: "evolutif", label: "Évolutif" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key as any)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  filter === f.key
                    ? "bg-[#1F3D37] text-white shadow-md"
                    : "text-[#666] hover:text-[#1A1A1A]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* LISTE DES OFFRES */}
      <div className="bg-[#F5F3EF] pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {filtered.map((offre) => {
                const isOpen = openId === offre.id;
                const style = typeStyles[offre.type];

                return (
                  <div
                    key={offre.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : offre.id)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    >
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="text-lg font-bold text-[#1A1A1A]">
                            {offre.title}
                          </h3>
                          <span
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${style.bg} ${style.text}`}
                          >
                            {offre.badge}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{offre.zone}</p>
                      </div>
                      <span
                        className={`text-[#F4C542] text-xl transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-gray-100 pt-5">
                            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                              {offre.desc}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                              <div>
                                <h4 className="text-xs uppercase tracking-wide text-[#C8A84E] font-bold mb-2">
                                  Missions
                                </h4>
                                <ul className="space-y-1.5">
                                  {offre.missions.map((m, i) => (
                                    <li
                                      key={i}
                                      className="text-gray-600 text-sm flex items-start gap-2"
                                    >
                                      <span className="text-[#F4C542] mt-0.5">•</span>
                                      {m}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-xs uppercase tracking-wide text-[#C8A84E] font-bold mb-2">
                                  Profil recherché
                                </h4>
                                <ul className="space-y-1.5">
                                  {offre.profil.map((p, i) => (
                                    <li
                                      key={i}
                                      className="text-gray-600 text-sm flex items-start gap-2"
                                    >
                                      <span className="text-[#F4C542] mt-0.5">•</span>
                                      {p}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                              <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${applyMessage(offre)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1F3D37] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#254840] transition text-center"
                              >
                                Postuler sur WhatsApp
                              </a>
                              <a
                                href={`mailto:${CONTACT_EMAIL}?subject=Candidature : ${offre.title}`}
                                className="border border-[#1F3D37] text-[#1F3D37] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#1F3D37] hover:text-white transition text-center"
                              >
                                Postuler par email
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BLOC FINAL - PROFIL NON LISTE */}
      <div className="bg-white py-16 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
            Votre métier n'est pas dans la liste ?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Nous élargissons régulièrement notre réseau de prestataires à
            Dakar. Envoyez-nous votre profil, nous vous contacterons si une
            mission correspondante se présente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Bonjour AMAFA Conciergerie, je souhaite vous proposer mes services en tant que prestataire à Dakar."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4C542] text-[#1A1A1A] px-7 py-3.5 rounded-xl font-semibold hover:scale-105 transition"
            >
              Nous écrire sur WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Candidature spontanée`}
              className="border border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 rounded-xl font-semibold hover:bg-[#1A1A1A] hover:text-white transition"
            >
              Nous écrire par email
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}