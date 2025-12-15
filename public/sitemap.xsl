<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - MT Makina</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
          }
          h1 {
            color: #1E1E1E;
            font-size: 24px;
            margin-bottom: 10px;
          }
          .header {
            background: linear-gradient(135deg, #45474B 0%, #2F3032 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 20px;
          }
          .header h1 {
            color: #F4CE14;
            margin: 0;
          }
          .header p {
            color: #ccc;
            margin: 10px 0 0 0;
          }
          .header a {
            color: #F4CE14;
            text-decoration: none;
          }
          .stats {
            background: white;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .stats span {
            margin-right: 20px;
            color: #666;
          }
          .stats strong {
            color: #F4CE14;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          th {
            background: #45474B;
            color: #F4CE14;
            text-align: left;
            padding: 15px;
            font-weight: 600;
          }
          td {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
          }
          tr:hover td {
            background: #f8f9fa;
          }
          tr:last-child td {
            border-bottom: none;
          }
          a {
            color: #0066cc;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority-high { color: #28a745; font-weight: bold; }
          .priority-medium { color: #ffc107; }
          .priority-low { color: #6c757d; }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
            font-size: 14px;
          }
          .footer a {
            color: #F4CE14;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🗺️ XML Sitemap - MT Makina</h1>
          <p>Bu sitemap <a href="https://www.parcalamamakinesi.com">www.parcalamamakinesi.com</a> için otomatik olarak oluşturulmuştur.</p>
          <p>Daha fazla bilgi için: <a href="https://www.sitemaps.org" target="_blank">sitemaps.org</a></p>
        </div>
        
        <xsl:choose>
          <!-- Sitemap Index -->
          <xsl:when test="sitemap:sitemapindex">
            <div class="stats">
              <span>📁 Bu sitemap index dosyası <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> adet sitemap içermektedir.</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th style="width: 60%">Sitemap</th>
                  <th style="width: 40%">Son Güncelleme</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>
          
          <!-- Regular Sitemap -->
          <xsl:otherwise>
            <div class="stats">
              <span>📄 Bu sitemap dosyası <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> adet URL içermektedir.</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th style="width: 50%">URL</th>
                  <th style="width: 15%">Öncelik</th>
                  <th style="width: 15%">Değişim Sıklığı</th>
                  <th style="width: 20%">Son Güncelleme</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <xsl:sort select="sitemap:priority" order="descending"/>
                  <tr>
                    <td>
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:priority >= 0.8">
                          <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority >= 0.5">
                          <span class="priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:otherwise>
        </xsl:choose>
        
        <div class="footer">
          <p>🏭 <a href="https://www.parcalamamakinesi.com">MT Makina</a> - Endüstriyel Parçalama Makineleri Üreticisi</p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
