const StructuredData = () => {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://amafa-conciergerie.com/#organization",

      name: "AMAFA Conciergerie",

      url: "https://amafa-conciergerie.com",

      logo: "https://amafa-conciergerie.com/logo.png",

      email: "amafaconciergerie@gmail.com",

      telephone: "+33609886595",

      description:
        "AMAFA Conciergerie accompagne les propriétaires dans la gestion complète de leurs locations Airbnb et propose également un service de suivi de chantier au Sénégal.",

      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33609886595",
        email: "amafaconciergerie@gmail.com",
        contactType: "customer service",
        areaServed: "SN",
        availableLanguage: ["fr", "en"],
      },

      sameAs: [
        // "https://www.instagram.com/...",
        // "https://www.facebook.com/...",
        // "https://www.linkedin.com/company/...",
        // "https://www.tiktok.com/@..."
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",

      "@id": "https://amafa-conciergerie.com/#business",

      name: "AMAFA Conciergerie",

      image: "https://amafa-conciergerie.com/logo.png",

      url: "https://amafa-conciergerie.com",

      telephone: "+33609886595",

      email: "amafaconciergerie@gmail.com",

      description:
        "Entreprise spécialisée dans la gestion de locations Airbnb et le suivi de chantier au Sénégal.",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },

      areaServed: [
        {
          "@type": "City",
          name: "Dakar",
        },
        {
          "@type": "City",
          name: "Ngor",
        },
        {
          "@type": "City",
          name: "Almadies",
        },
        {
          "@type": "City",
          name: "Mamelles",
        },
        {
          "@type": "City",
          name: "Ouakam",
        },
        {
          "@type": "Country",
          name: "Sénégal",
        },
      ],

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],

      availableLanguage: [
        "Français",
        "English",
      ],

      paymentAccepted: [
        "Cash",
        "Credit Card",
        "Bank Transfer",
        "Mobile Money",
      ],

      currenciesAccepted: [
        "XOF",
        "EUR",
      ],

      priceRange: "$$",

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services AMAFA",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conciergerie Airbnb",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Suivi de chantier",
            },
          },
        ],
      },

      knowsAbout: [
        "Airbnb",
        "Booking",
        "Location courte durée",
        "Gestion locative",
        "Check-in",
        "Check-out",
        "Ménage",
        "Photographie immobilière",
        "Suivi de chantier",
        "Investissement immobilier",
      ],

      slogan:
        "Votre partenaire de confiance pour la conciergerie Airbnb et le suivi de chantier au Sénégal.",
    },

    {
      "@context": "https://schema.org",
      "@type": "WebSite",

      "@id": "https://amafa-conciergerie.com/#website",

      url: "https://amafa-conciergerie.com",

      name: "AMAFA Conciergerie",

      inLanguage: "fr",

      publisher: {
        "@id": "https://amafa-conciergerie.com/#organization",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",

      serviceType: "Conciergerie Airbnb",

      provider: {
        "@id": "https://amafa-conciergerie.com/#organization",
      },

      areaServed: {
        "@type": "Country",
        name: "Sénégal",
      },

      description:
        "Gestion complète des locations Airbnb : création d'annonces, optimisation, check-in, check-out, ménage, maintenance, assistance voyageurs et maximisation des revenus.",
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",

      serviceType: "Suivi de chantier",

      provider: {
        "@id": "https://amafa-conciergerie.com/#organization",
      },

      areaServed: {
        "@type": "Country",
        name: "Sénégal",
      },

      description:
        "Suivi de chantier pour la diaspora : visites régulières, photos, vidéos, contrôle de l'avancement des travaux, comptes rendus et accompagnement des propriétaires.",
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "Dans quelles villes intervenez-vous ?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous intervenons principalement à Dakar, Ngor, Almadies, Mamelles, Ouakam et dans les environs.",
          },
        },

        {
          "@type": "Question",
          name: "Quels services propose AMAFA ?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "AMAFA propose un service de conciergerie Airbnb complet ainsi qu'un service de suivi de chantier pour les propriétaires et la diaspora sénégalaise.",
          },
        },

        {
          "@type": "Question",
          name: "Proposez-vous un devis gratuit ?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Nous réalisons gratuitement une étude de votre projet avant toute collaboration.",
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

export default StructuredData;