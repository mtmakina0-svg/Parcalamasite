# 🚀 Deployment Guide - MT Makina Website

> **Quick Start:** [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) - Vercel'e 3 dakikada deploy et!

## 📋 Table of Contents
1. [Vercel Deployment (Recommended)](#vercel-deployment)
2. [Netlify Deployment](#netlify-deployment)
3. [GitHub Image Repository Setup](#github-image-repository-setup)
4. [SEO Configuration](#seo-configuration)
5. [Environment Variables](#environment-variables)

---

## 🎯 Vercel Deployment (Önerilen)

**En hızlı ve kolay deployment yöntemi!**

### Quick Deploy
```bash
# 1. Git repo'ya push et
git add .
git commit -m "Production ready"
git push origin main

# 2. Vercel'e import et
# → vercel.com → Import Project → Repo seç

# 3. Otomatik deploy! ✅
```

✅ **SPA Routing otomatik çalışır** (`vercel.json` hazır)  
✅ **HTTPS otomatik aktif**  
✅ **Global CDN**  
✅ **Her push'ta otomatik deploy**

📖 **Detaylı rehber:** [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

---

## 🔷 Netlify Deployment

### Quick Deploy
```bash
# 1. Git repo'ya push et
git add .
git commit -m "Production ready"
git push origin main

# 2. Netlify'a import et
# → app.netlify.com → Add new site → Import from Git

# 3. Build settings:
Build command: npm run build
Publish directory: dist
```

✅ **SPA Routing otomatik çalışır** (`netlify.toml` + `_redirects` hazır)  
✅ **HTTPS otomatik aktif**  
✅ **Continuous deployment**

---

# Deployment Guide - MT Makina Website

## GitHub Image Repository Setup

### 1. Repository Structure
Ensure your GitHub repository (`mtmakina0/parcalamasite`) has this folder structure:

```
parcalamasite/
├── public/
│   ├── logo/
│   │   └── mt-logo.png
│   ├── certificates/
│   │   ├── cert1.png
│   │   ├── cert2.png
│   │   ├── cert3.png
│   │   ├── cert4.png
│   │   ├── cert5.png
│   │   ├── cert6.png
│   │   ├── cert7.png
│   │   └── cert8.png
│   ├── TEK ŞAFTLI PARÇALAMA MAKİNESİ/
│   │   ├── TSH-60/
│   │   │   ├── 1.png
│   │   │   ├── 2.png
│   │   │   ├── 3.png
│   │   │   └── 4.png
│   │   ├── TSH-80/
│   │   │   ├── 1.png
│   │   │   ├── 2.png
│   │   │   ├── 3.png
│   │   │   └── 4.png
│   │   ├── TSH-100/
│   │   ├── TSH-120/
│   │   └── TSH-150/
│   ├── ÇİFT ŞAFTLI PARÇALAMA MAKİNESİ/
│   │   ├── CS-20/
│   │   ├── CS-40/
│   │   ├── CS-60/
│   │   ├── CS-80/
│   │   ├── CS-100/
│   │   ├── CS-120/
│   │   ├── CS-150/
│   │   ├── CS-180/
│   │   ��── CS-200/
│   └── DÖRT ŞAFTLI PARÇALAMA MAKİNESİ/
│       ├── QS-80/
│       ├── QS-100/
│       ├── QS-120/
│       └── QS-150/
```

### 2. Uploading Images to GitHub

#### Option A: Via GitHub Web Interface
1. Navigate to your repository: `https://github.com/mtmakina0/parcalamasite`
2. Click "Add file" → "Upload files"
3. Drag and drop your folders
4. Commit changes

#### Option B: Via Git Command Line
```bash
# Clone the repository
git clone https://github.com/mtmakina0/parcalamasite.git
cd parcalamasite

# Create public folder structure
mkdir -p public/logo
mkdir -p public/certificates
mkdir -p "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-60"
# ... create other folders

# Copy your images
cp /path/to/your/images/*.png "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-60/"

# Add, commit, and push
git add public/
git commit -m "Add product images"
git push origin main
```

### 3. Verify Image URLs

Test that images are accessible via raw GitHub URLs:
```
https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/logo/mt-logo.png
https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/TEK%20%C5%9EAFTLI%20PAR%C3%87ALAMA%20MAK%C4%B0NES%C4%B0/TSH-60/1.png
```

## Vercel Deployment

### 1. Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### 2. Environment Variables (if needed)
No environment variables are required for static images hosted on GitHub.

### 3. Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `mtmakina.com`)
3. Configure DNS records as shown

## Testing After Deployment

### 1. Check Homepage
- [ ] Logo appears in header
- [ ] Hero section logo displays
- [ ] Footer logo shows

### 2. Check Product Pages
Navigate to a product page and verify:
- [ ] Main product image loads
- [ ] Detail images (1-4) load correctly
- [ ] Model selector switches images properly
- [ ] Fallback images appear if GitHub images fail

Example URLs to test:
- `/products/single-shaft/TSH-60`
- `/products/dual-shaft/CS-80`
- `/products/quad-shaft/QS-100`

### 3. Check Certificates Page
- [ ] All 8 certificates display
- [ ] Certificates are clickable/zoomable
- [ ] Captions show correctly

### 4. Browser Console Check
Open DevTools (F12) and check for:
- ✅ No 404 errors for images
- ✅ Debug logs show correct image URLs
- ✅ Fallback images trigger only when needed

Expected console output:
```
🖼️ Image paths for TSH-60 : {main: "...", detail1: "...", ...}
📍 Main image URL: https://raw.githubusercontent.com/...
🔄 Fallback URL: https://images.unsplash.com/...
```

## Troubleshooting

### Images not loading?

**Problem:** 404 errors in console
**Solution:**
1. Verify images exist in GitHub repository
2. Check folder names match exactly (case-sensitive)
3. Ensure file names are lowercase: `1.png`, not `1.PNG`
4. Try accessing the raw GitHub URL directly in browser

**Problem:** Turkish characters in URLs
**Solution:** 
The system automatically encodes Turkish characters. Verify in console that URLs show:
- `%C5%9E` for `Ş`
- `%C4%B0` for `İ`
- `%C3%87` for `Ç`

**Problem:** Fallback images showing instead of real images
**Solution:**
1. Check GitHub repository is public (or adjust raw URL for private repos)
2. Wait a few minutes for GitHub CDN to update
3. Clear browser cache
4. Check image file sizes (GitHub has limits)

### Logo not appearing?

**Problem:** Logo missing in header/footer
**Solution:**
1. Verify `/public/logo/mt-logo.png` exists in GitHub
2. Check Logo component is imported correctly
3. Try the fallback SVG logo (should show "MT" text)

### Performance issues?

**Problem:** Images loading slowly
**Solution:**
1. Optimize image file sizes (use compression tools)
2. Convert to WebP format for better compression
3. Consider using a CDN service (Cloudinary, ImgIX)
4. Enable lazy loading for below-the-fold images

## Image Optimization Tips

### Recommended Image Sizes
- **Logo:** 400x150px, < 50KB
- **Certificates:** 800x1200px, < 200KB each
- **Product main images:** 1920x1080px, < 500KB
- **Product detail images:** 1200x800px, < 300KB

### Compression Tools
- **Online:** [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)
- **CLI:** `imagemagick`, `pngquant`
- **Batch:**
```bash
# Compress all PNGs in a folder
for file in *.png; do
  pngquant --quality=65-80 "$file" --output "${file%.png}-compressed.png"
done
```

### WebP Conversion
```bash
# Convert PNG to WebP
for file in *.png; do
  cwebp -q 80 "$file" -o "${file%.png}.webp"
done
```

Then update `imageConfig.ts` to use `.webp` extensions.

## Monitoring

### Check Image Loading
```javascript
// Add to browser console to monitor all image loads
const images = document.querySelectorAll('img');
images.forEach(img => {
  console.log(img.complete ? '✓' : '✗', img.src);
});
```

### Performance Metrics
Use Lighthouse in Chrome DevTools to check:
- Largest Contentful Paint (LCP) - should be < 2.5s
- Cumulative Layout Shift (CLS) - should be < 0.1
- Total image size - aim for < 1MB per page

## Backup Strategy

### Download all images from GitHub
```bash
# Clone repository with full history
git clone https://github.com/mtmakina0/parcalamasite.git backup-$(date +%Y%m%d)
cd backup-$(date +%Y%m%d)

# Archive public folder
tar -czf mt-makina-images-$(date +%Y%m%d).tar.gz public/
```

### Alternative Hosting Options
If GitHub becomes unavailable, you can quickly switch to:
1. **Cloudinary:** Upload to Cloudinary and update `imageConfig.ts` base URL
2. **Vercel Blob:** Use Vercel's native blob storage
3. **AWS S3:** Host in S3 bucket with CloudFront CDN

## Security Notes

- GitHub raw URLs are public and cached by CDN
- No authentication required for public repositories
- Images cannot be hotlink-protected via GitHub
- Consider watermarking proprietary images
- Use HTTPS (enforced by GitHub automatically)

## Contact

For deployment issues:
- **Developer:** [Your Name]
- **Repository:** https://github.com/mtmakina0/parcalamasite
- **Vercel Project:** [Your Vercel project URL]
- **Support:** support@mtmakina.com

---

**Last Updated:** November 3, 2025
**Version:** 1.0.0
