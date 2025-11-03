# Image Configuration System

This directory contains the centralized image configuration for the MT Makina website, using GitHub-hosted static assets.

## Overview

All images are hosted on GitHub at:
```
https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/
```

This approach provides:
- ✅ No build-time asset bundling required
- ✅ Seamless Vercel deployment without manual asset uploads
- ✅ Easy image updates via GitHub commits
- ✅ CDN-like delivery through GitHub's infrastructure
- ✅ Fallback support for missing images

## Configuration Files

### `imageConfig.ts`
Manages product machine images organized by type and model.

**Structure:**
```
/public/
  ├── TEK ŞAFTLI PARÇALAMA MAKİNESİ/
  │   ├── TSH-60/
  │   │   ├── 1.png
  │   │   ├── 2.png
  │   │   ├── 3.png
  │   │   └── 4.png
  │   ├── TSH-80/
  │   └── ...
  ├── ÇİFT ŞAFTLI PARÇALAMA MAKİNESİ/
  │   ├── CS-20/
  │   ├── CS-40/
  │   └── ...
  └── DÖRT ŞAFTLI PARÇALAMA MAKİNESİ/
      └── ...
```

**Usage:**
```typescript
import { getModelImages, getFallbackImage } from '../utils/imageConfig';

// Get all images for a specific model
const images = getModelImages('single-shaft', 'TSH-60');
// Returns: { main, detail1, detail2, detail3, detail4 }

// Get fallback image for a product type
const fallback = getFallbackImage('single-shaft');
```

### `certificatesConfig.ts`
Manages certificate images.

**Structure:**
```
/public/
  └── certificates/
      ├── cert1.png
      ├── cert2.png
      ├── cert3.png
      ├── cert4.png
      ├── cert5.png
      ├── cert6.png
      ├── cert7.png
      └── cert8.png
```

**Usage:**
```typescript
import { CERTIFICATE_IMAGES, getCertificateUrl } from '../utils/certificatesConfig';

// Access specific certificate
const cert1 = CERTIFICATE_IMAGES.cert1;

// Or by index
const cert3 = getCertificateUrl(3);
```

## Product Type Mapping

The system maps product types to Turkish folder names:

| Product Type | Folder Name (Turkish) |
|--------------|----------------------|
| `single-shaft` | TEK ŞAFTLI PARÇALAMA MAKİNESİ |
| `dual-shaft` | ÇİFT ŞAFTLI PARÇALAMA MAKİNESİ |
| `quad-shaft` | DÖRT ŞAFTLI PARÇALAMA MAKİNESİ |
| `metal` | METAL PARÇALAMA MAKİNESİ |
| `granulator` | GRANÜLATÖR |
| `baler` | BALYA PRESİ |
| `conveyor` | KONVEYÖR SİSTEMİ |
| `separator` | AYIRICI SİSTEM |

## Logo Component

The `Logo.tsx` component provides a reusable logo with fallback support.

**Location:** `/public/logo/mt-logo.png`

**Usage:**
```typescript
import { Logo } from './Logo';

<Logo 
  className="h-12 w-auto"
  alt="MT Makina Logo"
/>
```

## Adding New Images

### 1. Upload to GitHub
Push images to the appropriate folder in the GitHub repository:
```bash
git add public/TEK\ ŞAFTLI\ PARÇALAMA\ MAKİNESİ/TSH-200/
git commit -m "Add TSH-200 model images"
git push origin main
```

### 2. Update Model Configuration
If adding a new model, update `ProductDetailPage.tsx`:
```typescript
const availableModels: { [key: string]: string[] } = {
  'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-120', 'TSH-150', 'TSH-200'], // Add here
  // ...
};
```

### 3. Images Automatically Available
The system will automatically generate correct URLs for the new model.

## Image Naming Convention

All product images must follow this naming:
- `1.png` - Main/Hero image
- `2.png` - Detail image 1
- `3.png` - Detail image 2
- `4.png` - Detail image 3
- `5.png` - Detail image 4 (optional)

## URL Encoding

The system automatically handles Turkish characters and spaces:
- `TEK ŞAFTLI PARÇALAMA MAKİNESİ` → `TEK%20%C5%9EAFTLI%20PAR%C3%87ALAMA%20MAK%C4%B0NES%C4%B0`
- `TSH-60` → `TSH-60`
- `1.png` → `1.png`

## Fallback System

### ImageWithFallback Component
Located at `/components/figma/ImageWithFallback.tsx`, this component:
1. Attempts to load the primary image from GitHub
2. Falls back to Unsplash placeholder if GitHub image fails
3. Shows a default SVG placeholder if both fail

**Example:**
```typescript
<ImageWithFallback
  src="https://raw.githubusercontent.com/.../1.png"
  fallbackSrc="https://images.unsplash.com/..."
  alt="Product image"
  className="w-full h-full"
/>
```

## Performance Optimization

### Preloading
Use the `preloadImage` and `preloadImages` functions for critical images:

```typescript
import { preloadImages, getModelImages } from '../utils/imageConfig';

// Preload all images for a model
useEffect(() => {
  const images = getModelImages('single-shaft', 'TSH-60');
  preloadImages(Object.values(images));
}, []);
```

### Caching
- GitHub's CDN provides automatic caching
- Browser cache headers are respected
- Images load progressively

## Debugging

Enable debug mode by checking console logs:
```typescript
console.log('🖼️ Image paths:', images);
console.log('📍 Main image URL:', images.main);
console.log('🔄 Fallback URL:', fallbackImage);
```

## Migration from figma:asset

Old format:
```typescript
import image from 'figma:asset/hash.png';
```

New format:
```typescript
import { getModelImages } from '../utils/imageConfig';
const images = getModelImages('single-shaft', 'TSH-60');
```

## Troubleshooting

### Images not loading?
1. Check GitHub repository has the images in correct folders
2. Verify folder names match exactly (case-sensitive)
3. Check file names are `1.png`, `2.png`, etc. (lowercase)
4. Open browser DevTools > Network tab to see failed requests
5. Try accessing the GitHub raw URL directly in browser

### Wrong images showing?
1. Clear browser cache
2. Check `getProductFolderName()` returns correct folder name
3. Verify model name matches folder name exactly

### Encoding issues?
The system automatically handles Turkish characters and spaces. If issues persist:
1. Check GitHub folder names have no trailing spaces
2. Verify file names have no special characters

## Future Enhancements

Potential improvements:
- [ ] Image optimization service (WebP conversion)
- [ ] Lazy loading with IntersectionObserver
- [ ] Progressive image loading (blur placeholder)
- [ ] Image size variants (thumbnail, medium, large)
- [ ] Admin panel for image management
- [ ] Automated image compression on upload
- [ ] CDN integration (Cloudflare, Cloudinary)
