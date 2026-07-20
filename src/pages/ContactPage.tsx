import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Remplace YOUR_FORM_ID par l'ID Formspree (voir instructions en bas du fichier)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const WHATSAPP_NUMBER = "33609886595"; // 06 09 88 65 95 au format international sans le 0
const CONTACT_EMAIL = "amafaconciergerie@gmail.com";

type Sujet = "" | "airbnb" | "chantier" | "autre";

interface FormState {
  nom: string;
  telephone: string;
  email: string;
  sujet: Sujet;
  message: string;
}

const initialState: FormState = {
  nom: "",
  telephone: "",
  email: "",
  sujet: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // ── VALIDATION ──────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.nom.trim()) e.nom = "Le nom est obligatoire.";
    if (!form.telephone.trim()) {
      e.telephone = "Le téléphone est obligatoire.";
    } else if (!/^[0-9+\s.-]{8,}$/.test(form.telephone.trim())) {
      e.telephone = "Numéro de téléphone invalide.";
    }
    if (!form.email.trim()) {
      e.email = "L'email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Adresse email invalide.";
    }
    if (!form.sujet) e.sujet = "Merci de choisir un sujet.";
    if (!form.message.trim()) {
      e.message = "Le message est obligatoire.";
    } else if (form.message.trim().length < 10) {
      e.message = "Merci de détailler un peu plus votre demande.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  // ── SUBMIT (envoi email via Formspree) ──────────────────────────────────────
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setStatus("sending");

  try {
    await emailjs.send(
  "service_darf2vd",
  "template_o5y4a4e", // ✅Bon Template ID
  {
    nom: form.nom,
    telephone: form.telephone,
    email: form.email,
    sujet: sujetLabel(form.sujet),
    message: form.message,
  },
  "O7BCiWI_xGQTKHZgG"
);
setStatus("sent");
setForm(initialState);

   alert(
  " Message envoyé avec succès."
);
  } catch (error: any) {
  console.log("EMAILJS ERROR", error);

  alert(
    `Status : ${error?.status}
Text : ${error?.text}
Message : ${error?.message}`
  );

  setStatus("error");
}
};

  // ── WHATSAPP (envoi direct, fonctionne toujours, pas de backend requis) ─────
  const sendToWhatsApp = () => {
    if (!validate()) return;

    const text = encodeURIComponent(
      `Bonjour AMAFA Conciergerie,%0A%0A` +
      `Nom : ${form.nom}%0A` +
      `Téléphone : ${form.telephone}%0A` +
      `Email : ${form.email}%0A` +
      `Sujet : ${sujetLabel(form.sujet)}%0A%0A` +
      `Message :%0A${form.message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
   alert(
  "Vous allez être redirigé vers WhatsApp.\n\nCliquez ensuite sur 'Envoyer' dans WhatsApp afin que votre message nous soit transmis."
);
  };

  const sujetLabel = (s: Sujet) => {
    if (s === "airbnb") return "Location courte durée (Airbnb/Booking)";
    if (s === "chantier") return "Suivi de chantier au Sénégal";
    if (s === "autre") return "Autre demande";
    return "";
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="bg-[#1F3D37] py-24 px-6 md:px-10 text-center">
        <span className="uppercase tracking-[4px] text-sm text-[#F4C542] font-semibold">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
          Parlons de votre projet
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Que vous ayez un logement à gérer en location courte durée ou un
          chantier à faire suivre au Sénégal, écrivez-nous. Réponse rapide
          garantie.
        </p>
      </div>

      {/* CONTENU */}
      <div className="bg-[#F5F3EF] py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10">

          {/* COLONNE INFOS */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-7 shadow-md">
              <h3 className="font-bold text-[#1F3D37] mb-1">Email</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#C59B00] font-medium break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-md">
              <h3 className="font-bold text-[#1F3D37] mb-1">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-3">
                Le plus rapide pour une réponse immédiate.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1F3D37] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#254840] transition"
              >
                06 09 88 65 95
              </a>
            </div>

            <div className="bg-[#1F3D37] rounded-2xl p-7 shadow-md">
              <h3 className="font-bold text-white mb-2">Disponibilité</h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Notre équipe est disponible 7j/7 et répond généralement sous
                24h. Pour une urgence chantier, privilégiez WhatsApp.
              </p>
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-[#F4C542]/15 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl text-[#C59B00]">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F3D37] mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto mb-6">
                    Merci pour votre message. Notre équipe AMAFA Conciergerie
                    vous répondra sous 24h. Pour une réponse plus rapide,
                    n'hésitez pas à nous écrire directement sur WhatsApp.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[#1F3D37] font-semibold text-sm hover:opacity-70 transition"
                  >
                    ← Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-1">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Tous les champs sont obligatoires.
                  </p>

                  {/* NOM */}
                  <Field label="Nom complet" error={errors.nom}>
                    <input
                      type="text"
                      value={form.nom}
                      onChange={(e) => handleChange("nom", e.target.value)}
                      placeholder="Votre nom et prénom"
                      className={inputClass(!!errors.nom)}
                    />
                  </Field>

                  {/* TELEPHONE + EMAIL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Téléphone" error={errors.telephone}>
                      <input
                        type="tel"
                        value={form.telephone}
                        onChange={(e) => handleChange("telephone", e.target.value)}
                        placeholder="06 12 34 56 78"
                        className={inputClass(!!errors.telephone)}
                      />
                    </Field>

                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="vous@email.com"
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                  </div>

                  {/* SUJET */}
                  <Field label="Sujet de votre demande" error={errors.sujet}>
                    <select
                      value={form.sujet}
                      onChange={(e) => handleChange("sujet", e.target.value)}
                      className={inputClass(!!errors.sujet)}
                    >
                      <option value="">Choisissez un sujet</option>
                      <option value="airbnb">Location courte durée (Airbnb / Booking)</option>
                      <option value="chantier">Suivi de chantier au Sénégal</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </Field>

                  {/* MESSAGE */}
                  <Field label="Votre message" error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Décrivez votre logement, votre chantier ou votre besoin..."
                      rows={5}
                      className={inputClass(!!errors.message) + " resize-none"}
                    />
                  </Field>

                  {status === "error" && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      Une erreur est survenue lors de l'envoi par email. Vous
                      pouvez réessayer ou nous écrire directement sur WhatsApp
                      ci-dessous.
                    </p>
                  )}

                  {/* BOUTONS */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex-1 bg-[#1F3D37] text-white font-semibold py-3.5 rounded-xl hover:bg-[#254840] transition disabled:opacity-60"
                    >
                      {status === "sending" ? "Envoi en cours..." : "Envoyer par email"}
                    </button>

                    <button
                      type="button"
                      onClick={sendToWhatsApp}
                      className="flex-1 bg-[#F4C542] text-[#1A1A1A] font-semibold py-3.5 rounded-xl hover:scale-[1.02] transition"
                    >
                      Envoyer sur WhatsApp
                    </button>
                  </div>

                  <p className="text-gray-400 text-xs text-center pt-2">
                    Vos données ne sont utilisées que pour vous répondre. Elles
                    ne sont jamais partagées avec des tiers.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

// ── HELPERS ────────────────────────────────────────────────────────────────────
function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-sm transition outline-none ${
    hasError
      ? "border-red-400 focus:border-red-500 bg-red-50"
      : "border-gray-200 focus:border-[#F4C542] bg-[#F9F8F6]"
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

/*
═══════════════════════════════════════════════════════════════════════════
INSTRUCTIONS DE CONFIGURATION (5 minutes, gratuit)
═══════════════════════════════════════════════════════════════════════════

1. EMAIL (Formspree) :
   - Va sur https://formspree.io et crée un compte gratuit avec
     amafaconciergerie@gmail.com
   - Crée un nouveau formulaire ("New Form")
   - Copie l'ID fourni (ex: "abcd1234") et remplace YOUR_FORM_ID
     dans FORMSPREE_ENDPOINT en haut de ce fichier
   - Formspree t'enverra un email de confirmation à valider une fois,
     ensuite chaque message du formulaire arrivera automatiquement
     sur amafaconciergerie@gmail.com
   - Plan gratuit : 50 messages/mois, largement suffisant pour démarrer

2. WHATSAPP :
   - Déjà configuré sur le 06 09 88 65 95
   - Le bouton "Envoyer sur WhatsApp" ouvre une conversation WhatsApp
     pré-remplie avec toutes les infos du formulaire
   - Fonctionne immédiatement, aucune configuration supplémentaire requise
   - L'utilisateur doit cliquer sur "Envoyer" dans WhatsApp pour que
     le message t'arrive réellement (on ne peut pas l'envoyer à sa place
     automatiquement pour des raisons de sécurité du navigateur)

3. CHAMPS OBLIGATOIRES :
   - Nom, téléphone, email, sujet et message sont tous obligatoires
   - Validation en temps réel avec messages d'erreur clairs
   - Le formulaire ne peut pas être envoyé si un champ est invalide

4. MESSAGE DE CONFIRMATION :
   - Après envoi (email ou WhatsApp), un écran de confirmation
     s'affiche automatiquement avec un message de remerciement
═══════════════════════════════════════════════════════════════════════════
*/