import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const benefits = [
  {
    value: 30,
    suffix: "%",
    subtitle: "de revenus",
    text: "Optimisation des prix et du taux de réservation",
  },
  {
    value: 0,
    suffix: "",
    label: "0 stress",
    subtitle: "",
    text: "Nous gérons tout à votre place",
  },
  {
    value: 5,
    suffix: "★",
    subtitle: "expérience",
    text: "Satisfaction maximale des voyageurs",
  },
  {
    value: 90,
    suffix: "%",
    subtitle: "occupation",
    text: "Remplissage optimal toute l’année",
  },
  {
    value: 100,
    suffix: "%",
    subtitle: "temps libre",
    text: "Vous ne gérez plus rien",
  },
  {
    label: "Sécurité",
    subtitle: "",
    text: "Protection et suivi de votre bien",
  },
];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
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
  return (
    <section className="bg-[#F5F3EF] py-24 px-10">

      {/* TITRE */}
      <div className="text-center mb-16">
        <div className="animated-line mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold text-[#1A1A1A]">
          Pourquoi nous faire confiance ?
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-12">

        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
          >

            {/* CERCLE */}
            <div className="w-32 h-32 mx-auto rounded-full bg-[#F4C542] flex items-center justify-center text-2xl font-bold text-[#1A1A1A] 
            shadow-lg transition duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3">

              {item.value !== undefined ? (
                <Counter end={item.value} suffix={item.suffix} />
              ) : (
                <span>{item.label}</span>
              )}

            </div>

            {/* TEXTE */}
            <h3 className="mt-6 text-lg font-semibold text-[#1A1A1A]">
              {item.subtitle || item.label}
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              {item.text}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}