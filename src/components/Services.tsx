import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "annonce",
    title: "Annonces Airbnb & Booking",
    video: "/videos/annonce.mp4",
    description:
      "Création et optimisation complète de vos annonces pour maximiser vos réservations.",
  },
  {
    id: "menage",
    title: "Ménage professionnel",
    video: "/videos/menage.mp4",
    description:
      "Nettoyage complet avec changement de draps et serviettes.",
  },
  {
    id: "photo",
    title: "Shooting photo",
    video: "/videos/photo.mp4",
    description:
      "Photos professionnelles pour valoriser votre bien.",
  },
  {
    id: "assurance",
    title: "Assurance",
    video: "/videos/assurance.mp4",
    description:
      "Gestion de l’assurance Airbnb et couverture complémentaire.",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    video: "/videos/maintenance.mp4",
    description:
      "Intervention rapide en cas de problème.",
  },
  {
    id: "checkin",
    title: "Check-in / Check-out",
    video: "/videos/checkin.mp4",
    description:
      "Accueil des voyageurs et état des lieux complet.",
  },
  {
    id: "control",
    title: "Contrôle hebdomadaire",
    video: "/videos/control.mp4",
    description:
      "Inspection régulière du logement.",
  },
  {
    id: "facturation",
    title: "Facturation",
    video: "/videos/facturation.mp4",
    description:
      "Gestion complète des paiements et factures.",
  },
  {
    id: "admin",
    title: "Démarches administratives",
    video: "/videos/admin.mp4",
    description:
      "Accompagnement pour les équipements et obligations.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="bg-[#1F3D37] py-24 px-6 md:px-10">

      {/* TITRE */}
      <div className="text-center mb-16">
        <div className="animated-line mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold text-white">
          Nos Services
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden cursor-pointer group transition duration-500"
            onClick={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >

            {/* VIDEO */}
            <video
              src={service.video}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

            {/* CONTENU */}
            <div className="absolute bottom-0 p-4 text-white">

              <h3 className="text-lg font-semibold">
                {service.title}
              </h3>

              {activeIndex === index && (
                <div className="mt-2">
                  <p className="text-sm mb-3">
                    {service.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/services#${service.id}`);
                    }}
                    className="bg-[#F4C542] text-black px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                  >
                    Découvrir
                  </button>
                </div>
              )}

            </div>

          </motion.div>
        ))}

      </div>

      {/* BOUTON GLOBAL */}
      <div className="text-center mt-16">
        <button
          onClick={() => navigate("/services")}
          className="bg-[#F4C542] text-black px-6 py-3 rounded-xl hover:scale-105 hover:shadow-lg transition duration-300"
        >
          Découvrir tous nos services
        </button>
      </div>

    </section>
  );
}