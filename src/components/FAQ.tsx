import { useState } from "react";

const faqs = [
  {
    question: "Combien puis-je gagner avec mon logement en location courte durée ?",
    answer:
      "Les revenus générés par une location courte durée dépendent de plusieurs éléments : l’emplacement du logement, sa capacité d’accueil, la qualité des équipements, la saisonnalité ainsi que la demande locale. Un appartement bien optimisé sur Airbnb et Booking peut générer des revenus nettement supérieurs à une location classique.\n\nChez AMAFA Conciergerie, nous mettons en place une stratégie complète afin de maximiser la rentabilité de votre bien : optimisation des prix selon la période, amélioration du taux d’occupation, visibilité renforcée sur les plateformes et expérience voyageurs premium.\n\nNotre objectif est de vous aider à obtenir le meilleur équilibre entre rentabilité, sécurité et qualité de gestion tout en valorisant votre logement sur le long terme.",
  },

  {
    question: "Comment fonctionne concrètement votre service de conciergerie ?",
    answer:
      "AMAFA Conciergerie prend en charge l’ensemble de la gestion quotidienne de votre location courte durée afin de vous libérer complètement des contraintes opérationnelles.\n\nNous nous occupons notamment de :\n\n• la création et l’optimisation de votre annonce Airbnb & Booking,\n• la communication avec les voyageurs,\n• le check-in et le check-out,\n• le ménage professionnel et la gestion du linge,\n• la maintenance et les interventions techniques,\n• le suivi qualité du logement,\n• ainsi que l’assistance voyageurs 7j/7.\n\nVous restez propriétaire de votre logement et gardez le contrôle de vos disponibilités pendant que notre équipe gère le quotidien de manière professionnelle et transparente.",
  },

  {
    question: "Dans quelles villes AMAFA Conciergerie intervient-elle ?",
    answer:
      "AMAFA Conciergerie accompagne actuellement les propriétaires à Lorient, Lyon et Dakar.\n\nNotre présence locale nous permet de proposer un service réactif et humain avec un véritable suivi terrain. Cela nous permet également de mieux comprendre les spécificités du marché local, les attentes des voyageurs et les périodes de forte demande.\n\nNotre objectif est de développer une expérience premium adaptée à chaque ville tout en conservant un accompagnement personnalisé pour chaque propriétaire.",
  },

  {
    question: "Dois-je m’occuper moi-même des voyageurs ?",
    answer:
      "Non. Notre équipe prend en charge toute la relation voyageurs avant, pendant et après le séjour.\n\nNous répondons aux demandes d’informations, gérons les réservations, envoyons les consignes d’arrivée, accompagnons les voyageurs pendant leur séjour et restons disponibles en cas de besoin.\n\nGrâce à cette gestion professionnelle, les propriétaires gagnent un temps considérable tout en offrant une expérience plus fluide et plus rassurante aux voyageurs. Cela permet également d’améliorer les avis clients et la réputation du logement sur Airbnb et Booking.",
  },

  {
    question: "Comment est géré le ménage du logement ?",
    answer:
      "Le ménage est une étape essentielle dans l’expérience voyageurs et dans la réussite d’une location courte durée.\n\nAprès chaque réservation, un nettoyage complet du logement est réalisé : sols, cuisine, salle de bain, chambres, surfaces et contrôle général du bien.\n\nNous assurons également :\n\n• le changement des draps et serviettes,\n• le contrôle qualité avant chaque arrivée,\n• la vérification des équipements,\n• le réapprovisionnement des consommables si nécessaire.\n\nNotre objectif est de garantir un logement impeccable afin d’obtenir de meilleurs avis voyageurs et de préserver l’image haut de gamme du bien.",
  },

  {
    question: "Mon logement reste-t-il sécurisé ?",
    answer:
      "Oui. La sécurité du logement fait partie de nos priorités.\n\nNous mettons en place plusieurs dispositifs afin de sécuriser les accès et assurer un suivi rigoureux du bien :\n\n• entrée autonome sécurisée,\n• codes d’accès temporaires,\n• changement régulier des codes,\n• contrôles après chaque séjour,\n• vérifications régulières du logement.\n\nEn complément des protections proposées par Airbnb via AirCover, nous pouvons également mettre en place une assurance complémentaire spécialisée dans la location courte durée afin de renforcer la protection du bien dans certaines situations spécifiques.",
  },

  {
    question: "Puis-je continuer à utiliser mon logement personnellement ?",
    answer:
      "Bien sûr. Vous restez entièrement libre d’utiliser votre logement quand vous le souhaitez.\n\nVous pouvez bloquer certaines dates pour un usage personnel, familial ou professionnel. Notre équipe adapte ensuite automatiquement les disponibilités sur Airbnb et Booking afin d’éviter toute réservation pendant ces périodes.\n\nNotre rôle est de simplifier la gestion de votre bien sans jamais vous retirer le contrôle de votre logement.",
  },

  {
    question: "Quels sont vos tarifs et comment êtes-vous rémunérés ?",
    answer:
      "Nos tarifs dépendent principalement du type de logement, de sa localisation et des services souhaités.\n\nDans la majorité des cas, AMAFA Conciergerie fonctionne avec une commission sur les revenus générés par les réservations. Ce modèle nous permet d’avoir un objectif commun avec les propriétaires : maximiser les performances du logement.\n\nNous privilégions la transparence totale :\n\n• aucun frais caché,\n• suivi clair des revenus,\n• visibilité complète sur les dépenses,\n• reporting détaillé.\n\nChaque projet étant différent, nous proposons également des solutions adaptées selon les besoins du propriétaire.",
  },

  {
    question: "Pourquoi faire appel à une conciergerie professionnelle ?",
    answer:
      "La gestion d’une location courte durée demande du temps, de l’organisation et une forte réactivité.\n\nEntre la gestion des annonces, les échanges voyageurs, le ménage, les arrivées tardives, les problèmes techniques ou encore l’optimisation des prix, il devient rapidement difficile de tout gérer efficacement seul.\n\nFaire appel à AMAFA Conciergerie permet de :\n\n• gagner du temps,\n• améliorer l’expérience voyageurs,\n• augmenter la visibilité du logement,\n• optimiser les revenus,\n• réduire les contraintes du quotidien,\n• et professionnaliser complètement la gestion du bien.\n\nNotre objectif est de transformer votre logement en une location performante, rentable et parfaitement suivie.",
  },

  {
    question: "Puis-je suivre les performances de mon logement ?",
    answer:
      "Oui. Nous mettons à disposition un suivi clair et transparent de l’activité de votre logement.\n\nVous pouvez suivre :\n\n• les réservations,\n• les revenus générés,\n• les périodes occupées,\n• les dépenses liées au logement,\n• les interventions réalisées,\n• ainsi que les performances générales de votre activité.\n\nNotre objectif est de vous offrir une vision simple, organisée et professionnelle afin que vous gardiez toujours un œil sur votre bien, même à distance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-10">

      <div className="text-center mb-16">
        <div className="animated-line mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold">
          Questions fréquentes
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 cursor-pointer bg-[#F5F3EF]"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >

            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.question}</h3>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}