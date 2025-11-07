#!/bin/bash

# Master Deployment Script for Sitemap Fix
# Automates the entire deployment process

set -e  # Exit on error

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║  MT MAKINA - SITEMAP DEPLOYMENT AUTOMATION                    ║"
echo "║  Version 3.0 FINAL                                            ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Step 1: Verify files
echo -e "${BLUE}Step 1/4: Verifying files...${NC}"

if [ ! -f "public/_redirects" ]; then
  echo -e "${RED}❌ Error: public/_redirects not found!${NC}"
  echo "Run: ./fix-redirects.sh first"
  exit 1
fi

if [ ! -f "public/sitemap.xml" ]; then
  echo -e "${RED}❌ Error: public/sitemap.xml not found!${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Files verified${NC}"
echo ""

# Step 2: Git commit & push
echo -e "${BLUE}Step 2/4: Git commit & push...${NC}"

read -p "Continue with git push? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Aborted by user."
  exit 0
fi

git add public/_redirects public/sitemap.xml
git commit -m "fix: sitemap v3.0 final - _redirects corrected" || echo "No changes to commit"
git push origin main

echo -e "${GREEN}✅ Git push complete${NC}"
echo ""

# Step 3: Deploy selection
echo -e "${BLUE}Step 3/4: Deployment...${NC}"
echo "Select your platform:"
echo "  1) Vercel (CLI)"
echo "  2) Netlify (CLI)"
echo "  3) Skip (Manual deploy via dashboard)"

read -p "Choice (1-3): " -n 1 -r
echo ""

case $REPLY in
  1)
    echo "Deploying to Vercel..."
    if ! command -v vercel &> /dev/null; then
      echo -e "${YELLOW}⚠️  Vercel CLI not found. Installing...${NC}"
      npm install -g vercel
    fi
    vercel --prod --force --yes
    echo -e "${GREEN}✅ Vercel deployment initiated${NC}"
    ;;
  2)
    echo "Deploying to Netlify..."
    if ! command -v netlify &> /dev/null; then
      echo -e "${YELLOW}⚠️  Netlify CLI not found. Installing...${NC}"
      npm install -g netlify-cli
    fi
    netlify deploy --prod --build
    echo -e "${GREEN}✅ Netlify deployment initiated${NC}"
    ;;
  3)
    echo -e "${YELLOW}⚠️  Manual deployment selected${NC}"
    echo "Please:"
    echo "  1. Go to your platform dashboard"
    echo "  2. Clear all caches"
    echo "  3. Trigger a new deployment"
    echo "  4. Wait for build to complete"
    ;;
  *)
    echo "Invalid choice. Deployment skipped."
    ;;
esac

echo ""

# Step 4: Monitoring instructions
echo -e "${BLUE}Step 4/4: Monitoring...${NC}"
echo ""
echo "Deployment initiated! Now:"
echo ""
echo -e "${YELLOW}⏰ Wait 5-10 minutes for CDN propagation${NC}"
echo ""
echo "Option A - Automated monitoring:"
echo "  ${GREEN}./watch-sitemap.sh${NC}"
echo ""
echo "Option B - Manual test (after 10 minutes):"
echo "  1. Open incognito browser"
echo "  2. Go to: https://www.parcalamamakinesi.com/sitemap.xml"
echo "  3. Check first <loc> tag should be: /tr"
echo ""
echo "Option C - Terminal test:"
echo "  ${GREEN}curl -s https://www.parcalamamakinesi.com/sitemap.xml | grep -m 1 '<loc>'${NC}"
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo -e "${GREEN}✅ Deployment script complete!${NC}"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Optional: Start monitoring
read -p "Start automated monitoring now? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  chmod +x watch-sitemap.sh
  echo "Starting monitor in 60 seconds (giving deploy time to start)..."
  sleep 60
  ./watch-sitemap.sh
else
  echo "Monitoring skipped. Run manually: ./watch-sitemap.sh"
fi
