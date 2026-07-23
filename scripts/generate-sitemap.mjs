import fs from "fs";
import path from "path";

const DOMAIN = "https://amafa-conciergerie.com";

const pages = [
  {
    url: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    url: "/services",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    url: "/chantier",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    url: "/estimation",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    url: "/blog",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    url: "/about",
    priority: "0.7",
    changefreq: "yearly",
  },
  {
    url: "/contact",
    priority: "0.8",
    changefreq: "yearly",
  },
  {
    url: "/join",
    priority: "0.6",
    changefreq: "yearly",
  },
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${pages
  .map(
    (page) => `
<url>
  <loc>${DOMAIN}${page.url}</loc>
  <lastmod>${today}</lastmod>
  <changefreq>${page.changefreq}</changefreq>
  <priority>${page.priority}</priority>
</url>`
  )
  .join("")}

</urlset>
`;

const output = path.join("public", "sitemap.xml");

fs.writeFileSync(output, xml);

console.log(" sitemap.xml généré !");