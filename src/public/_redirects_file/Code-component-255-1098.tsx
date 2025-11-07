# Netlify Redirects Configuration
# https://docs.netlify.com/routing/redirects/

# Static files - do not redirect
/sitemap.xml  /sitemap.xml  200
/robots.txt   /robots.txt   200

# SPA fallback - redirect all other routes to index.html
/*  /index.html  200
