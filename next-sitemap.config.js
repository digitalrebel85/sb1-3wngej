/** @type {import('next-sitemap').IConfig} */
// Inline data to avoid build-time import issues
const advisorTypes = [
  { slug: 'financial-advisors' },
  { slug: 'mortgage-advisors' },
  { slug: 'pension-advisors' },
  { slug: 'investment-advisors' },
  { slug: 'wealth-managers' }
];

const cities = [
  { slug: 'london' },
  { slug: 'manchester' },
  { slug: 'birmingham' },
  { slug: 'leeds' },
  { slug: 'glasgow' },
  { slug: 'liverpool' },
  { slug: 'bristol' },
  { slug: 'sheffield' },
  { slug: 'edinburgh' },
  { slug: 'cardiff' }
];

// Blog posts for sitemap
const blogPosts = [
  'essential-financial-planning-tips-2024',
  'first-time-buyer-mortgage-guide',
  'pension-auto-enrolment-guide',
  'isa-allowances-2024-guide',
  'protection-insurance-guide',
  'buy-to-let-mortgages-2024'
];

// Guides for sitemap
const guides = [
  'complete-financial-planning',
  'first-time-buyer-journey',
  'pension-maximization',
  'investment-portfolio-building',
  'protection-insurance-guide',
  'isa-optimization',
  'debt-management',
  'retirement-planning'
];

// Calculators for sitemap
const calculators = [
  'mortgage-affordability',
  'mortgage-repayment',
  'pension-contribution',
  'investment-growth',
  'loan-comparison',
  'savings-goal',
  'stamp-duty',
  'life-insurance',
  'isa-allowance'
];

module.exports = {
  siteUrl: 'https://findanadvisor.online',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*', '/_next/*', '/search?*']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/*', '/admin/*']
      }
    ],
    additionalSitemaps: [
      'https://findanadvisor.online/sitemap-blog.xml',
      'https://findanadvisor.online/sitemap-locations.xml'
    ]
  },
  exclude: ['/api/*', '/admin/*', '/404', '/500', '/search'],
  generateIndexSitemap: true,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const additionalPaths = [];

    // Add main content pages
    const mainPages = [
      { loc: '/blog', priority: 0.9, changefreq: 'daily' },
      { loc: '/faq', priority: 0.8, changefreq: 'weekly' },
      { loc: '/guides', priority: 0.8, changefreq: 'weekly' },
      { loc: '/calculators', priority: 0.8, changefreq: 'weekly' },
      { loc: '/locations', priority: 0.7, changefreq: 'weekly' },
      { loc: '/advisor-types', priority: 0.7, changefreq: 'weekly' }
    ];

    mainPages.forEach(page => {
      additionalPaths.push({
        loc: page.loc,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString()
      });
    });

    // Add blog posts
    blogPosts.forEach(slug => {
      additionalPaths.push({
        loc: `/blog/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      });
    });

    // Add guides
    guides.forEach(slug => {
      additionalPaths.push({
        loc: `/guides/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      });
    });

    // Add calculators
    calculators.forEach(slug => {
      additionalPaths.push({
        loc: `/calculators/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      });
    });

    // Add city location pages
    cities.forEach(city => {
      additionalPaths.push({
        loc: `/locations/${city.slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      });

      // Add advisor type + city combinations
      advisorTypes.forEach(advisorType => {
        additionalPaths.push({
          loc: `/locations/${city.slug}/${advisorType.slug}`,
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: new Date().toISOString()
        });
      });
    });

    // Add advisor type pages
    advisorTypes.forEach(advisorType => {
      additionalPaths.push({
        loc: `/advisor-types/${advisorType.slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      });
    });

    return additionalPaths;
  },
  transform: async (config, path) => {
    // Custom priority for different types of pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString()
      }
    }

    // Default transformation for other pages
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
  },
}