// Enhanced structured data for SEO and AEO optimization

export function generateAdvisorListSchema(advisors: any[], city: string, advisorType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${advisorType} in ${city}`,
    "description": `Find qualified ${advisorType.toLowerCase()} in ${city}. Compare ratings, reviews, and expertise.`,
    "numberOfItems": advisors.length,
    "itemListElement": advisors.map((advisor, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": ["LocalBusiness", "FinancialService"],
        "@id": `https://findanadvisor.online/advisor/${advisor.id}`,
        "name": advisor.title || advisor.name,
        "description": advisor.description,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": advisor.address,
          "addressLocality": city,
          "addressCountry": "GB"
        },
        "telephone": advisor.phone,
        "email": advisor.email,
        "url": `https://findanadvisor.online/advisor/${advisor.id}`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": advisor.rating,
          "reviewCount": advisor.reviews,
          "bestRating": 5,
          "worstRating": 1
        },
        "image": advisor.image || "https://findanadvisor.online/default-advisor-image.jpg",
        "priceRange": "$$",
        "serviceType": advisorType,
        "areaServed": {
          "@type": "City",
          "name": city
        },
        "hasCredential": advisor.qualifications?.map((qual: string) => ({
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": qual
        })) || [],
        "knowsAbout": advisor.specialties || [],
        "foundingDate": advisor.established ? advisor.established.toString() : undefined
      }
    }))
  };
}

export function generateLocalBusinessSchema(city: any) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Financial Advisors in ${city.name}`,
    "description": `Find qualified financial advisors, mortgage specialists, and wealth managers in ${city.name}, ${city.county}.`,
    "url": `https://findanadvisor.online/locations/${city.slug}`,
    "mainEntity": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": city.county
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Financial Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Financial Planning",
              "serviceType": "Financial Advisory"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mortgage Advice",
              "serviceType": "Mortgage Advisory"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pension Planning",
              "serviceType": "Pension Advisory"
            }
          }
        ]
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://findanadvisor.online"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://findanadvisor.online/locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": city.name,
          "item": `https://findanadvisor.online/locations/${city.slug}`
        }
      ]
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateBlogPostSchema(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `https://findanadvisor.online/blog-images/${post.slug}.jpg`,
    "author": {
      "@type": "Person",
      "name": post.author.split(',')[0],
      "jobTitle": post.author.includes('CFP') ? 'Certified Financial Planner' : 'Financial Advisor',
      "knowsAbout": [post.category, 'Financial Planning', 'UK Finance']
    },
    "publisher": {
      "@type": "Organization",
      "name": "FindAnAdvisor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://findanadvisor.online/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://findanadvisor.online/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": [post.category, 'financial advice', 'UK finance', 'financial planning'],
    "about": {
      "@type": "Thing",
      "name": post.category
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "UK residents seeking financial advice"
    },
    "inLanguage": "en-GB",
    "isAccessibleForFree": true
  };
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateHowToSchema(title: string, steps: Array<{name: string, text: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": `Step-by-step guide: ${title}`,
    "image": "https://findanadvisor.online/how-to-guide.jpg",
    "totalTime": "PT30M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Financial documents"
      },
      {
        "@type": "HowToSupply",
        "name": "Income statements"
      }
    ],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": `#step-${index + 1}`
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