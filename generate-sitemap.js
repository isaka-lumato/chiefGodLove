const fs = require('fs');
const path = require('path');

// Define your website URLs
const baseUrl = 'https://chiefgodlove.vip';
const urls = [
  {
    loc: baseUrl,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    loc: `${baseUrl}/#AboutMe`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    loc: `${baseUrl}/#MyPortfolio`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    loc: `${baseUrl}/#articles`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/#seo-content`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/#footer`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.6'
  }
];

// Generate XML sitemap
function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  urls.forEach(url => {
    xml += `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  // Write sitemap to public folder
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log('Sitemap generated successfully at:', sitemapPath);
}

// Run the generator
generateSitemap();