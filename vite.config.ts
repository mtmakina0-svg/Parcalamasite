import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import vitePrerender from 'vite-plugin-prerender';
import tailwindcss from '@tailwindcss/vite';

// Check if we're in a CI environment (Vercel, GitHub Actions, etc.)
const isCI = process.env.CI || process.env.VERCEL || process.env.GITHUB_ACTIONS;

// Routes to pre-render for Google indexing
const prerenderRoutes = [
  // Home pages
  '/',
  '/en',
  '/ru',
  '/ar',

  // Turkish routes
  '/tr/kurumsal',
  '/tr/urunler',
  '/tr/teknoloji',
  '/tr/referanslar',
  '/tr/sertifikalar',
  '/tr/iletisim',
  '/tr/e-katalog',
  '/tr/tek-saftli-parcalama-makinesi',
  '/tr/cift-saftli-parcalama-makinesi',
  '/tr/dort-saftli-parcalama-makinesi',
  '/tr/metal-parcalama-makinesi',
  '/tr/mobil-kirici',
  '/tr/palet-parcalama-makinesi',
  '/tr/harddisk-imha-makinesi',
  '/tr/agac-koku-parcalama-makinesi',
  '/tr/agac-parcalama-ogutme-makinesi',
  '/tr/cam-sise-kirma-makinesi',

  // English routes
  '/en/about',
  '/en/products',
  '/en/technology',
  '/en/references',
  '/en/certificates',
  '/en/contact',
  '/en/e-catalog',
  '/en/single-shaft-shredder',
  '/en/dual-shaft-shredder',
  '/en/quad-shaft-shredder',
  '/en/metal-shredder',
  '/en/mobile-shredder',
  '/en/pallet-shredder',
  '/en/harddisk-destroyer',
  '/en/tree-root-shredder',
  '/en/wood-grinder',
  '/en/glass-crusher',

  // Russian routes
  '/ru/o-kompanii',
  '/ru/produkty',
  '/ru/tekhnologiya',
  '/ru/referencii',
  '/ru/sertifikaty',
  '/ru/kontakty',
  '/ru/odnovalnaya-drobilka',
  '/ru/dvukhvalnaya-drobilka',
  '/ru/chetyrekhvalnaya-drobilka',
  '/ru/drobilka-metalla',
  '/ru/mobilnaya-drobilka',
];

// Build plugins array - exclude prerender in CI environments (Vercel doesn't have Chrome for Puppeteer)
const prerenderPlugin = !isCI ? vitePrerender({
  staticDir: path.join(__dirname, 'build'),
  routes: prerenderRoutes,
}) : null;

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerenderPlugin,
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Only keep aliases for packages that are actually installed
      'class-variance-authority@0.7.1': 'class-variance-authority',
      'lucide-react@0.487.0': 'lucide-react',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - external libraries
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor-react';
            }
            if (id.includes('motion')) {
              return 'vendor-motion';
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet';
            }
          }

          // Large data files - separate chunks
          if (id.includes('blogPosts.ts')) {
            return 'data-blog';
          }
          if (id.includes('seoConfig.ts')) {
            return 'data-seo';
          }
          if (id.includes('descriptions/')) {
            return 'data-descriptions';
          }
          if (id.includes('imageConfig.ts')) {
            return 'data-images';
          }

          // Page components - lazy loadable
          if (id.includes('ProductDetailPage')) {
            return 'page-product-detail';
          }
          if (id.includes('BlogPostPage') || id.includes('BlogPage')) {
            return 'page-blog';
          }
          if (id.includes('WasteDetailPage') || id.includes('WasteCategoriesPage')) {
            return 'page-waste';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});