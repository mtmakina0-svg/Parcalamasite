#!/bin/bash

# Sitemap Comparison Script
# Compares local sitemap.xml with production sitemap

echo "🔍 Sitemap Comparison Tool"
echo "=========================="
echo ""

LOCAL_SITEMAP="public/sitemap.xml"
PROD_URL="https://www.parcalamamakinesi.com/sitemap.xml"
TEMP_FILE="/tmp/prod_sitemap.xml"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if local sitemap exists
if [ ! -f "$LOCAL_SITEMAP" ]; then
  echo -e "${RED}❌ Error: $LOCAL_SITEMAP not found${NC}"
  exit 1
fi

# Download production sitemap
echo "📥 Downloading production sitemap..."
curl -s "$PROD_URL" > "$TEMP_FILE"

if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Error: Could not download production sitemap${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Downloaded${NC}"
echo ""

# Compare versions
echo "🔍 Comparing versions:"
echo "====================="

LOCAL_VERSION=$(grep -o "Version: [0-9.]*" "$LOCAL_SITEMAP" | head -1)
PROD_VERSION=$(grep -o "Version: [0-9.]*" "$TEMP_FILE" | head -1)

echo "Local:      $LOCAL_VERSION"
echo "Production: $PROD_VERSION"
echo ""

if [ "$LOCAL_VERSION" = "$PROD_VERSION" ]; then
  echo -e "${GREEN}✅ Versions match${NC}"
else
  echo -e "${YELLOW}⚠️  Versions differ - deployment needed!${NC}"
fi

# Compare first 5 URLs
echo ""
echo "🔍 Comparing first 5 URLs:"
echo "========================="

echo ""
echo "LOCAL URLs:"
grep -o "<loc>.*</loc>" "$LOCAL_SITEMAP" | head -5 | sed 's/<loc>//g' | sed 's/<\/loc>//g'

echo ""
echo "PRODUCTION URLs:"
grep -o "<loc>.*</loc>" "$TEMP_FILE" | head -5 | sed 's/<loc>//g' | sed 's/<\/loc>//g'

# Count URLs
echo ""
echo "🔍 URL Counts:"
echo "============="

LOCAL_COUNT=$(grep -c "<loc>" "$LOCAL_SITEMAP")
PROD_COUNT=$(grep -c "<loc>" "$TEMP_FILE")

echo "Local:      $LOCAL_COUNT URLs"
echo "Production: $PROD_COUNT URLs"
echo ""

if [ "$LOCAL_COUNT" -eq "$PROD_COUNT" ]; then
  echo -e "${GREEN}✅ URL counts match${NC}"
else
  echo -e "${YELLOW}⚠️  URL counts differ${NC}"
  DIFF=$((LOCAL_COUNT - PROD_COUNT))
  if [ $DIFF -gt 0 ]; then
    echo "   Local has $DIFF more URLs"
  else
    echo "   Production has ${DIFF#-} more URLs"
  fi
fi

# Check for language prefixes in production
echo ""
echo "🔍 Checking URL structure:"
echo "========================="

PROD_HAS_TR=$(grep -c "/tr/" "$TEMP_FILE")
PROD_HAS_EN=$(grep -c "/en/" "$TEMP_FILE")

echo "Production URLs with /tr/: $PROD_HAS_TR"
echo "Production URLs with /en/: $PROD_HAS_EN"
echo ""

if [ "$PROD_HAS_TR" -gt 10 ] && [ "$PROD_HAS_EN" -gt 10 ]; then
  echo -e "${GREEN}✅ Production has new URL structure (language prefixes)${NC}"
else
  echo -e "${RED}❌ Production still has OLD URL structure${NC}"
  echo -e "${YELLOW}   Action needed: Deploy new sitemap!${NC}"
fi

# Check hreflang support
echo ""
echo "🔍 Checking hreflang support:"
echo "============================"

LOCAL_HREFLANG=$(grep -c "hreflang" "$LOCAL_SITEMAP")
PROD_HREFLANG=$(grep -c "hreflang" "$TEMP_FILE")

echo "Local:      $LOCAL_HREFLANG hreflang tags"
echo "Production: $PROD_HREFLANG hreflang tags"
echo ""

if [ "$PROD_HREFLANG" -gt 100 ]; then
  echo -e "${GREEN}✅ Production has hreflang support${NC}"
else
  echo -e "${YELLOW}⚠️  Production lacks hreflang support (old sitemap)${NC}"
fi

# Final verdict
echo ""
echo "================================"
echo "📊 FINAL VERDICT"
echo "================================"
echo ""

if [ "$LOCAL_VERSION" = "$PROD_VERSION" ] && [ "$PROD_HREFLANG" -gt 100 ]; then
  echo -e "${GREEN}✅ Production sitemap is UP TO DATE${NC}"
  echo "   No action needed."
else
  echo -e "${RED}❌ Production sitemap is OUTDATED${NC}"
  echo ""
  echo "🚀 Action Required:"
  echo "   1. Fix _redirects file: ./fix-redirects.sh"
  echo "   2. Commit and push changes"
  echo "   3. Clear cache and redeploy:"
  echo "      vercel --prod --force"
  echo "   4. Wait 5 minutes and rerun this script"
fi

# Cleanup
rm -f "$TEMP_FILE"

echo ""
