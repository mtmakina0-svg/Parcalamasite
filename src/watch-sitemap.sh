#!/bin/bash

# Real-time Sitemap Monitor
# Continuously checks if production sitemap has been updated

echo "🔍 MT Makina - Real-time Sitemap Monitor"
echo "========================================"
echo "Monitoring: https://www.parcalamamakinesi.com/sitemap.xml"
echo "Target Version: 3.0 FINAL"
echo ""
echo "Press Ctrl+C to stop"
echo ""

PROD_URL="https://www.parcalamamakinesi.com/sitemap.xml"
CHECK_INTERVAL=10  # seconds

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

COUNTER=0

while true; do
  COUNTER=$((COUNTER + 1))
  TIMESTAMP=$(date '+%H:%M:%S')
  
  echo -e "${BLUE}[$TIMESTAMP]${NC} Check #$COUNTER..."
  
  # Download sitemap
  SITEMAP_CONTENT=$(curl -s "$PROD_URL" 2>/dev/null)
  
  if [ $? -ne 0 ]; then
    echo -e "${RED}  ❌ Error: Could not fetch sitemap${NC}"
    sleep $CHECK_INTERVAL
    continue
  fi
  
  # Check version
  VERSION=$(echo "$SITEMAP_CONTENT" | grep -o "Version: [^)]*" | head -1)
  
  # Check first URL
  FIRST_URL=$(echo "$SITEMAP_CONTENT" | grep -m 1 "<loc>" | sed 's/.*<loc>//g' | sed 's/<\/loc>.*//g' | xargs)
  
  # Display results
  echo "  Version: $VERSION"
  echo "  First URL: $FIRST_URL"
  
  # Success check
  if [[ "$VERSION" == *"3.0"* ]] && [[ "$FIRST_URL" == *"/tr"* ]]; then
    echo ""
    echo "════════════════════════════════════════"
    echo -e "${GREEN}✅ SUCCESS! New sitemap is LIVE!${NC}"
    echo "════════════════════════════════════════"
    echo ""
    echo "Details:"
    echo "  ✅ Version: $VERSION"
    echo "  ✅ First URL: $FIRST_URL"
    echo "  ✅ Language prefix detected: /tr/"
    echo ""
    echo "Next steps:"
    echo "  1. Test in incognito mode"
    echo "  2. Update Google Search Console"
    echo "  3. Monitor indexing over next 24-48 hours"
    echo ""
    exit 0
  elif [[ "$FIRST_URL" == *"/tr"* ]]; then
    echo -e "${YELLOW}  ⚠️  New URL structure but version might be cached${NC}"
  elif [[ "$VERSION" == *"3.0"* ]]; then
    echo -e "${YELLOW}  ⚠️  New version but old URL structure (cache issue)${NC}"
  else
    echo -e "${RED}  ⏳ Still showing old sitemap...${NC}"
  fi
  
  echo ""
  sleep $CHECK_INTERVAL
done
