import { useState } from "react";

const cityRates: any = {
  paris: 0.75,
  lyon: 0.65,
  lorient: 0.55,
  default: 0.6,
};

export default function EstimationPage() {
  const [form, setForm] = useState({
    city: "",
    type: "",
    price: "",
    nights: 30,
  });

  const [result, setResult] = useState<any>(null);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const price = Number(form.price);
    const nights = Number(form.nights);

    const cityKey = form.city.toLowerCase();
    const rate = cityRates[cityKey] || cityRates.default;

    const occupiedNights = nights * rate;

    const bruto = price * occupiedNights;
    const net = bruto * 0.85;

    setResult({
      bruto,
      net,
      occupiedNights,
      rate,
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] flex items-center justify-center p-10">

      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Estimez vos revenus locatifs
        </h1>

        {/* FORM */}
        <div className="space-y-4">

          <input
            name="city"
            placeholder="Ville (ex: Lyon)"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <select
            name="type"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          >
            <option>Type de bien</option>
            <option>Studio</option>
            <option>Appartement</option>
            <option>Maison</option>
          </select>

          <input
            name="price"
            placeholder="Prix par nuit (€)"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <button
            onClick={calculate}
            className="w-full bg-[#F4C542] py-3 rounded-lg font-semibold"
          >
            Calculer mon estimation
          </button>

        </div>

        {/* RESULT */}
        {result && (
          <div className="mt-8 space-y-4">

            <div className="bg-[#F5F3EF] p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">
                Taux d’occupation estimé
              </p>
              <p className="text-xl font-bold">
                {(result.rate * 100).toFixed(0)} %
              </p>
            </div>

            <div className="bg-[#F5F3EF] p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">
                Nuits occupées / mois
              </p>
              <p className="text-xl font-bold">
                {result.occupiedNights.toFixed(0)} nuits
              </p>
            </div>

            <div className="bg-[#F5F3EF] p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">
                Revenus bruts
              </p>
              <p className="text-2xl font-bold">
                {result.bruto.toFixed(0)} €
              </p>
            </div>

            <div className="bg-[#1F3D37] text-white p-6 rounded-lg text-center">
              <p className="text-sm">
                Revenus estimés (net)
              </p>
              <p className="text-3xl font-bold">
                {result.net.toFixed(0)} € / mois
              </p>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}