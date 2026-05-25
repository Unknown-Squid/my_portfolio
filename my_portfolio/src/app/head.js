import { contact, metaDescription } from '@/constants/resume';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || contact.portfolio || 'https://www.geraldfegalan.online/';

export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": contact.name,
    "url": siteUrl,
    "email": `mailto:${contact.email}`,
    "jobTitle": contact.role,
    "sameAs": [contact.linkedIn]
  };

  return (
    <>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={siteUrl} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#0ea5a4" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
