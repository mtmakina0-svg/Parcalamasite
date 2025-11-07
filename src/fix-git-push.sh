#!/bin/bash

# Emergency Git Push Fix
# Fixes the _redirects folder/file conflict

echo "🚨 GIT PUSH FIX - _redirects Conflict"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Step 1: Remove _redirects completely (folder or file)
echo "Step 1: Removing _redirects (all versions)..."

if [ -d "public/_redirects" ]; then
  echo -e "${YELLOW}  Found _redirects as FOLDER (removing...)${NC}"
  rm -rf public/_redirects
elif [ -f "public/_redirects" ]; then
  echo -e "${YELLOW}  Found _redirects as FILE (removing...)${NC}"
  rm -f public/_redirects
else
  echo "  _redirects not found"
fi

echo -e "${GREEN}✅ Removed${NC}"
echo ""

# Step 2: Create fresh _redirects file
echo "Step 2: Creating fresh _redirects FILE..."

cat > public/_redirects << 'EOF'
/sitemap.xml    /sitemap.xml    200!
/robots.txt     /robots.txt     200!
/*              /index.html     200
EOF

echo -e "${GREEN}✅ Created${NC}"
echo ""

# Step 3: Verify file type
echo "Step 3: Verifying..."

if [ -f "public/_redirects" ] && [ ! -d "public/_redirects" ]; then
  echo -e "${GREEN}✅ CORRECT: _redirects is a FILE (not a folder)${NC}"
else
  echo -e "${RED}❌ ERROR: Still a problem!${NC}"
  exit 1
fi

echo ""
echo "Content:"
cat public/_redirects
echo ""

# Step 4: Git operations
echo "Step 4: Git operations..."

# Unstage everything first
git reset HEAD public/_redirects 2>/dev/null || echo "  (Nothing to unstage)"

# Force remove from Git tracking (if it was a folder)
git rm -rf public/_redirects 2>/dev/null || echo "  (Already removed from Git)"

# Add the new file
git add public/_redirects

echo -e "${GREEN}✅ Git staged${NC}"
echo ""

# Step 5: Show status
echo "Step 5: Git status:"
git status public/_redirects

echo ""
echo "======================================"
echo -e "${GREEN}✅ Fix complete!${NC}"
echo "======================================"
echo ""
echo "Next steps:"
echo "  1. git add public/sitemap.xml"
echo "  2. git commit -m \"fix: _redirects file conflict resolved\""
echo "  3. git push origin main"
echo ""
