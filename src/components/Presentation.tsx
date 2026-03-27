export default function Presentation() {
  return (
    <section className="w-full bg-[#F5F3EF] py-24 px-10 space-y-32">

      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTE */}
        <div className="group animate-fadeIn">

          <div className="animated-line mb-4"></div>

          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Qui sommes-nous ?
          </h2>

          <p className="text-[#333] mb-6 leading-relaxed">
            ALB Conciergerie accompagne les propriétaires dans la gestion complète de leur location courte durée à Lorient, Lyon et leurs environs.
            <br /><br />
            De la mise en ligne de votre annonce à l’accueil des voyageurs, nous prenons en charge chaque étape pour garantir une expérience fluide et des revenus optimisés.
          </p>

          <button className="bg-[#F4C542] text-[#1A1A1A] px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
            En savoir plus
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group transform transition duration-500 hover:scale-105 hover:-translate-y-2">
          <img 
            src="/images/about.jpg" 
            alt="conciergerie"
            className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

      </div>

      {/* SECTION 2 MAP */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* MAP */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105 hover:-translate-y-2">
          <iframe
            src="https://www.google.com/maps?q=Lorient,France&output=embed"
            className="w-full h-[320px] border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* TEXTE */}
        <div className="group">

          <div className="animated-line mb-4"></div>

          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Présents à Lorient & Lyon
          </h2>

          <p className="text-[#333] leading-relaxed">
            Nous intervenons localement pour offrir un service de proximité, réactif et personnalisé.
            <br /><br />
            Grâce à notre connaissance du terrain, nous optimisons la visibilité de votre bien et garantissons une expérience voyageurs de qualité.
          </p>
        </div>

      </div>

      {/* SECTION 3 */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group transform transition duration-500 hover:scale-105 hover:-translate-y-2">
          <img 
            src="/images/appartement.jpg" 
            alt="appartement"
            className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* TEXTE */}
        <div className="group">

          <div className="animated-line mb-4"></div>

          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Une gestion simple et efficace
          </h2>

          <p className="text-[#333] leading-relaxed">
            Nous simplifions la gestion de votre bien grâce à une organisation claire et des outils performants.
            <br /><br />
            Vous suivez vos performances en toute transparence pendant que nous gérons le reste.
          </p>
        </div>

      </div>

      {/* SECTION 4 */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTE */}
        <div className="group">

          <div className="animated-line mb-4"></div>

          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Une expérience 5 étoiles
          </h2>

          <p className="text-[#333] mb-6 leading-relaxed">
            Notre priorité est la satisfaction des voyageurs.
            <br /><br />
            Chaque séjour est soigneusement préparé pour garantir confort, propreté et qualité de service.
          </p>

          <button className="bg-[#F4C542] text-[#1A1A1A] px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
            Découvrir nos services
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group transform transition duration-500 hover:scale-105 hover:-translate-y-2">
          <img 
            src="/images/luxe.jpg" 
            alt="service luxe"
            className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

      </div>

    </section>
  );
}