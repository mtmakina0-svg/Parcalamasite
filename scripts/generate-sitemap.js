import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/urunler', changefreq: 'monthly', priority: 0.8 },
  { url: '/kurumsal', changefreq: 'monthly', priority: 0.7 },
  { url: '/iletisim', changefreq: 'monthly', priority: 0.6 },
];

const stream = new SitemapStream({ hostname: 'https://www.parcalamamakinesi.com' });
streamToPromise(stream);
links.forEach(link => stream.write(link));
stream.end();

stream.pipe(createWriteStream('./public/sitemap.xml'));
