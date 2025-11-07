# Netlify Redirects for MT Makina SPA
# IMPORTANT: This is a TEXT file, not a directory!

# Sitemap and robots - serve as static files
/sitemap.xml    /sitemap.xml    200!
/robots.txt     /robots.txt     200!

# SPA fallback - all other routes go to index.html
/*              /index.html     200
