import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import BlogPreview from "../components/BlogPreview";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="relative h-[65vh]">
        <img
          src="/images/chantier-reception.jpg"
          alt="AMAFA Conciergerie"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[4px] text-sm text-[#F4C542] font-semibold mb-4 block">
              AMAFA Conciergerie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Une tranquillité d'esprit pensée
              <br />
              pour votre bien au Sénégal
            </h1>
            <p className="max-w-2xl mx-auto text-white/85 text-lg leading-relaxed">
              Que votre logement génère des revenus en location courte durée
              ou que votre maison se construise pendant votre absence, nous
              veillons sur votre bien comme si c'était le nôtre.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION 1 - QUI SOMMES-NOUS */}
      <div className="py-20 px-6 md:px-10 bg-[#F5F3EF]">
        <div className="grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">

          <img
            src="/images/annonce.jpg"
            alt="Équipe AMAFA"
            className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
          />

          <div>
            <div className="w-16 h-[3px] bg-[#F4C542] rounded-full mb-6"></div>

            <span className="uppercase tracking-[3px] text-xs text-[#C8A84E] font-semibold">
              Qui sommes-nous
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[#1A1A1A] leading-tight">
              Deux métiers, une même exigence
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                AMAFA Conciergerie est née d'un constat simple : posséder un
                bien au Sénégal quand on vit loin est une source constante
                d'incertitude. Un appartement loué sur Airbnb qu'on ne peut
                pas surveiller au quotidien. Un chantier financé depuis
                l'étranger dont on ne sait jamais vraiment où il en est.
              </p>
              <p>
                Nous accompagnons les propriétaires de logements en location
                courte durée à Dakar, et la diaspora sénégalaise qui construit
                ou possède un bien au pays. Deux situations différentes, un
                même besoin : pouvoir faire confiance à quelqu'un de présent
                sur le terrain.
              </p>
              <p>
                Pour les uns, nous gérons l'intégralité de l'activité Airbnb
                et Booking : annonces, ménage, check-in, maintenance et
                reporting. Pour les autres, nous sommes un relais de
                vérification : nous contrôlons sur place que les envois
                d'argent se transforment bien en matériaux et en travaux réels.
              </p>
              <p>
                Dans les deux cas, notre rôle reste le même : vous libérer
                d'une charge que la distance rend impossible à porter seul.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2 - NOTRE VISION */}
      <div className="py-20 px-6 md:px-10 bg-white">
        <div className="grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">

          <div className="order-2 md:order-1">
            <div className="w-16 h-[3px] bg-[#F4C542] rounded-full mb-6"></div>

            <span className="uppercase tracking-[3px] text-xs text-[#C8A84E] font-semibold">
              Notre vision
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[#1A1A1A] leading-tight">
              Remplacer les promesses par des preuves
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                Nous croyons que chaque bien immobilier possède un potentiel
                inexploité, qu'il s'agisse d'un appartement qui pourrait
                générer davantage de revenus ou d'un chantier qui mérite un
                suivi rigoureux plutôt que des messages rassurants sans preuve.
              </p>
              <p>
                Notre mission est de révéler ce potentiel grâce à une
                stratégie optimisée et des outils performants pour les
                logements, et grâce à un protocole de contrôle transparent et
                régulier pour les chantiers : photos horodatées, vidéos,
                vérification des matériaux, rapport hebdomadaire.
              </p>
              <p>
                Nous ne faisons pas que gérer des logements : nous développons
                leur performance. Nous ne faisons pas que surveiller des
                chantiers : nous redonnons à ceux qui construisent depuis
                l'étranger la certitude que chaque euro envoyé travaille
                réellement pour eux.
              </p>
              <p>
                C'est cette double exigence, appliquée à deux réalités bien
                différentes, qui définit la manière dont nous travaillons
                chaque jour.
              </p>
            </div>
          </div>

          <img
            src="/images/chantier-envois.jpg"
            alt="Notre vision AMAFA"
            className="rounded-2xl shadow-lg w-full h-[420px] object-cover order-1 md:order-2"
          />

        </div>
      </div>

      {/* SECTION 3 - POURQUOI NOUS CHOISIR */}
      <div className="py-20 px-6 md:px-10 bg-[#F5F3EF] text-center">
        <div className="w-16 h-[3px] bg-[#F4C542] rounded-full mx-auto mb-6"></div>

        <span className="uppercase tracking-[3px] text-xs text-[#C8A84E] font-semibold">
          Pourquoi nous choisir
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-[#1A1A1A]">
          Ce qui ne change jamais, quel que soit votre besoin
        </h2>
        <p className="text-gray-500 mb-14 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Que vous soyez propriétaire bailleur ou membre de la diaspora qui
          construit au pays, ces engagements restent les mêmes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg mb-3 text-[#1F3D37]">
              Performance & rigueur
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Optimisation continue des revenus pour les logements, contrôle
              rigoureux et documenté pour les chantiers. Dans les deux cas,
              nous ne laissons rien au hasard.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg mb-3 text-[#1F3D37]">
              Sérénité & transparence
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Vous ne gérez rien au quotidien et vous recevez toujours des
              preuves concrètes, jamais de simples assurances verbales.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg mb-3 text-[#1F3D37]">
              Présence locale
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Une équipe réellement présente à Dakar, capable d'intervenir
              rapidement sur un logement comme sur un chantier.
            </p>
          </div>
        </div>

        {/* DOUBLE BLOC SERVICES */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-left shadow-md border border-transparent hover:border-[#F4C542]/50 transition duration-300">
            <p className="text-[10px] uppercase tracking-[2px] text-[#C8A84E] font-bold mb-2">
              Location courte durée
            </p>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
              Gestion Airbnb & Booking
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Annonces, ménage professionnel, check-in autonome, maintenance,
              assurance et reporting mensuel. Vous encaissez, nous gérons tout.
            </p>
            <a
              href="/services"
              className="text-[#1F3D37] font-semibold text-sm hover:opacity-70 transition"
            >
              Découvrir nos services →
            </a>
          </div>

          <div className="bg-[#1F3D37] rounded-2xl p-8 text-left shadow-md border border-transparent hover:border-[#F4C542]/50 transition duration-300">
            <p className="text-[10px] uppercase tracking-[2px] text-[#F4C542] font-bold mb-2">
              Diaspora · Sénégal
            </p>
            <h3 className="text-xl font-bold text-white mb-3">
              Suivi & contrôle de chantier
            </h3>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Reporting hebdomadaire, contrôle des envois d'argent, vérification
              des livraisons. Transport toujours inclus à Dakar.
            </p>
            <a
              href="/chantier"
              className="text-[#F4C542] font-semibold text-sm hover:opacity-80 transition"
            >
              Découvrir le suivi de chantier →
            </a>
          </div>
        </div>

      </div>

      {/* BLOG */}
      <BlogPreview />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </>
  );
}