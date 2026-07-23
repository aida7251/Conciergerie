import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO/SEO";

// ─── TAUX D'OCCUPATION PAR VILLE (estimations basées sur les données marché) ──
// Sources : moyennes Airbnb Sénégal, zones touristiques vs résidentielles
const cityRates: Record<string, { rate: number; avgPrice: number }> = {
  dakar: { rate: 0.65, avgPrice: 35000 },
  almadies: { rate: 0.72, avgPrice: 45000 },
  ngor: { rate: 0.7, avgPrice: 38000 },
  saly: { rate: 0.75, avgPrice: 40000 },
  "saint-louis": { rate: 0.55, avgPrice: 28000 },
  ziguinchor: { rate: 0.45, avgPrice: 22000 },
  thies: { rate: 0.5, avgPrice: 25000 },
  mbour: { rate: 0.68, avgPrice: 32000 },
  default: { rate: 0.55, avgPrice: 28000 },
};

const villesDisponibles = [
  { value: "dakar", label: "Dakar (centre)" },
  { value: "almadies", label: "Almadies" },
  { value: "ngor", label: "Ngor" },
  { value: "saly", label: "Saly" },
  { value: "mbour", label: "Mbour" },
  { value: "saint-louis", label: "Saint-Louis" },
  { value: "thies", label: "Thiès" },
  { value: "ziguinchor", label: "Ziguinchor" },
];

const COMMISSION = 0.2; // 20%

interface FormState {
  city: string;
  type: string;
  price: string;
}

interface Result {
  bruteMonthly: number;
  netMonthly: number;
  commission: number;
  occupiedNights: number;
  rate: number;
}

export default function EstimationPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({ city: "", type: "", price: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [result, setResult] = useState<Result | null>(null);

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    setResult(null);
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.city) e.city = "Choisissez une ville.";
    if (!form.type) e.type = "Choisissez un type de bien.";
    if (!form.price.trim()) {
      e.price = "Indiquez un prix par nuit.";
    } else if (isNaN(Number(form.price)) || Number(form.price) <= 0) {
      e.price = "Le prix doit être un nombre positif.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const calculate = () => {
    if (!validate()) return;

    const price = Number(form.price);
    const cityData = cityRates[form.city] || cityRates.default;
    const rate = cityData.rate;

    const nightsPerMonth = 30;
    const occupiedNights = nightsPerMonth * rate;
    const bruteMonthly = price * occupiedNights;
    const commission = bruteMonthly * COMMISSION;
    const netMonthly = bruteMonthly - commission;

    setResult({ bruteMonthly, netMonthly, commission, occupiedNights, rate });
  };

  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n);

  const suggestedPrice = form.city
    ? (cityRates[form.city] || cityRates.default).avgPrice
    : null;

  return (
    <>
    <SEO
  title="Estimation gratuite de votre location Airbnb | AMAFA"
  description="Obtenez gratuitement une estimation du potentiel locatif de votre logement au Sénégal et maximisez vos revenus avec AMAFA."
  canonical="https://amafa-conciergerie.com/estimation"
/>
      <Navbar />

      {/* HERO */}
      <div className="bg-[#1F3D37] py-20 px-6 md:px-10 text-center">
        <span className="uppercase tracking-[4px] text-sm text-[#F4C542] font-semibold">
          Estimation gratuite
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
          Estimez vos revenus Airbnb
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Renseignez quelques informations sur votre bien au Sénégal pour
          découvrir son potentiel de revenus en location courte durée.
        </p>
      </div>

      {/* FORMULAIRE + RESULTAT */}
      <div className="bg-[#F5F3EF] py-16 px-6 md:px-10">
        <div className="max-w-2xl mx-auto">

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">

            <h2 className="text-xl font-bold text-[#1A1A1A] mb-1">
              Informations sur votre bien
            </h2>
            <p className="text-gray-500 text-sm mb-7">
              Estimation basée sur les moyennes de marché par zone.
            </p>

            <div className="space-y-5">

              {/* VILLE */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Ville / zone <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className={selectClass(!!errors.city)}
                >
                  <option value="">Choisissez une ville</option>
                  {villesDisponibles.map((v) => (
                    <option key={v.value} value={v.value}>
                      {v.label}
                    </option>
                  ))}
                </select>
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>

              {/* TYPE */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Type de bien <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.type}
                  onChange={(e) => handleChange("type", e.target.value)}
                  className={selectClass(!!errors.type)}
                >
                  <option value="">Choisissez un type</option>
                  <option value="studio">Studio</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="villa">Villa</option>
                </select>
                {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
              </div>

              {/* PRIX */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Prix souhaité par nuit (FCFA) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                  placeholder={suggestedPrice ? `Ex : ${fmt(suggestedPrice)}` : "Ex : 30 000"}
                  className={selectClass(!!errors.price)}
                />
                {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
                {suggestedPrice && !errors.price && (
                  <p className="text-gray-400 text-xs mt-1">
                    Prix moyen constaté dans cette zone : environ {fmt(suggestedPrice)} FCFA/nuit
                  </p>
                )}
              </div>

              <button
                onClick={calculate}
                className="w-full bg-[#F4C542] text-[#1A1A1A] py-3.5 rounded-xl font-semibold hover:scale-[1.02] transition"
              >
                Calculer mon estimation
              </button>
            </div>

          </div>

          {/* RESULTAT */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-8 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl text-center shadow-md">
                    <p className="text-xs text-gray-500 mb-1">
                      Taux d'occupation estimé
                    </p>
                    <p className="text-2xl font-bold text-[#1F3D37]">
                      {(result.rate * 100).toFixed(0)} %
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl text-center shadow-md">
                    <p className="text-xs text-gray-500 mb-1">
                      Nuits occupées / mois
                    </p>
                    <p className="text-2xl font-bold text-[#1F3D37]">
                      {result.occupiedNights.toFixed(0)}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                  <p className="text-sm text-gray-500 mb-1">
                    Revenus bruts mensuels estimés
                  </p>
                  <p className="text-3xl font-bold text-[#1A1A1A]">
                    {fmt(result.bruteMonthly)} FCFA
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Commission AMAFA (20%)</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Prélevée uniquement sur les revenus réellement encaissés
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#C59B00]">
                    - {fmt(result.commission)} FCFA
                  </p>
                </div>

                <div className="bg-[#1F3D37] text-white p-7 rounded-2xl text-center shadow-xl">
                  <p className="text-sm text-white/70 mb-1">
                    Vos revenus nets estimés
                  </p>
                  <p className="text-4xl font-bold text-[#F4C542]">
                    {fmt(result.netMonthly)} FCFA
                  </p>
                  <p className="text-white/50 text-xs mt-1">par mois</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Cette estimation est basée sur des moyennes de marché par
                    zone et ne constitue pas une garantie de revenus. Le taux
                    d'occupation réel dépend de la qualité de l'annonce, de la
                    saisonnalité et de la concurrence locale. Contactez-nous
                    pour une estimation personnalisée et précise de votre bien.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/contact")}
                  className="w-full bg-[#1F3D37] text-white py-3.5 rounded-xl font-semibold hover:bg-[#254840] transition"
                >
                  Obtenir une estimation personnalisée
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      <Footer />
    </>
  );
}

function selectClass(hasError: boolean) {
  return `w-full p-3 rounded-xl border text-sm transition outline-none ${
    hasError
      ? "border-red-400 focus:border-red-500 bg-red-50"
      : "border-gray-200 focus:border-[#F4C542] bg-[#F9F8F6]"
  }`;
}