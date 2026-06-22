import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── FAQ AIRBNB ───────────────────────────────────────────────────────────────
const airbnbFaq = [
  {
    q: "Comment fonctionne la commission AMAFA ?",
    a: "Notre commission est de 20% des revenus bruts encaissés auprès des voyageurs, prélevée uniquement sur ce que vous encaissez réellement. Il n'y a aucun frais fixe mensuel, aucun frais de mise en route caché et aucune mauvaise surprise sur votre facture. Concrètement, si votre logement ne se loue pas un mois donné, vous ne payez rien ce mois-là. Notre intérêt est directement aligné avec le vôtre : plus votre bien génère de revenus, plus nous sommes motivés à optimiser sa performance sur le long terme.",
  },
  {
    q: "Sur quelles plateformes gérez-vous mon annonce ?",
    a: "Nous créons, rédigeons et optimisons vos annonces sur Airbnb et Booking.com, qui restent les deux plateformes générant le plus de réservations pour la location courte durée au Sénégal. Les calendriers sont synchronisés automatiquement entre les plateformes pour éviter tout risque de double réservation. Nous ajustons également les prix en continu selon la saisonnalité, les événements locaux et la demande, afin de maximiser votre taux d'occupation toute l'année plutôt que de vous laisser un prix figé.",
  },
  {
    q: "Qui s'occupe du ménage entre chaque séjour ?",
    a: "Le ménage est assuré par des prestataires professionnels partenaires, agréés Services à la Personne, sélectionnés et coordonnés par notre équipe. Chaque intervention comprend un nettoyage complet, la désinfection des surfaces, le changement complet du linge et un contrôle qualité avec photos avant la prochaine arrivée. Selon votre éligibilité, ces prestations peuvent également bénéficier du dispositif d'Avance Immédiate du Crédit d'Impôt, réduisant directement le coût sans attendre le remboursement l'année suivante.",
  },
  {
    q: "Que se passe-t-il en cas de problème technique chez un voyageur ?",
    a: "Nous disposons d'un réseau de prestataires qualifiés en plomberie, électricité, serrurerie et électroménager, capables d'intervenir rapidement pour limiter l'impact sur l'expérience du voyageur et éviter les avis négatifs. Dès qu'un problème est signalé, notre équipe coordonne l'intervention, suit sa résolution et vous tient informé. Les frais de réparation restent à votre charge en tant que propriétaire, mais vous n'avez jamais à gérer vous-même la recherche d'un artisan disponible en urgence.",
  },
  {
    q: "Le shooting photo est-il vraiment offert ?",
    a: "Oui, sans condition cachée. Pour tout engagement de gestion supérieur à 6 mois, nous offrons un shooting photo professionnel complet, d'une valeur estimée à 249€. Nos photographes travaillent la mise en scène, la lumière naturelle et les angles de prise de vue pour révéler le potentiel réel de votre logement. Des photos de qualité augmentent directement le taux de clic sur votre annonce et donc vos réservations — c'est un investissement que nous prenons en charge dès le lancement de notre collaboration.",
  },
  {
    q: "Puis-je suivre mes revenus facilement ?",
    a: "Vous recevez chaque mois un reporting détaillé incluant l'historique complet de vos réservations, le montant exact des revenus encaissés, le suivi des dépenses liées au logement et le calcul de notre commission. Tout est présenté de façon claire et transparente, sans jargon technique. Vous gardez ainsi une visibilité totale sur la rentabilité réelle de votre bien, mois après mois, sans avoir à réclamer ou reconstituer vous-même ces informations.",
  },
];

// ─── FAQ CHANTIER ─────────────────────────────────────────────────────────────
const chantierFaq = [
  {
    q: "Est-ce qu'AMAFA gère mon chantier ?",
    a: "Non, et c'est une distinction essentielle. Votre maçon reste votre maçon, vous gardez la main sur toutes les décisions techniques, le choix des matériaux et le rythme des travaux. Nous ne sommes pas maîtres d'œuvre et nous ne donnons jamais d'ordres aux ouvriers sur place. Notre rôle se limite strictement à observer, photographier et vous rapporter fidèlement ce qui se passe réellement sur votre terrain, pour que vous puissiez prendre vos décisions en toute connaissance de cause depuis la France.",
  },
  {
    q: "Comment se passe le contrôle après un envoi d'argent ?",
    a: "Dès que vous nous informez d'un envoi d'argent à votre maçon, notre agent se rend sur le chantier dans un délai de 48 heures maximum. Il photographie et compte précisément les matériaux présents — sacs de ciment, barres de fer, parpaings, gravier — puis compare ces éléments avec ce que vous nous avez indiqué avoir payé. Vous recevez ensuite un rapport simple et factuel : le montant envoyé, l'objet de l'achat déclaré, et ce qui a été concrètement constaté sur place, avec photos à l'appui.",
  },
  {
    q: "Le transport est-il vraiment inclus ?",
    a: "Oui, sans aucune condition cachée. Pour tout chantier situé à Dakar et dans ses environs immédiats, le transport aller-retour de notre agent est entièrement compris dans le tarif annoncé, que vous soyez en formule mensuelle ou en service à la carte. Vous n'avez jamais à avancer ou gérer ces frais vous-même. Pour les chantiers situés en dehors de Dakar — Thiès, Mbour, Saint-Louis ou ailleurs — un supplément de déplacement est calculé au cas par cas et toujours communiqué avant le début de toute intervention.",
  },
  {
    q: "Que reçois-je exactement chaque semaine ?",
    a: "Chaque vendredi avant 18 heures, vous recevez un rapport complet par WhatsApp ou par email : entre 15 et 20 photos horodatées et géolocalisées du chantier, une vidéo filmée méthodiquement pour montrer l'ensemble de l'avancement, et un commentaire écrit ou vocal résumant ce qui a progressé dans la semaine. Si une question précise vous préoccupe, vous pouvez nous la poser directement et nous retournons vérifier ce point spécifique lors de notre prochain passage.",
  },
  {
    q: "Et si mon agent détecte une anomalie grave ?",
    a: "Vous êtes alerté immédiatement, sans attendre le rapport hebdomadaire habituel. L'alerte comprend des photos, parfois une vidéo, et une description précise et factuelle de ce qui a été observé — chantier à l'arrêt, écart entre l'argent envoyé et les matériaux visibles, ou tout autre signal inhabituel. C'est ensuite à vous de décider de la marche à suivre avec votre maçon. Si vous le souhaitez, nous pouvons organiser une visite de suivi rapprochée pour vérifier l'évolution de la situation dans les jours suivants.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Pour les formules en abonnement comme Sérénité ou Tranquillité, le paiement s'effectue mensuellement et à l'avance, par virement bancaire ou paiement en ligne. Pour les services à la carte — contrôle d'envoi, contrôle de livraison, visite d'urgence ou réception finale — le paiement intervient avant la réalisation de l'intervention. Dans tous les cas, vous recevez toujours une confirmation claire de paiement et le détail exact du service commandé.",
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
            Questions fréquentes
          </h2>
          <p className="text-gray-500 text-base">
            Tout ce que vous devez savoir avant de démarrer.
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