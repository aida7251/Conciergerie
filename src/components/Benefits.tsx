import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const benefits = [
  {
    value: 30,
    suffix: "%",
    title: "Revenus optimisés",
    text: "Grâce à une stratégie tarifaire intelligente et une visibilité renforcée sur Airbnb & Booking, nous maximisons le potentiel locatif de votre logement.",
  },
  {
    value: 0,
    suffix: "",
    title: "Stress au quotidien",
    text: "AMAFA Conciergerie prend en charge l’ensemble de la gestion : voyageurs, ménage, maintenance, assistance et suivi du logement.",
  },
  {
    value: 5,
    suffix: "★",
    title: "Expérience voyageurs",
    text: "Chaque séjour est soigneusement préparé afin d’offrir une expérience premium et d’obtenir des avis voyageurs de qualité.",
  },
  {
    value: 90,
    suffix: "%",
    title: "Taux d’occupation",
    text: "Nous optimisons votre calendrier et la performance des annonces afin d’améliorer le remplissage du logement toute l’année.",
  },
  {
    value: 100,
    suffix: "%",
    title: "Gestion déléguée",
    text: "Vous gardez les revenus et la propriété du logement pendant que nous gérons l’intégralité des opérations.",
  },
  {
    label: "Premium",
    title: "Accompagnement humain",
    text: "Présents à Lorient, Lyon et Dakar, nous proposons un accompagnement réactif, transparent et personnalisé.",
  },
];

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
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
    <section className="relative bg-[#F5F3EF] py-24 md:py-32 px-6 md:px-10 overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4C542]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#1F3D37]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <div className="w-24 h-[3px] bg-[#F4C542] mx-auto rounded-full mb-6"></div>

          <span className="uppercase tracking-[4px] text-sm text-[#C8A84E] font-semibold">
            Pourquoi AMAFA Conciergerie
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            Une gestion premium pensée
            <br />
            pour la performance
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-[#555] text-base md:text-lg leading-relaxed">
            AMAFA Conciergerie accompagne les propriétaires à
            Lorient, Lyon et Dakar dans la gestion complète
            de leurs locations courte durée avec une approche
            moderne, transparente et haut de gamme.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="
                relative h-full
                bg-white/70
                backdrop-blur-xl
                border border-white
                rounded-[32px]
                p-8 md:p-10
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                overflow-hidden
              ">

                {/* GOLD LIGHT */}
                <div className="
                  absolute -top-20 -right-20
                  w-40 h-40
                  bg-[#F4C542]/10
                  blur-3xl
                  rounded-full
                  opacity-0
                  group-hover:opacity-100
                  transition duration-700
                "></div>

                {/* NUMBER */}
                <div className="
                  w-24 h-24
                  rounded-3xl
                  bg-[#F4C542]
                  text-[#1A1A1A]
                  flex items-center justify-center
                  text-3xl font-bold
                  shadow-lg
                  group-hover:scale-110
                  transition duration-500
                ">

                  {item.value !== undefined ? (
                    <Counter
                      end={item.value}
                      suffix={item.suffix}
                    />
                  ) : (
                    <span className="text-xl">
                      {item.label}
                    </span>
                  )}

                </div>

                {/* CONTENT */}
                <div className="mt-8">

                  <h3 className="text-2xl font-bold text-[#1A1A1A] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[#555] leading-relaxed mt-5 text-base">
                    {item.text}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM BLOCK */}
        <div className="
          mt-20
          bg-[#1A1A1A]
          rounded-[40px]
          p-10 md:p-14
          text-center
          shadow-2xl
        ">

          <span className="uppercase tracking-[4px] text-sm text-[#F4C542] font-semibold">
            AMAFA Conciergerie
          </span>

          <h3 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight">
            Maximisez vos revenus.
            <br />
            Sans contraintes.
          </h3>

          <p className="text-white/70 max-w-3xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
            Confiez votre logement à une équipe spécialisée
            dans la gestion premium Airbnb & Booking.
            Nous nous occupons de tout afin de transformer
            votre bien en une location performante,
            rentable et parfaitement suivie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <a
              href="/services"
              className="
                bg-[#F4C542]
                text-black
                font-semibold
                px-8 py-4
                rounded-2xl
                hover:scale-105
                transition duration-300
              "
            >
              Découvrir nos services
            </a>

            <a
              href="/estimation"
              className="
                border border-white/20
                text-white
                px-8 py-4
                rounded-2xl
                hover:bg-white
                hover:text-black
                transition duration-300
              "
            >
              Estimer mes revenus
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}