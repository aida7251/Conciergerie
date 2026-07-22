export default function Hero() {
  return (
<section className="relative w-full h-screen overflow-hidden -mt-[1px]">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover block"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      

      {/* OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* CONTENU */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
  Votre partenaire de confiance à Dakar pour la conciergerie Airbnb et le suivi de chantier
</h1>

<p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8">
  AMAFA prend en charge la gestion de votre location courte durée et assure le suivi de votre chantier au Sénégal. Deux services pensés pour les propriétaires et la diaspora qui souhaitent investir en toute sérénité.
</p>
       

        <div className="flex gap-4">
          <button className="bg-[#F4C542] text-[#1A1A1A] px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            Estimer mes revenus
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300">
            Parler à un conseiller
          </button>
        </div>

      </div>
    </section>
  );
}