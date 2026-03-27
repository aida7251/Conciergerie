import { useState } from "react";

const faqs = [
  {
    question: "Combien puis-je gagner avec mon bien ?",
    answer: "Cela dépend de votre logement, mais nous optimisons vos revenus grâce à une tarification dynamique et une gestion professionnelle.",
  },
  {
    question: "Comment fonctionne votre service ?",
    answer: "Nous gérons tout : annonces, voyageurs, ménage, maintenance et suivi.",
  },
  {
    question: "Dois-je m’occuper des voyageurs ?",
    answer: "Non, nous nous occupons de tout pour vous, 24h/24.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nous prenons une commission sur les revenus générés, sans frais cachés.",
  },
  {
    question: "Mon logement est-il assuré ?",
    answer: "Oui, via Airbnb et notre propre couverture complémentaire.",
  },
  {
    question: "Puis-je garder la main sur mon bien ?",
    answer: "Oui, vous avez accès à un suivi complet et pouvez bloquer vos dates.",
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