export function generateAdvisorListSchema(advisors: any[], city: string, advisorType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": advisors.map((advisor, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "LocalBusiness",
        "@id": `https://findanadvisor.online/advisor/${advisor.id}`,
        "name": advisor.title,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city,
          "addressCountry": "GB"
        },
        "telephone": advisor.phone,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": advisor.rating,
          "reviewCount": advisor.reviews
        },
        "image": advisor.image || "https://findanadvisor.online/default-advisor-image.jpg"
      }
    }))
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FindAnAdvisor",
    "url": "https://findanadvisor.online",
    "logo": "https://findanadvisor.online/logo.png",
    "sameAs": [
      "https://twitter.com/findanadvisor",
      "https://facebook.com/findanadvisor",
      "https://linkedin.com/company/findanadvisor"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-123-456-7890",
      "contactType": "customer service",
      "email": "info@findanadvisor.online",
      "availableLanguage": "English"
    }
  };
}