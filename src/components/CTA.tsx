import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#1F3D37] py-24 px-10 text-white text-center">

      <h2 className="text-4xl font-bold mb-6">
        Passez à une gestion 100% sereine
      </h2>

      <p className="max-w-2xl mx-auto mb-10 text-lg">
        Confiez-nous votre bien et augmentez vos revenus tout en gagnant du temps.
      </p>

      {/* ARGUMENTS */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">

        <div>💰 Revenus optimisés automatiquement</div>
        <div>🧘‍♂️ Aucune gestion au quotidien</div>
        <div>📈 Visibilité maximale sur Airbnb & Booking</div>

      </div>

      {/* BOUTON */}
      <button
        onClick={() => navigate("/estimation")}
        className="bg-[#F4C542] text-black px-8 py-4 rounded-xl text-lg hover:scale-105 transition"
      >
        Estimer mes revenus
      </button>

    </section>
  );
}