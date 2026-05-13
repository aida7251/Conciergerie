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
      <div className="relative h-[60vh]">

        <img
          src="/images/about-hero.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Une conciergerie pensée pour vous
            </h1>
            <p className="max-w-2xl">
              Nous transformons votre bien en une source de revenus optimisée,
              sans contrainte pour vous.
            </p>
          </motion.div>
        </div>

      </div>

      {/* SECTION 1 */}
      <div className="py-20 px-6 md:px-10 bg-[#F5F3EF]">

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          <img
            src="/images/team.jpg"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Qui sommes-nous ?
            </h2>

            <p className="text-gray-600 leading-relaxed">
              ALB Conciergerie accompagne les propriétaires dans la gestion
              de leurs locations courte durée à Lorient et Lyon.
              <br /><br />
              Notre objectif est simple : vous permettre de maximiser vos revenus
              tout en vous libérant totalement des contraintes.
              <br /><br />
              Grâce à une gestion complète et professionnelle, nous transformons
              votre bien en une véritable opportunité rentable.
            </p>
          </div>

        </div>

      </div>

      {/* SECTION 2 */}
      <div className="py-20 px-6 md:px-10 bg-white">

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Notre vision
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Nous croyons que chaque bien immobilier possède un potentiel
              inexploité.
              <br /><br />
              Notre mission est de le révéler grâce à une stratégie optimisée,
              des outils performants et une expérience client irréprochable.
              <br /><br />
              Nous ne faisons pas que gérer des logements : nous développons
              leur performance.
            </p>
          </div>

          <img
            src="/images/vision.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>

      </div>

      {/* SECTION 3 */}
      <div className="py-20 px-6 md:px-10 bg-[#F5F3EF] text-center">

        <h2 className="text-3xl font-bold mb-10">
          Pourquoi nous choisir ?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Performance</h3>
            <p className="text-gray-600 text-sm">
              Optimisation continue pour maximiser vos revenus.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Sérénité</h3>
            <p className="text-gray-600 text-sm">
              Nous gérons tout, vous ne vous occupez de rien.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Expérience</h3>
            <p className="text-gray-600 text-sm">
              Des voyageurs satisfaits = meilleurs avis.
            </p>
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