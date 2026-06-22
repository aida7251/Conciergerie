import { Link } from "react-router-dom";

export default function Presentation() {
  return (
    <section className="w-full bg-[#F5F3EF] py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION 1 — QUI SOMMES-NOUS (les deux univers) */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* TEXTE */}
          <div className="group">
            <div className="w-20 h-[3px] bg-[#F4C542] mb-6 rounded-full"></div>

            <span className="uppercase tracking-[4px] text-sm text-[#C8A84E] font-semibold">
              AMAFA Conciergerie
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 leading-tight">
              Deux services. Une seule mission.
            </h2>

            <p className="text-[#444] mt-8 leading-relaxed text-base md:text-lg">
              AMAFA Conciergerie accompagne les propriétaires dans la gestion
              complète de leurs biens en location courte durée au Sénégal, et
              la diaspora sénégalaise dans le contrôle de leurs chantiers au pays.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Présents à{" "}
              <span className="font-semibold text-[#1A1A1A]">
                Dakar et ses environs
              </span>
              , nous offrons une tranquillité d'esprit totale — que votre bien
              génère des revenus en location courte durée ou se construise
              pendant que vous êtes en France.
            </p>

            {/* Les deux cartes services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-transparent hover:border-[#F4C542]/50 transition duration-300">
                <p className="text-[10px] uppercase tracking-[2px] text-[#C8A84E] font-bold mb-2">
                  Location courte durée
                </p>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 leading-snug">
                  Gestion Airbnb & Booking
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Annonces, ménage, check-in, maintenance — on s'occupe de tout.
                </p>
              </div>

              <div className="bg-[#1F3D37] rounded-2xl p-6 shadow-md border border-transparent hover:border-[#F4C542]/50 transition duration-300">
                <p className="text-[10px] uppercase tracking-[2px] text-[#F4C542] font-bold mb-2">
                  Diaspora · Sénégal
                </p>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  Suivi & contrôle de chantier
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Photos chaque semaine, vérification des envois d'argent.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                to="/services"
                className="bg-[#F4C542] text-[#1A1A1A] px-7 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300 font-semibold inline-block text-center"
              >
                Services Airbnb
              </Link>

              <Link
                to="/chantier"
                className="border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 rounded-2xl hover:bg-[#1A1A1A] hover:text-white transition duration-300 inline-block text-center"
              >
                Suivi de chantier
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
                  Airbnb · Booking · Chantier
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION 2 — PRÉSENCE LOCALE AU SÉNÉGAL */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* MAP */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#1F3D37]/10 blur-3xl rounded-full opacity-70"></div>

            <div className="relative overflow-hidden rounded-[30px] shadow-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Dakar,Senegal&output=embed"
                className="w-full h-[350px] md:h-[500px] border-0"
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 flex gap-3">
                <span className="text-xs font-semibold text-[#1F3D37]">📍 Dakar</span>
                <span className="text-xs font-semibold text-[#C8A84E]">📍 Sénégal</span>
              </div>
            </div>
          </div>

          {/* TEXTE */}
          <div>
            <div className="w-20 h-[3px] bg-[#F4C542] mb-6 rounded-full"></div>

            <span className="uppercase tracking-[4px] text-sm text-[#C8A84E] font-semibold">
              Présence locale
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 leading-tight">
              Un agent sur place à Dakar, où que vous soyez
            </h2>

            <p className="text-[#444] mt-8 leading-relaxed text-base md:text-lg">
              Grâce à notre présence à Dakar, nous proposons un service
              réactif, humain et personnalisé — peu importe où se trouve
              votre logement ou votre chantier au Sénégal.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Pour votre logement en location courte durée, notre connaissance
              du terrain optimise la visibilité de votre annonce et la qualité
              de l'expérience voyageurs.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Pour votre chantier, notre agent visite votre bien chaque semaine
              et vous transmet un rapport complet — vous n'avez jamais à gérer
              le déplacement, le transport est toujours inclus.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="text-3xl font-bold text-[#F4C542]">24/7</h3>
                <p className="text-[#444] mt-2 text-sm">
                  Assistance voyageurs
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="text-3xl font-bold text-[#F4C542]">7j/7</h3>
                <p className="text-[#444] mt-2 text-sm">

                  Suivi chantier Dakar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* SECTION 3 — EXPÉRIENCE / TRANSPARENCE (les deux angles) */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F4C542]/20 blur-3xl rounded-full opacity-70"></div>

            <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
              <img
                src="/images/luxe.jpg"
                alt="Appartement premium et suivi de chantier"
                className="w-full h-[350px] md:h-[500px] object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* TEXTE */}
          <div>
            <div className="w-20 h-[3px] bg-[#F4C542] mb-6 rounded-full"></div>

            <span className="uppercase tracking-[4px] text-sm text-[#C8A84E] font-semibold">
              Notre exigence
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 leading-tight">
              5 étoiles voyageurs.
              <br />
              Transparence totale chantier.
            </h2>

            <p className="text-[#444] mt-8 leading-relaxed text-base md:text-lg">
              <span className="font-semibold text-[#1A1A1A]">Côté Airbnb</span> —
              chaque séjour est préparé avec exigence : propreté irréprochable,
              check-in fluide, assistance réactive et suivi qualité après
              chaque réservation.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              <span className="font-semibold text-[#1A1A1A]">Côté chantier</span> —
              chaque envoi d'argent est vérifié sur place sous 48h. Chaque
              livraison de matériaux est contrôlée. Vous recevez la preuve,
              pas des promesses.
            </p>

            <p className="text-[#444] mt-5 leading-relaxed text-base md:text-lg">
              Notre approche permet d'améliorer les avis voyageurs d'un côté,
              et de sécuriser chaque euro envoyé au Sénégal de l'autre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/services"
                className="bg-[#1A1A1A] text-white px-7 py-4 rounded-2xl hover:bg-black transition duration-300 shadow-lg inline-block text-center"
              >
                Services Airbnb premium
              </Link>
              <Link
                to="/chantier"
                className="border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 rounded-2xl hover:bg-[#1A1A1A] hover:text-white transition duration-300 inline-block text-center"
              >
                Suivi de chantier
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}