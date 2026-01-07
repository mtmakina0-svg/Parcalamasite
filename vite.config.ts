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
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'next-themes@0.4.6': 'next-themes',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',
      '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
      '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
      '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
      '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
      '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
      '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
      '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
      '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
      '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
      '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
      '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
      '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
      '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
      '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
      '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    minify: 'esbuild',
    cssCodeSplit: true,
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React - loaded first
          if (id.includes('react-dom') || id.includes('react/')) {
            return 'vendor-react';
          }
          // Animation library - used across pages
          if (id.includes('motion')) {
            return 'vendor-motion';
          }
          // Icons - commonly used
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
          // Map library - only for references page
          if (id.includes('react-simple-maps') || id.includes('d3-') || id.includes('topojson')) {
            return 'vendor-maps';
          }
          // Radix UI components - loaded on demand
          if (id.includes('@radix-ui')) {
            return 'vendor-radix';
          }
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor-common';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});