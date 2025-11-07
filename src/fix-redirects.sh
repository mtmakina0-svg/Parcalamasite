#!/bin/bash

# Automatic _redirects Fix Script
# This script converts _redirects folder to text file

echo "🔧 MT Makina - _redirects Fix Script"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -d "public" ]; then
  echo -e "${RED}❌ Error: public/ directory not found${NC}"
  echo "   Please run this script from the project root"
  exit 1
fi

# Step 1: Remove _redirects folder if it exists
if [ -d "public/_redirects" ]; then
  echo "📁 Removing _redirects folder..."
  rm -rf public/_redirects
  echo -e "${GREEN}✅ _redirects folder removed${NC}"
else
  echo "ℹ️  _redirects folder not found (already removed)"
fi

# Step 2: Check if _redirects.txt exists
if [ -f "public/_redirects.txt" ]; then
  echo ""
  echo "📝 Converting _redirects.txt to _redirects..."
  mv public/_redirects.txt public/_redirects
  echo -e "${GREEN}✅ _redirects file created${NC}"
elif [ -f "public/_redirects" ] && [ ! -d "public/_redirects" ]; then
  echo ""
  echo -e "${GREEN}✅ _redirects file already exists${NC}"
else
  echo ""
  echo "📝 Creating new _redirects file..."
  cat > public/_redirects << 'EOF'
# Netlify Redirects for MT Makina SPA
/sitemap.xml    /sitemap.xml    200!
/robots.txt     /robots.txt     200!
/*              /index.html     200
EOF
  echo -e "${GREEN}✅ _redirects file created${NC}"
fi

# Step 3: Verify file content
echo ""
echo "📋 Verifying _redirects content:"
echo "--------------------------------"
cat public/_redirects
echo "--------------------------------"

# Step 4: Git status
echo ""
echo "📊 Git status:"
git status public/_redirects 2>/dev/null || echo "   (Git not available or not a git repo)"

# Step 5: Next steps
echo ""
echo "===================================="
echo -e "${GREEN}✨ Fix completed successfully!${NC}"
echo "===================================="
echo ""
echo "📌 Next steps:"
echo "   1. Review the changes above"
echo "   2. Commit and push:"
echo "      ${YELLOW}git add public/_redirects${NC}"
echo "      ${YELLOW}git commit -m \"fix: convert _redirects to text file\"${NC}"
echo "      ${YELLOW}git push origin main${NC}"
echo ""
echo "   3. Clear platform cache and redeploy:"
echo "      ${YELLOW}vercel --prod --force${NC}"
echo "      or"
echo "      ${YELLOW}netlify deploy --prod --build${NC}"
echo ""
echo "   4. Test the sitemap:"
echo "      ${YELLOW}curl https://www.parcalamamakinesi.com/sitemap.xml | head -30${NC}"
echo ""
