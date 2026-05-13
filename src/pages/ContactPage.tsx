import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="relative h-[50vh]">

        <img
          src="/images/contact-hero.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold">
            Contactez-nous
          </h1>
        </div>

      </div>

      {/* INFOS CONTACT */}
      <div className="bg-[#F5F3EF] py-16 px-6 md:px-10">

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="font-bold mb-2">Téléphone</h3>
            <p className="text-gray-600">06 00 00 00 00</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600">contact@alb.fr</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Localisation</h3>
            <p className="text-gray-600">Lorient & Lyon</p>
          </div>

        </div>

      </div>

      {/* FORMULAIRE AVEC IMAGE FOND */}
      <div className="relative py-24">

        {/* IMAGE BACKGROUND */}
        <img
          src="/images/contact-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* FORM */}
        <div className="relative max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-white">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Prendre rendez-vous
          </motion.h2>

          <div className="space-y-4">

            <input
              placeholder="Nom"
              className="w-full p-3 rounded bg-white/20 placeholder-white outline-none"
            />

            <input
              placeholder="Email"
              className="w-full p-3 rounded bg-white/20 placeholder-white outline-none"
            />

            <input
              placeholder="Téléphone"
              className="w-full p-3 rounded bg-white/20 placeholder-white outline-none"
            />

            <textarea
              placeholder="Votre message"
              className="w-full p-3 rounded bg-white/20 placeholder-white outline-none"
            />

            <button className="w-full bg-[#F4C542] text-black py-3 rounded-xl font-semibold hover:scale-105 transition">
              Envoyer ma demande
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}