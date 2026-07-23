import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  image = "https://amafa-conciergerie.com/images/logo-amafa.png",
}: SEOProps) {
  const url = canonical || "https://amafa-conciergerie.com";

  return (
    <Helmet>
      {/* Titre */}
      <title>{title}</title>

      {/* Description */}
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}