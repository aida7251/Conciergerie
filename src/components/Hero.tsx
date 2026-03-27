export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* CONTENU */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Votre conciergerie à Lorient & Lyon
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Gestion complète de votre location courte durée. 
          Maximisez vos revenus, on s’occupe de tout.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#F4C542] text-[#1A1A1A] px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            Estimer mes revenus
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300">
            Nous contacter
          </button>
        </div>

      </div>
    </section>
  );
}