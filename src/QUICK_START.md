# Quick Start Guide - GitHub Image System

## 🚀 5-Minute Setup

### Step 1: Upload Images to GitHub (2 min)

```bash
# Clone your repository
git clone https://github.com/mtmakina0/parcalamasite.git
cd parcalamasite

# Create folder structure
mkdir -p public/logo
mkdir -p public/certificates
mkdir -p "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-60"

# Copy your images (example)
cp ~/images/logo.png public/logo/mt-logo.png
cp ~/images/certs/*.png public/certificates/
cp ~/images/tsh60/*.png "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-60/"

# Push to GitHub
git add public/
git commit -m "Add product images"
git push origin main
```

### Step 2: Deploy to Vercel (2 min)

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel

# Follow prompts and deploy
```

### Step 3: Verify (1 min)

1. Open your deployed site
2. Check console (F12) for debug logs:
   ```
   🖼️ Image paths for TSH-60 : {...}
   📍 Main image URL: https://raw.githubusercontent.com/...
   ```
3. Verify images appear correctly

**Done!** 🎉

---

## 📁 Required Folder Structure

```
your-repo/
└── public/
    ├── logo/
    │   └── mt-logo.png
    ├── certificates/
    │   └── cert1.png → cert8.png
    └── TEK ŞAFTLI PARÇALAMA MAKİNESİ/
        └── TSH-60/
            ├── 1.png  ← Main image
            ├── 2.png  ← Detail 1
            ├── 3.png  ← Detail 2
            └── 4.png  ← Detail 3
```

**Important:** 
- Folder names MUST match exactly (case-sensitive)
- File names MUST be `1.png`, `2.png`, `3.png`, `4.png` (lowercase)

---

## 🎨 Using Images in Your Code

### Logo
```typescript
import { Logo } from './Logo';

<Logo className="h-12 w-auto" />
```

### Product Images
```typescript
import { getModelImages, getFallbackImage } from '../utils/imageConfig';

const images = getModelImages('single-shaft', 'TSH-60');
const fallback = getFallbackImage('single-shaft');

<ImageWithFallback
  src={images.main}
  fallbackSrc={fallback}
  alt="Product"
/>
```

### Certificates
```typescript
import { CERTIFICATE_IMAGES } from '../utils/certificatesConfig';

<ImageWithFallback
  src={CERTIFICATE_IMAGES.cert1}
  alt="Certificate"
/>
```

---

## 🐛 Troubleshooting

### Images not loading?

**Quick Fix 1:** Check GitHub folder names
```bash
# List folders in GitHub
ls -la public/
# Should see: TEK ŞAFTLI PARÇALAMA MAKİNESİ
```

**Quick Fix 2:** Test URL directly
```bash
# Copy this URL format and test in browser:
https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/logo/mt-logo.png

# If 404, check:
# - Repository is public
# - File exists in correct folder
# - Spelling matches exactly
```

**Quick Fix 3:** Clear cache
```javascript
// In browser console:
location.reload(true);
```

### Debug in Browser Console
```javascript
// Check all image paths
window.checkImages();

// Or manually test:
fetch('https://raw.githubusercontent.com/.../1.png')
  .then(r => console.log('Status:', r.status))
  .catch(e => console.error('Error:', e));
```

---

## ✅ Checklist

Before deploying:
- [ ] Images uploaded to GitHub `public/` folder
- [ ] Folder names match exactly (Turkish characters)
- [ ] File names are `1.png`, `2.png`, etc. (lowercase)
- [ ] Repository is public (or using access tokens)
- [ ] Tested image URLs in browser
- [ ] Committed and pushed to main branch

After deploying:
- [ ] Site loads without errors
- [ ] Logo appears in header/footer
- [ ] Product images load on detail pages
- [ ] Certificates display correctly
- [ ] Browser console shows no 404 errors

---

## 🎯 Common Patterns

### Adding a New Model

1. **Create folder:**
```bash
mkdir -p "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-200"
```

2. **Add images:**
```bash
cp ~/images/*.png "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-200/"
# Rename to 1.png, 2.png, 3.png, 4.png
```

3. **Update code:**
```typescript
// In ProductDetailPage.tsx
const availableModels: { [key: string]: string[] } = {
  'single-shaft': ['TSH-60', 'TSH-80', ..., 'TSH-200'], // Add here
};
```

4. **Push and deploy:**
```bash
git add public/
git commit -m "Add TSH-200 model"
git push
```

### Changing an Image

1. **Replace file in GitHub:**
```bash
cp ~/new-image.png "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-60/1.png"
git add "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/TSH-60/1.png"
git commit -m "Update TSH-60 main image"
git push
```

2. **Wait ~1 minute for GitHub CDN**

3. **Hard refresh browser:** `Ctrl+Shift+R` (or `Cmd+Shift+R`)

**No code changes needed!** ✨

---

## 📚 Full Documentation

- **Complete Guide:** `/utils/README.md`
- **Deployment:** `/DEPLOYMENT.md`
- **Migration Summary:** `/IMAGE_SYSTEM_SUMMARY.md`
- **Changelog:** `/CHANGELOG.md`

---

## 💡 Pro Tips

### Tip 1: Optimize Images First
```bash
# Compress PNGs before uploading
pngquant --quality=65-80 *.png
```

### Tip 2: Use Consistent Dimensions
- Logo: 400x150px
- Certificates: 800x1200px
- Product Images: 1920x1080px

### Tip 3: Browser Console Helper
```javascript
// Paste in console for instant validation
window.checkImages();
```

### Tip 4: Batch Upload
```bash
# Upload all models at once
for model in TSH-60 TSH-80 TSH-100; do
  mkdir -p "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/$model"
  cp ~/images/$model/*.png "public/TEK ŞAFTLI PARÇALAMA MAKİNESİ/$model/"
done
```

---

## 🆘 Need Help?

1. **Check documentation** (most issues covered there)
2. **Run diagnostic:** `window.checkImages()` in console
3. **Test URLs directly** in browser
4. **Check GitHub repo** for file existence
5. **Contact support:** developer@mtmakina.com

---

## 🎉 You're All Set!

The image system is now running on GitHub-hosted static images with automatic fallbacks. No more manual asset management!

**Happy coding! 🚀**

---

_Last updated: November 3, 2025_
