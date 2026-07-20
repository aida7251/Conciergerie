import { motion } from "framer-motion";

export default function HeroServices() {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">

      {/* IMAGE AVEC ZOOM */}
      <motion.img
        src="/images/appartement.jpg"
        alt="Conciergerie Airbnb"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY DEGRADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex flex-col justify-center items-center text-center text-white px-6">

        {/* TITRE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Nos services premium
        </motion.h1>

        {/* TEXTE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Une gestion complète pour maximiser vos revenus et offrir une expérience irréprochable à vos voyageurs.
        </motion.p>

        {/* TRAIT JAUNE ANIMÉ */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[4px] bg-[#F4C542] mt-6"
        />
        <motion.button
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-8 bg-[#F4C542] text-black px-6 py-3 rounded-xl hover:scale-105 transition"
>
  Estimer mes revenus
</motion.button>

      </div>

    </div>
  );
}