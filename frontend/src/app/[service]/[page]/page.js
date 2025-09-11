import { SERVICES, CITIES } from "../../../../public/lib/constants";
import { serviceSlug, pageSlug } from "../../../../public/lib/slug";
import ServiceCityContent from "../../components/ServiceCities"; // client component (below)

// Pre-generate all combinations at build time (SSG)
export async function generateStaticParams() {
  const params = [];
  for (const s of SERVICES) {
    for (const c of CITIES) {
      params.push({
        service: serviceSlug(s),
        page: pageSlug(s, c),
      });
    }
  }
  return params;
}

// Optional: metadata for SEO for each generated page
export async function generateMetadata({ params }) {
  const { service, page } = params;
  const citySlug = page.replace(`${service}-agency-`, "");
  const cityName = citySlug.split("-").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ");
  const serviceName = service.split("-").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ");

  return {
    title: `${serviceName} Agency in ${cityName} | Digital Paaji`,
    description: `Top ${serviceName} agency in ${cityName} — tailored services and results-driven marketing.`,
    alternates: { canonical: `https://digitalpaaji.com/${service}/${page}` },
    openGraph: { title: `${serviceName} Agency in ${cityName}`, description: `...`, url: `https://digitalpaaji.com/${service}/${page}` },
  };
}

// Server component: compute readable names and pass to client component
export default function Page({ params }) {
  const { service, page } = params;
  const citySlug = page.replace(`${service}-agency-`, "");

  const toTitle = (slug) =>
    slug.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ");

  const serviceName = service.toLowerCase(); // normalize
  const cityName = citySlug.toLowerCase();   // normalize

  return <ServiceCityContent serviceName={serviceName} cityName={cityName} />;
}

