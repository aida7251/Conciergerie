import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── FAQ AIRBNB ───────────────────────────────────────────────────────────────
const airbnbFaq = [
  {
    q: "Comment fonctionne la commission de la conciergerie Airbnb AMAFA ?",
    a: "Notre commission est de 20 % des revenus bruts encaissés auprès des voyageurs, prélevée uniquement sur ce que vous encaissez réellement. Il n'y a aucun frais fixe mensuel, aucun frais caché et aucune mauvaise surprise. Si votre logement ne se loue pas pendant un mois, vous ne payez aucune commission. Notre intérêt est directement aligné avec le vôtre : plus votre location Airbnb génère de revenus, plus nous sommes motivés à optimiser ses performances sur le long terme.",
  },
  {
    q: "Sur quelles plateformes gérez-vous mon logement Airbnb ?",
    a: "Nous créons, rédigeons et optimisons vos annonces sur Airbnb et Booking.com, les deux principales plateformes de location courte durée au Sénégal. Les calendriers sont synchronisés automatiquement afin d'éviter les doubles réservations. Nous adaptons également les tarifs selon la saison, les événements locaux et la demande afin d'optimiser votre taux d'occupation et la rentabilité de votre logement.",
  },
  {
    q: "Qui réalise le ménage entre deux locations Airbnb ?",
    a: "Le ménage est assuré par des prestataires professionnels sélectionnés et coordonnés par notre équipe. Chaque intervention comprend un nettoyage complet, la désinfection des surfaces, le remplacement du linge ainsi qu'un contrôle qualité avant l'arrivée des prochains voyageurs. Nous veillons à ce que votre logement reste impeccable après chaque séjour.",
  },
  {
    q: "Que se passe-t-il en cas de problème technique pendant un séjour Airbnb ?",
    a: "Nous disposons d'un réseau de professionnels qualifiés en plomberie, électricité, serrurerie et électroménager capables d'intervenir rapidement. Dès qu'un problème est signalé, nous coordonnons l'intervention, suivons sa résolution et vous tenons informé. Les frais de réparation restent à votre charge, mais vous n'avez jamais à rechercher un artisan ou à gérer l'urgence vous-même.",
  },
  {
    q: "Le shooting photo professionnel est-il vraiment offert ?",
    a: "Oui. Pour tout contrat de gestion supérieur à 6 mois, nous offrons un shooting photo professionnel d'une valeur estimée à 249 €. Des photos de qualité permettent d'améliorer la visibilité de votre annonce Airbnb, d'augmenter le taux de clic et de favoriser davantage de réservations. C'est un investissement que nous prenons en charge dès le début de notre collaboration.",
  },
  {
    q: "Comment suivre les revenus de ma location Airbnb ?",
    a: "Vous recevez chaque mois un reporting détaillé comprenant l'ensemble des réservations, les revenus encaissés, les dépenses liées au logement ainsi que le calcul de notre commission. Vous disposez d'une vision claire et transparente de la rentabilité de votre bien sans avoir à effectuer vous-même les calculs.",
  },
  {
    q: "Dans quelles villes proposez-vous votre service de conciergerie Airbnb ?",
    a: "Notre service de conciergerie Airbnb intervient principalement à Dakar. Nous pouvons également accompagner des propriétaires dans d'autres villes du Sénégal selon la localisation du logement et les besoins du projet. N'hésitez pas à nous contacter afin d'étudier votre situation.",
  },
];

// ─── FAQ CHANTIER ─────────────────────────────────────────────────────────────
const chantierFaq = [
  {
    q: "Est-ce qu'AMAFA gère entièrement mon chantier au Sénégal ?",
    a: "Non, et c'est une distinction essentielle. Votre maçon reste votre maçon, vous gardez la main sur toutes les décisions techniques, le choix des matériaux et le rythme des travaux. Nous ne sommes pas maîtres d'œuvre et nous ne donnons jamais d'ordres aux ouvriers sur place. Notre rôle consiste à assurer le suivi et le contrôle de votre chantier, à observer, photographier et vous rapporter fidèlement ce qui se passe réellement sur votre terrain afin que vous puissiez prendre vos décisions en toute connaissance de cause, même depuis la France.",
  },
  {
    q: "Comment fonctionne le contrôle de chantier après un envoi d'argent ?",
    a: "Dès que vous nous informez d'un envoi d'argent à votre maçon, notre agent se rend sur le chantier dans un délai maximum de 48 heures. Il photographie et vérifie précisément les matériaux présents — sacs de ciment, barres de fer, parpaings, gravier — puis compare ces éléments avec ce que vous nous avez indiqué avoir financé. Vous recevez ensuite un rapport clair comprenant le montant envoyé, les achats annoncés et les constatations réalisées sur place, accompagnées de photos.",
  },
  {
    q: "Le transport est-il vraiment inclus pour les chantiers à Dakar ?",
    a: "Oui, sans aucune condition cachée. Pour tout chantier situé à Dakar et dans ses environs immédiats, le transport aller-retour de notre agent est entièrement compris dans le tarif annoncé, que vous soyez en formule mensuelle ou en service à la carte. Vous n'avez jamais à avancer ou gérer ces frais vous-même. Pour les chantiers situés en dehors de Dakar — Thiès, Mbour, Saint-Louis ou ailleurs au Sénégal — un supplément de déplacement est calculé au cas par cas et toujours communiqué avant toute intervention.",
  },
  {
    q: "Que contient le rapport hebdomadaire de suivi de chantier ?",
    a: "Chaque vendredi avant 18 heures, vous recevez un rapport complet par WhatsApp ou par email comprenant entre 15 et 20 photos horodatées et géolocalisées du chantier, une vidéo montrant l'ensemble de l'avancement ainsi qu'un commentaire écrit ou vocal résumant les travaux réalisés dans la semaine. Si une question précise vous préoccupe, nous pouvons également vérifier ce point lors de notre prochain passage.",
  },
  {
    q: "Que se passe-t-il si une anomalie est détectée sur mon chantier ?",
    a: "Vous êtes averti immédiatement, sans attendre le rapport hebdomadaire. L'alerte comprend des photos, parfois une vidéo, ainsi qu'une description précise et factuelle de la situation observée : chantier à l'arrêt, différence entre les matériaux présents et les sommes envoyées ou toute autre anomalie constatée. Vous restez libre de décider des suites à donner avec votre maçon. Si nécessaire, nous pouvons organiser une visite de contrôle supplémentaire pour suivre l'évolution de la situation.",
  },
  {
    q: "Comment se déroule le paiement de votre service de suivi de chantier ?",
    a: "Pour les formules d'abonnement, le paiement s'effectue mensuellement et à l'avance par virement bancaire ou paiement en ligne. Pour les prestations à la carte — contrôle après un envoi d'argent, contrôle de livraison, visite d'urgence ou réception finale — le règlement est effectué avant l'intervention. Dans tous les cas, vous recevez une confirmation de paiement ainsi qu'un récapitulatif détaillé du service commandé.",
  },
  {
    q: "Intervenez-vous uniquement à Dakar ?",
    a: "Nous intervenons principalement à Dakar et dans sa région. Pour les autres villes du Sénégal, comme Thiès, Mbour, Saly ou Saint-Louis, nous étudions chaque demande afin de proposer une solution adaptée avec un devis de déplacement transparent.",
  },
];

type TabKey = "airbnb" | "chantier";

const tabsConfig: Record<TabKey, { label: string; faq: typeof airbnbFaq }> = {
  airbnb: { label: "Location courte durée", faq: airbnbFaq },
  chantier: { label: "Suivi de chantier · Sénégal", faq: chantierFaq },
};

export default function FAQ() {
  const [tab, setTab] = useState<TabKey>("airbnb");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = tabsConfig[tab];

  const handleTabChange = (key: TabKey) => {
    setTab(key);
    setOpenIndex(null);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="w-16 h-[3px] bg-[#F4C542] rounded-full mx-auto mb-5" />
          <h2 className="text-4xl font-bold text-[#1F3D37] mb-3">
                 Questions fréquentes sur notre conciergerie Airbnb & suivi de chantier au sénégal
          </h2>
          <p className="text-gray-500 text-base">
        Découvrez les réponses aux questions les plus fréquentes sur notre service de conciergerie Airbnb à Dakar  et suivi de chantier au Sénégal.
          </p>
        </div>

        {/* TOGGLE TABS */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#F5F3EF] border border-gray-200 rounded-2xl p-1.5">
            {(Object.keys(tabsConfig) as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
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

        {/* FAQ LIST */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {current.faq.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className="border-b border-gray-200 py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-start text-left gap-4"
                  >
                    <span className="font-semibold text-[#1F3D37] text-base">
                      {item.q}
                    </span>
                    <span
                      className={`text-[#F4C542] text-xl transition-transform duration-300 mt-0.5 ${
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-500 text-sm leading-relaxed pt-3">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}