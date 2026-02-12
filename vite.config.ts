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
  '/tr/e-katalog/tek-saftli',
  '/tr/e-katalog/cift-saftli',
  '/tr/e-katalog/dort-saftli',
  '/tr/e-katalog/metal',
  '/tr/e-katalog/mobil',
  '/tr/e-katalog/palet',
  '/tr/e-katalog/harddisk',
  '/tr/e-katalog/agac-koku',
  '/tr/e-katalog/odun',
  '/tr/e-katalog/cam',
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
  '/en/e-catalog/single-shaft',
  '/en/e-catalog/dual-shaft',
  '/en/e-catalog/quad-shaft',
  '/en/e-catalog/metal',
  '/en/e-catalog/mobile',
  '/en/e-catalog/pallet',
  '/en/e-catalog/harddisk',
  '/en/e-catalog/tree-root',
  '/en/e-catalog/wood',
  '/en/e-catalog/glass',
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
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-helmet-async'],
          'vendor-motion': ['motion'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-ui': ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          'data-blog': ['./src/data/blogPosts'],
          'data-catalog': ['./src/data/catalogData'],
          'seo-config': ['./src/utils/seoConfig'],
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