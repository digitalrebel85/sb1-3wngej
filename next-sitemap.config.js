/** @type {import('next-sitemap').IConfig} */
const { advisorTypes } = require('./data/advisor-types');
const { cities } = require('./data/cities');

module.exports = {
  siteUrl: 'https://findanadvisor.online',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/admin']
      }
    ]
  },
  exclude: ['/api/*', '/admin/*', '/404', '/search'],
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const additionalPaths = [];

    // Add advisor type pages
    for (const advisorType of advisorTypes) {
      additionalPaths.push({
        loc: `/${advisorType.slug}`,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString()
      });

      // Add city pages for each advisor type
      for (const city of cities) {
        additionalPaths.push({
          loc: `/${advisorType.slug}/${city.slug}`,
          changefreq: 'daily',
          priority: 0.8,
          lastmod: new Date().toISOString()
        });
      }
    }

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