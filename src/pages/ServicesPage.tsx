import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const services = [
  { id: "annonce", title: "Annonces Airbnb & Booking" },
  { id: "menage", title: "Ménage professionnel" },
  { id: "photo", title: "Shooting photo" },
  { id: "assurance", title: "Assurance" },
  { id: "maintenance", title: "Maintenance" },
  { id: "checkin", title: "Check-in / Check-out" },
  { id: "control", title: "Contrôle hebdomadaire" },
  { id: "facturation", title: "Facturation" },
  { id: "admin", title: "Démarches administratives" },
];

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="p-10 space-y-20">

      <h1 className="text-4xl font-bold text-center mb-10">
        Nos services
      </h1>

      {services.map((service) => (
        <div
          key={service.id}
          id={service.id}
          className="p-10 bg-[#F5F3EF] rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">
            {service.title}
          </h2>

          <p>
            Description détaillée du service...
          </p>
        </div>
      ))}

    </div>
  );
}