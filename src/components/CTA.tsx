import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#10231F] py-28 px-6 md:px-10">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F4C542]/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F4C542]/10 rounded-full blur-3xl"></div>

      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >

          <div className="bg-[#F4C542] text-[#10231F] font-bold px-6 py-3 rounded-full uppercase tracking-wider text-sm shadow-xl">
            Conciergerie Airbnb Premium
          </div>

        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-5xl mx-auto"
        >

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">

            Transformez votre logement en
            <span className="text-[#F4C542]"> source de revenus rentable</span>

          </h2>

          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-14">
            Nous prenons en charge la gestion complète de votre location courte durée :
            optimisation Airbnb, gestion voyageurs, ménage professionnel,
            maintenance et suivi du logement.
            <br className="hidden md:block" />
            Vous profitez des revenus, nous gérons le reste.
          </p>

        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 shadow-xl">

            <div className="text-5xl mb-5">💰</div>

            <h3 className="text-white text-2xl font-bold mb-4">
              Revenus optimisés
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Tarification intelligente, optimisation des annonces Airbnb
              et visibilité renforcée pour maximiser vos réservations.
            </p>

          </div>

       <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 shadow-xl">

  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#F4C542]/10 border border-[#F4C542]/20 flex items-center justify-center">
    <div className="w-3 h-3 rounded-full bg-[#F4C542]"></div>
  </div>

  <h3 className="text-white text-2xl font-bold mb-4">
    Gestion complète & premium
  </h3>

  <p className="text-gray-300 leading-relaxed">
    AMAFA Conciergerie prend en charge l’intégralité
    de la gestion de votre logement :
    accueil voyageurs, ménage professionnel,
    maintenance, assistance et suivi qualité.
  </p>

</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 shadow-xl">

  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#F4C542]/10 border border-[#F4C542]/20 flex items-center justify-center">
    <div className="w-3 h-3 rounded-full bg-[#F4C542]"></div>
  </div>

  <h3 className="text-white text-2xl font-bold mb-4">
    Visibilité optimisée
  </h3>

  <p className="text-gray-300 leading-relaxed">
    Votre annonce est optimisée pour Airbnb,
    Booking.com et les principales plateformes
    afin d’augmenter votre visibilité,
    vos réservations et votre rentabilité.
  </p>

</div>

        </motion.div>

        {/* CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[35px] p-10 md:p-14 shadow-2xl text-center max-w-5xl mx-auto"
        >

          <h3 className="text-3xl md:text-5xl font-black text-[#10231F] mb-6 leading-tight">
            Estimez gratuitement le potentiel
            de votre logement
          </h3>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Découvrez combien votre bien peut générer en location courte durée
            grâce à notre expertise en gestion Airbnb et optimisation locative.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-5 justify-center">

            <button
              onClick={() => navigate("/estimation")}
              className="bg-[#10231F] hover:bg-[#18352E] text-white px-10 py-5 rounded-2xl text-lg font-bold transition duration-300 hover:scale-105 shadow-xl"
            >
              Estimer mes revenus
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-[#10231F] text-[#10231F] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#10231F] hover:text-white transition duration-300"
            >
              Parler à un conseiller
            </button>

          </div>

          {/* TRUST */}
          <div className="mt-10 text-gray-500 text-sm md:text-base leading-relaxed">

             Accompagnement personnalisé <br />
            Réponse rapide de notre équipe <br />
             Sans engagement

          </div>

        </motion.div>

      </div>

    </section>
  );
}