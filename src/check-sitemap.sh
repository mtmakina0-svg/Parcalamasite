#!/bin/bash

# Sitemap Deployment Verification Script
# Usage: ./check-sitemap.sh

echo "🔍 MT Makina Sitemap Deployment Checker"
echo "========================================"
echo ""

SITEMAP_URL="https://www.parcalamamakinesi.com/sitemap.xml"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Sitemap Erişilebilirlik
echo "Test 1: Sitemap Erişilebilirlik..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITEMAP_URL")

if [ "$HTTP_CODE" -eq 200 ]; then
  echo -e "${GREEN}✅ PASS${NC} - Sitemap erişilebilir (HTTP $HTTP_CODE)"
else
  echo -e "${RED}❌ FAIL${NC} - Sitemap erişilemiyor (HTTP $HTTP_CODE)"
  exit 1
fi

# Test 2: Content-Type
echo ""
echo "Test 2: Content-Type Header..."
CONTENT_TYPE=$(curl -s -I "$SITEMAP_URL" | grep -i "content-type" | awk '{print $2}' | tr -d '\r')

if [[ "$CONTENT_TYPE" == *"xml"* ]]; then
  echo -e "${GREEN}✅ PASS${NC} - Content-Type: $CONTENT_TYPE"
else
  echo -e "${YELLOW}⚠️  WARN${NC} - Content-Type: $CONTENT_TYPE (xml bekleniyor)"
fi

# Test 3: Cache-Control
echo ""
echo "Test 3: Cache-Control Header..."
CACHE_CONTROL=$(curl -s -I "$SITEMAP_URL" | grep -i "cache-control" | awk -F': ' '{print $2}' | tr -d '\r')

if [[ "$CACHE_CONTROL" == *"max-age=0"* ]]; then
  echo -e "${GREEN}✅ PASS${NC} - Cache-Control: $CACHE_CONTROL"
else
  echo -e "${YELLOW}⚠️  WARN${NC} - Cache-Control: $CACHE_CONTROL"
  echo "  (Beklenen: max-age=0)"
fi

# Test 4: XML Validity
echo ""
echo "Test 4: XML Format..."
XML_FIRST_LINE=$(curl -s "$SITEMAP_URL" | head -1)

if [[ "$XML_FIRST_LINE" == *"<?xml"* ]]; then
  echo -e "${GREEN}✅ PASS${NC} - Valid XML başlangıcı"
else
  echo -e "${RED}❌ FAIL${NC} - Geçersiz XML formatı"
fi

# Test 5: URL Count
echo ""
echo "Test 5: URL Sayısı..."
URL_COUNT=$(curl -s "$SITEMAP_URL" | grep -c "<loc>")

if [ "$URL_COUNT" -gt 50 ]; then
  echo -e "${GREEN}✅ PASS${NC} - $URL_COUNT URL bulundu"
else
  echo -e "${YELLOW}⚠️  WARN${NC} - Sadece $URL_COUNT URL bulundu (50+ bekleniyor)"
fi

# Test 6: Version Check (New Sitemap)
echo ""
echo "Test 6: Sitemap Version..."
VERSION_CHECK=$(curl -s "$SITEMAP_URL" | grep -i "Version: 2.0")

if [ -n "$VERSION_CHECK" ]; then
  echo -e "${GREEN}✅ PASS${NC} - Yeni sitemap version'u tespit edildi (v2.0)"
else
  echo -e "${YELLOW}⚠️  WARN${NC} - Eski sitemap version'u (güncelleme gerekebilir)"
fi

# Test 7: Hreflang Support
echo ""
echo "Test 7: Hreflang Desteği..."
HREFLANG_COUNT=$(curl -s "$SITEMAP_URL" | grep -c "hreflang")

if [ "$HREFLANG_COUNT" -gt 100 ]; then
  echo -e "${GREEN}✅ PASS${NC} - Hreflang tags bulundu ($HREFLANG_COUNT adet)"
else
  echo -e "${YELLOW}⚠️  WARN${NC} - Hreflang tags yetersiz ($HREFLANG_COUNT adet)"
fi

# Final Summary
echo ""
echo "========================================"
echo "📊 Özet Rapor"
echo "========================================"
echo "URL: $SITEMAP_URL"
echo "HTTP Status: $HTTP_CODE"
echo "Content-Type: $CONTENT_TYPE"
echo "Cache-Control: $CACHE_CONTROL"
echo "URL Sayısı: $URL_COUNT"
echo "Hreflang Tags: $HREFLANG_COUNT"
echo ""
echo -e "${GREEN}✨ Sitemap deployment kontrolü tamamlandı!${NC}"
echo ""
echo "📌 Sonraki adım:"
echo "   Google Search Console'a ekle:"
echo "   https://search.google.com/search-console"
echo ""
