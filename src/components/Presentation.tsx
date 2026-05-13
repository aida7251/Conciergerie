  import { Link } from "react-router-dom";
export default function Presentation() {

  return (
    <section className="w-full bg-[#F5F3EF] py-20 md:py-28 px-6 md:px-10 overflow-hidden">

      <div className="max-w-7xl mx-auto space-y-28">

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* TEXTE */}
          <div className="group">

            <div className="w-20 h-[3px] bg-[#F4C542] mb-6 rounded-full"></div>

            <span className="uppercase tracking-[4px] text-sm text-[#C8A84E] font-semibold">
              AMAFA Conciergerie
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 leading-tight">
              Une gestion premium de votre location courte durée
            </h2>

            <p className="text-[#444] mt-8 leading-relaxed text-base md:text-lg">
              AMAFA Conciergerie accompagne les propriétaires dans la gestion
              complète et haut de gamme de leurs biens en location courte durée.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Présents à
              <span className="font-semibold text-[#1A1A1A]">
                {" "}Lorient, Lyon et Dakar
              </span>,
              nous prenons en charge chaque étape :
              création d’annonces Airbnb & Booking, optimisation des revenus,
              ménage professionnel, check-in autonome, maintenance et assistance voyageurs.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Notre objectif est simple :
              vous permettre de rentabiliser votre logement
              tout en vous libérant entièrement des contraintes du quotidien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

             <Link
    to="/about"
    className="bg-[#F4C542] text-[#1A1A1A] px-7 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300 font-semibold inline-block text-center"
  >
    À propos
  </Link>

  <Link
    to="/estimation"
    className="border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 rounded-2xl hover:bg-[#1A1A1A] hover:text-white transition duration-300 inline-block text-center"
  >
    Estimer mes revenus
  </Link>

            </div>

          </div>

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F4C542]/20 blur-3xl rounded-full opacity-70"></div>

            <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="AMAFA Conciergerie"
                className="w-full h-[350px] md:h-[500px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
                <p className="text-white text-sm uppercase tracking-[3px]">
                  Gestion Premium
                </p>

                <h3 className="text-white text-2xl font-bold mt-1">
                  Airbnb • Booking
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* MAP */}
          <div className="relative group">

            <div className="absolute -inset-4 bg-[#1F3D37]/10 blur-3xl rounded-full opacity-70"></div>

            <div className="relative overflow-hidden rounded-[30px] shadow-2xl border border-gray-200">

              <iframe
                src="https://www.google.com/maps?q=Lorient,France&output=embed"
                className="w-full h-[350px] md:h-[500px] border-0"
                loading="lazy"
              ></iframe>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>

            </div>
          </div>

          {/* TEXTE */}
          <div>

            <div className="w-20 h-[3px] bg-[#F4C542] mb-6 rounded-full"></div>

            <span className="uppercase tracking-[4px] text-sm text-[#C8A84E] font-semibold">
              Présence locale
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 leading-tight">
              Une présence locale, un accompagnement humain
            </h2>

            <p className="text-[#444] mt-8 leading-relaxed text-base md:text-lg">
              Grâce à notre présence à Lorient, Lyon et Dakar,
              nous proposons un service réactif, humain et personnalisé.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Notre connaissance du terrain nous permet d’optimiser la visibilité
              de votre logement, d’améliorer l’expérience voyageurs
              et d’assurer un suivi rigoureux de votre bien.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Chaque propriétaire bénéficie d’un accompagnement transparent,
              structuré et pensé pour maximiser la rentabilité du logement
              sur le long terme.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="text-3xl font-bold text-[#F4C542]">
                  24/7
                </h3>

                <p className="text-[#444] mt-2 text-sm">
                  Assistance voyageurs
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="text-3xl font-bold text-[#F4C542]">
                  Premium
                </h3>

                <p className="text-[#444] mt-2 text-sm">
                  Gestion haut de gamme
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative group">

            <div className="absolute -inset-4 bg-[#F4C542]/20 blur-3xl rounded-full opacity-70"></div>

            <div className="relative overflow-hidden rounded-[30px] shadow-2xl">

              <img
                src="/images/luxe.jpg"
                alt="Appartement premium"
                className="w-full h-[350px] md:h-[500px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            </div>
          </div>

          {/* TEXTE */}
          <div>

            <div className="w-20 h-[3px] bg-[#F4C542] mb-6 rounded-full"></div>

            <span className="uppercase tracking-[4px] text-sm text-[#C8A84E] font-semibold">
              Expérience Voyageurs
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 leading-tight">
              Une expérience pensée pour obtenir des avis 5 étoiles
            </h2>

            <p className="text-[#444] mt-8 leading-relaxed text-base md:text-lg">
              Aujourd’hui, la qualité de l’expérience voyageurs
              joue un rôle essentiel dans la rentabilité d’un logement Airbnb.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Chez AMAFA Conciergerie,
              chaque séjour est préparé avec exigence :
              propreté irréprochable,
              check-in fluide,
              assistance réactive
              et suivi qualité après chaque réservation.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Notre approche premium permet d’améliorer les avis clients,
              d’augmenter la visibilité des annonces
              et de fidéliser davantage de voyageurs.
            </p>

            <button className="mt-10 bg-[#1A1A1A] text-white px-7 py-4 rounded-2xl hover:bg-black transition duration-300 shadow-lg">
              Découvrir nos services premium
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}