import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Camera,
  Wrench,
  CheckCircle,
  ClipboardCheck,
  Wallet,
  FileText,
  Home,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import HeroServices from "../components/HeroServices";

const services = [
  {
    id: "annonce",
    icon: <Sparkles size={28} />,
    title:
      "Création & optimisation d’annonces Airbnb et Booking",
    video: "/images/annonce.jpg",

    short:
      "Transformez votre logement en une annonce premium pensée pour augmenter votre visibilité, vos réservations et vos revenus.",

    full: `
Votre annonce Airbnb ou Booking représente la première impression que les voyageurs auront de votre logement. 
En quelques secondes, un voyageur décide de cliquer sur votre annonce… ou de réserver ailleurs.

Notre objectif est de transformer votre bien en une annonce professionnelle, attractive et optimisée pour les plateformes de location courte durée afin d’augmenter votre visibilité et votre rentabilité.

Nous travaillons chaque détail pour mettre en valeur votre logement et améliorer son positionnement dans les résultats de recherche Airbnb et Booking.

• Rédaction SEO optimisée Airbnb & Booking
• Création de titres accrocheurs
• Valorisation des équipements et atouts du logement
• Publication multi-plateformes
• Synchronisation automatique des calendriers
• Optimisation intelligente des prix
• Ajustement continu des performances
• Mise à jour des annonces selon les saisons

Une annonce bien optimisée permet non seulement d’attirer davantage de voyageurs, mais aussi d’augmenter le taux de réservation et la qualité des demandes reçues.

Nous adaptons également votre annonce selon le type de clientèle ciblée :
voyageurs professionnels, touristes, familles ou séjours longue durée.

Grâce à une stratégie d’optimisation continue, votre logement gagne progressivement en visibilité et améliore ses performances sur le long terme.

Notre équipe analyse régulièrement :
les performances de l’annonce,
les taux de réservation,
les périodes creuses,
et les opportunités d’amélioration.

Le résultat :
un logement plus visible, une meilleure rentabilité et davantage de réservations tout au long de l’année.
`,
  },

  {
    id: "menage",
    icon: <Home size={28} />,
    title: "Ménage professionnel & gestion du linge",
    video: "/images/menage.jpg",

    short:
      "Un logement impeccable après chaque séjour pour garantir des avis 5 étoiles et fidéliser les voyageurs.",

    full: `
La propreté d’un logement est aujourd’hui l’un des critères les plus importants pour obtenir de bons avis voyageurs sur Airbnb et Booking.

Un logement parfaitement entretenu inspire immédiatement confiance, améliore l’expérience des voyageurs et favorise les notes 5 étoiles.

C’est pourquoi nous assurons un service de ménage professionnel complet après chaque séjour afin de garantir un niveau de qualité irréprochable.

• Nettoyage complet du logement
• Désinfection des surfaces
• Contrôle qualité systématique
• Changement des draps et serviettes
• Gestion du linge hôtelier
• Réapprovisionnement des consommables
• Vérification avant chaque arrivée
• Photos de contrôle après intervention

Chaque intervention est réalisée avec rigueur afin d’assurer un logement toujours propre, accueillant et prêt à recevoir de nouveaux voyageurs.

Grâce à notre partenaire agréé « Services à la Personne », certaines prestations de ménage peuvent également bénéficier du dispositif officiel d’Avance Immédiate du Crédit d’Impôt.

Ce système permet de réduire directement le coût des prestations éligibles sans attendre le remboursement l’année suivante.

Les frais de ménage étant généralement intégrés à la réservation voyageur, cela permet de maintenir un logement haut de gamme tout en optimisant la rentabilité globale du bien.

Notre objectif est simple :
vous permettre de proposer une expérience premium sans avoir à gérer l’organisation du ménage et du linge.

Le résultat :
un logement toujours impeccable, de meilleurs avis voyageurs et une gestion totalement simplifiée.
`,
  },

  {
    id: "photo",
    icon: <Camera size={28} />,
    title: "Shooting photo professionnel",
    video: "/images/photo.jpg",

    short:
      "Des photos professionnelles qui valorisent votre logement et augmentent vos réservations.",

    full: `
Les photos sont le premier élément regardé par les voyageurs sur Airbnb et Booking.com.

Avant même de lire la description, les voyageurs analysent les visuels pour se projeter dans le logement.
Des photos professionnelles peuvent faire toute la différence entre une annonce ignorée et une annonce réservée.

Nous réalisons un shooting photo premium afin de révéler tout le potentiel de votre bien et valoriser chaque espace du logement.

• Mise en scène professionnelle
• Travail de la lumière naturelle
• Optimisation des angles de prise de vue
• Photos haute définition
• Retouches et amélioration des visuels
• Valorisation des équipements et de l’ambiance
• Visuels adaptés aux standards Airbnb & Booking

Notre objectif est de créer des photos chaleureuses, lumineuses et rassurantes afin de donner immédiatement envie de réserver.

Nous mettons en avant :
les volumes,
la décoration,
la luminosité,
les équipements,
et l’ambiance générale du logement.

Un logement bien présenté inspire davantage confiance et améliore fortement le taux de clic et le taux de réservation.

Des visuels professionnels permettent également de :
mieux se démarquer de la concurrence,
augmenter la valeur perçue du logement,
et attirer des voyageurs plus qualifiés.

Le résultat :
plus de visibilité, plus de réservations et une meilleure rentabilité pour votre logement.
`,
  },

  {
    id: "assurance",
    icon: <ShieldCheck size={28} />,
    title: "Assurance & protection du bien",
    video: "/images/assurance.jpg",

    short:
      "Une double protection pour sécuriser votre logement pendant chaque réservation.",

    full: `
Votre logement mérite une protection à la hauteur de sa valeur.

Même avec des voyageurs respectueux, certains incidents peuvent malheureusement survenir lors d’une location courte durée.

C’est pourquoi nous mettons en place plusieurs niveaux de sécurité afin de protéger votre bien et vous apporter davantage de sérénité.

Chaque réservation bénéficie déjà des protections Airbnb AirCover proposées par la plateforme.

En complément, notre conciergerie prévoit également une assurance supplémentaire spécialisée dans la location courte durée afin de renforcer la protection globale du logement.

• Assurance Airbnb AirCover incluse
• Assurance complémentaire supplémentaire
• Protection renforcée contre certains dommages
• Accompagnement en cas de sinistre
• Gestion administrative des incidents
• Vérification du logement après chaque séjour
• Suivi des réparations si nécessaire

Notre équipe intervient rapidement en cas de problème afin de limiter les impacts sur votre activité locative.

Nous assurons également :
la coordination avec les assurances,
les échanges avec Airbnb,
le suivi administratif,
et l’organisation des interventions nécessaires.

Cette double protection permet d’offrir davantage de sécurité aux propriétaires tout en sécurisant durablement l’activité du logement.

Le résultat :
une meilleure tranquillité d’esprit, une gestion réactive des incidents et un logement protégé tout au long de l’année.
`,
  },

  {
    id: "maintenance",
    icon: <Wrench size={28} />,
    title: "Maintenance & interventions",
    video: "/images/maintenance.jpg",

    short:
      "Une intervention rapide pour éviter les problèmes voyageurs et protéger votre rentabilité.",

    full: `
Un problème technique peut rapidement impacter l’expérience des voyageurs et provoquer des annulations ou de mauvais avis.

Nous assurons donc un service de maintenance réactif afin de garantir un logement toujours fonctionnel, sécurisé et prêt à accueillir de nouveaux voyageurs.

• Dépannage rapide
• Gestion des petites réparations
• Intervention sur les équipements
• Réseau de prestataires qualifiés
• Suivi technique et coordination
• Maintenance générale du logement

Notre équipe intervient rapidement afin de limiter les interruptions de réservation et maintenir une excellente expérience voyageur.

Nous travaillons avec des professionnels qualifiés en plomberie, électricité, serrurerie, électroménager et maintenance générale.

Chaque intervention est suivie et contrôlée afin de garantir un service fiable et durable.

Le résultat :
moins de stress, moins d’imprévus et une activité locative sécurisée tout au long de l’année.
`,
  },

  {
    id: "checkin",
    icon: <CheckCircle size={28} />,
    title: "Check-in / Check-out",
    video: "/images/checkin.jpg",

    short:
      "Une arrivée autonome, sécurisée et une gestion complète des voyageurs.",

    full: `
Nous prenons en charge l’intégralité des arrivées et départs afin d’offrir une expérience fluide, professionnelle et sécurisée aux voyageurs.

Grâce à notre système d’entrée autonome, les voyageurs peuvent accéder facilement au logement même en cas d’arrivée tardive.

• Entrée autonome sécurisée
• Codes d’accès temporaires
• Changement régulier des codes
• Assistance voyageurs 7j/7
• Vérification complète après chaque départ
• Photos avant et après nettoyage
• Contrôle qualité systématique

Chaque logement est contrôlé après chaque séjour afin de garantir un niveau de qualité élevé et protéger votre bien.

Notre équipe reste également disponible pour accompagner les voyageurs et répondre rapidement en cas de besoin.

Le résultat :
une meilleure expérience voyageur, une sécurité renforcée et une gestion professionnelle du logement.
`,
  },

  {
    id: "control",
    icon: <ClipboardCheck size={28} />,
    title: "Contrôle hebdomadaire du logement",
    video: "/images/control.jpg",

    short:
      "Un suivi régulier pour les propriétaires souhaitant garder un œil sur leur bien à distance.",

    full: `
Parce qu’un logement bien suivi est un logement mieux protégé, nous proposons un service de contrôle régulier du bien.

En complément des vérifications réalisées après chaque réservation, nous effectuons également des contrôles hebdomadaires pour garantir que le logement reste toujours en parfait état.

• Vérification générale du logement
• Contrôle des équipements
• Anticipation des problèmes techniques
• Reporting détaillé
• Contrôles qualité réguliers
• Suivi professionnel du bien

Nous proposons également des contrôles en visioconférence jusqu’à 3 fois par mois afin de permettre aux propriétaires éloignés de garder un contact visuel avec leur logement.

Ce service permet aux bailleurs :
de rester proches de leur bien,
de garder un suivi transparent,
et de se sentir rassurés même à distance.

Le résultat :
plus de sérénité, une meilleure anticipation des problèmes et un logement toujours entretenu.
`,
  },

  {
    id: "facturation",
    icon: <Wallet size={28} />,
    title: "Facturation & gestion des revenus",
    video: "/images/facturation.jpg",

    short:
      "Une gestion claire et transparente de vos revenus et dépenses locatives.",

    full: `
Nous vous accompagnons dans le suivi financier de votre activité de location courte durée afin de simplifier votre gestion administrative.

Notre objectif est de vous permettre de garder une vision claire de vos revenus, dépenses et performances locatives.

• Suivi des revenus voyageurs
• Reporting mensuel détaillé
• Historique des paiements
• Suivi des dépenses
• Reversements sécurisés
• Tableau récapitulatif des opérations

Les prestations de ménage sont directement facturées au propriétaire par les sociétés partenaires afin de garantir une gestion transparente et simplifiée.

Nous pouvons également fournir un suivi structuré des dépenses et revenus afin de vous aider à préparer plus facilement vos démarches administratives et déclaratives.

Vous bénéficiez ainsi d’une meilleure visibilité sur la rentabilité réelle de votre logement.

Le résultat :
une gestion financière plus claire, un gain de temps administratif et une meilleure organisation.
`,
  },

  {
    id: "admin",
    icon: <FileText size={28} />,
    title: "Démarches administratives & accompagnement",
    video: "/images/admin.jpg",

    short:
      "Un accompagnement professionnel pour simplifier la gestion administrative de votre activité.",

    full: `
La location courte durée implique plusieurs démarches administratives parfois complexes pour les propriétaires.

Notre rôle est de vous accompagner, vous conseiller et vous aider à mieux comprendre les obligations liées à votre activité locative.

• Accompagnement administratif
• Aide à la compréhension des obligations
• Centralisation des documents
• Suivi des revenus et dépenses
• Reporting détaillé
• Organisation simplifiée

Nous ne réalisons pas les déclarations fiscales à votre place et nous ne remplaçons pas un expert-comptable.

En revanche, nous mettons à votre disposition des outils et reportings clairs afin de faciliter vos démarches administratives et déclaratives.

Notre équipe reste disponible pour vous orienter et vous accompagner dans l’organisation de votre activité.

Le résultat :
une gestion plus sereine, plus organisée et un véritable gain de temps au quotidien.
`,
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);

    setTimeout(() => {
      refs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200);
  };

  return (
    <>
      <Navbar />

      <HeroServices />

      {/* PACK DE LANCEMENT PREMIUM */}
{/* PACK DE LANCEMENT PREMIUM */}
<section className="relative py-24 px-6 md:px-10 overflow-hidden bg-[#10231F]">

  {/* BACKGROUND EFFECT */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4C542] rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4C542] rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* TOP BADGE */}
    <div className="flex justify-center mb-6">
      <div className="bg-[#F4C542] text-[#10231F] font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider shadow-lg">
        Conciergerie Airbnb Premium • Location Courte Durée
      </div>
    </div>

    {/* TITLE */}
    <div className="text-center max-w-4xl mx-auto mb-16">

      <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
        Lancez votre logement
        <span className="text-[#F4C542]"> dans les meilleures conditions</span>
      </h2>

      <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
        Nous accompagnons les propriétaires dans la mise en place complète de leur
        location saisonnière afin d’optimiser la visibilité, les réservations et la rentabilité
        sur Airbnb, Booking.com et les principales plateformes de réservation.
      </p>

    </div>

    {/* MAIN CARD */}
    <div className="bg-white rounded-[35px] shadow-2xl overflow-hidden">

      <div className="grid lg:grid-cols-[45%_55%] min-h-[420px]">

        {/* LEFT CONTENT */}
        <div className="p-10 md:p-14">

          {/* OFFER BADGE */}
          <div className="mb-8">

            <div className="bg-green-100 text-green-700 px-5 py-3 rounded-full font-semibold text-sm inline-block shadow-sm">
              Shooting photo professionnel OFFERT pour tout engagement supérieur à 6 mois
            </div>

          </div>

          <h3 className="text-3xl md:text-4xl font-black text-[#10231F] mb-6 leading-tight">
            Un accompagnement premium dès le lancement
          </h3>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Nous prenons en charge toute la mise en place de votre logement afin de
            créer une annonce performante et attractive capable d’attirer davantage
            de voyageurs et de maximiser votre taux d’occupation.
          </p>

          <div className="space-y-5">

            {[
              "Création complète de l’annonce Airbnb & Booking",
              "Optimisation SEO Airbnb pour améliorer la visibilité",
              "Paramétrage intelligent des prix et disponibilités",
              "Synchronisation des calendriers multi-plateformes",
              "Configuration des arrivées autonomes sécurisées",
              "Accompagnement personnalisé au lancement",
              "Conseils pour optimiser la rentabilité du logement",
              "Valorisation professionnelle du bien",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="min-w-[30px] h-7 rounded-full bg-[#F4C542] flex items-center justify-center text-[#10231F] font-bold text-sm">
                  ✓
                </div>

                <p className="text-gray-700 text-base md:text-lg">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#F8F6F2] p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">

          <div className="absolute top-0 right-0 w-60 h-60 bg-[#F4C542]/20 rounded-full blur-3xl"></div>

          <div className="relative">

            {/* TITLE */}
            {/* TITLE */}
<div className="mb-10">

  <p className="text-gray-500 uppercase tracking-widest text-sm mb-3">
    Pack de lancement premium
  </p>

  <h3 className="text-5xl font-black text-[#10231F] leading-tight mb-3">
    Shooting Photo Offert
  </h3>

  <p className="text-[#F4C542] font-bold text-2xl mb-4">
    Valeur estimée : 100 000 franc
  </p>

  {/* <p className="text-gray-600 text-lg leading-relaxed">
    Pour toute mise en gestion supérieure à 6 mois,
    nous offrons le shooting photo professionnel afin
    d’optimiser l’attractivité et les performances
    de votre annonce Airbnb & Booking.
  </p> */}

</div>

            {/* BENEFITS */}
            <div className="space-y-5 mb-10">

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="font-bold text-[#10231F] mb-2">
                  Photos professionnelles haute qualité
                </h4>

                <p className="text-gray-600">
                  Mise en scène du logement, lumière optimisée,
                  retouches et visuels adaptés aux standards Airbnb & Booking.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="font-bold text-[#10231F] mb-2">
                  Optimisation de la visibilité Airbnb
                </h4>

                <p className="text-gray-600">
                  Une annonce professionnelle attire davantage de voyageurs
                  et améliore les performances du logement.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="font-bold text-[#10231F] mb-2">
                  Accompagnement personnalisé
                </h4>

                <p className="text-gray-600">
                  Notre équipe vous accompagne dans toutes les étapes
                  du lancement de votre activité de location courte durée.
                </p>
              </div>

            </div>

            {/* VILLA INFO */}
            <div className="bg-[#10231F] text-white rounded-2xl p-6 mb-8 shadow-xl">

              <h4 className="font-bold text-xl mb-3">
                Villa / Bien haut de gamme
              </h4>

              <p className="text-gray-300 leading-relaxed">
                Pour les villas, grands logements ou biens nécessitant
                une prestation spécifique, le pack de lancement et le shooting
                photo sont réalisés sur devis personnalisé.
              </p>

            </div>

            {/* CTA */}
            <div className="space-y-4">

              <button className="w-full bg-[#10231F] hover:bg-[#18352E] text-white py-5 rounded-2xl font-bold text-lg transition duration-300 hover:scale-[1.02] shadow-xl">
                Estimer mes revenus
              </button>

              <button className="w-full border-2 border-[#10231F] text-[#10231F] py-5 rounded-2xl font-bold text-lg hover:bg-[#10231F] hover:text-white transition duration-300">
                Demander un accompagnement
              </button>

            </div>

            {/* FOOT TEXT */}
            <div className="mt-8 text-center">

              <p className="text-sm text-gray-500 leading-relaxed">
                Idéal pour les propriétaires souhaitant déléguer la gestion
                de leur location saisonnière tout en maximisant leurs revenus.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      <div className="bg-[#F5F3EF] py-20 px-6 md:px-10">

        <div className="max-w-7xl mx-auto mb-16 text-center">

          <h1 className="text-5xl font-bold text-[#1F3D37] mb-6 leading-tight">
            Conciergerie Airbnb haut de gamme
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Nous accompagnons les propriétaires dans la gestion complète de leur
            location courte durée afin d’optimiser la rentabilité, améliorer
            l’expérience voyageur et valoriser durablement leur bien immobilier.
          </p>

        </div>

        <div className="space-y-20 max-w-7xl mx-auto">

          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={service.id}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-white to-[#f8f6f2] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >

                <div className="grid lg:grid-cols-[45%_55%] min-h-[420px]">

                  {/* VIDEO */}
                  <div className="relative overflow-hidden">

              {/* IMAGE */}
{/* IMAGE */}
<div className="relative overflow-hidden h-full min-h-[420px]">

  <img
    src={service.video}
    alt={service.title}
    loading="lazy"
    className="
      absolute inset-0
      w-full h-full
      object-cover
      transition-transform duration-700
      hover:scale-105
    "
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent"></div>

</div>
                    <div className="absolute inset-0 bg-black/20" />

                  </div>

                  {/* CONTENT */}
                  <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">

                    <div className="flex items-center gap-4 mb-6 text-[#1F3D37]">
                      {service.icon}

                      <h2 className="text-3xl font-bold leading-tight">
                        {service.title}
                      </h2>
                    </div>

                    <div className="flex gap-2 mb-6 flex-wrap">

                      <span className="bg-[#F4C542]/20 text-[#C59B00] px-3 py-1 rounded-full text-xs font-semibold">
                        Airbnb
                      </span>

                      <span className="bg-[#1F3D37]/10 text-[#1F3D37] px-3 py-1 rounded-full text-xs font-semibold">
                        Conciergerie Premium
                      </span>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Haute rentabilité
                      </span>

                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.short}
                    </p>

                    <AnimatePresence>

                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >

                          <div className="text-gray-600 whitespace-pre-line leading-8 text-[15px] mb-8">
                            {service.full}
                          </div>

                          <div className="grid grid-cols-2 gap-4">

                            <div className="bg-white border border-[#eee] p-5 rounded-2xl">
                              <p className="text-2xl font-bold text-[#1F3D37]">
                                + Réservations
                              </p>

                              <p className="text-sm text-gray-500 mt-1">
                                Optimisation continue
                              </p>
                            </div>

                            <div className="bg-white border border-[#eee] p-5 rounded-2xl">
                              <p className="text-2xl font-bold text-[#1F3D37]">
                                + Rentabilité
                              </p>

                              <p className="text-sm text-gray-500 mt-1">
                                Gestion professionnelle
                              </p>
                            </div>

                          </div>

                        </motion.div>
                      )}

                    </AnimatePresence>

                    <div className="flex flex-wrap gap-4 items-center mt-8">

                      <button
                        onClick={() => handleToggle(index)}
                        className="text-[#1F3D37] font-semibold hover:opacity-70 transition"
                      >
                        {isOpen ? "Lire moins ↑" : "Lire plus ↓"}
                      </button>

                      <button className="bg-gradient-to-r from-[#1F3D37] to-[#2E5B52] text-white px-6 py-3 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 font-medium">
                        Estimer mes revenus
                      </button>

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

      <FAQ />

      <Footer />
    </>
  );
}