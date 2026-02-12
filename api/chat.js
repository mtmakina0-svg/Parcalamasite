const fetch = require('node-fetch');

// Environment variable - set in Vercel Dashboard, NOT in frontend
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent';

// Rate limiting: simple in-memory store (resets on cold start)
const rateLimitMap = new Map();
const RATE_LIMIT = 20; // requests per minute
const RATE_WINDOW = 60 * 1000; // 1 minute
const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_LENGTH = 20;
const ALLOWED_LANGUAGES = ['tr', 'en', 'ru', 'ar'];

// CORS whitelist
const ALLOWED_ORIGINS = [
    'https://www.parcalamamakinesi.com',
    'https://parcalamamakinesi.com',
    'http://localhost:3000',
    'http://localhost:5173'
];

// MT Makina system prompt
const SYSTEM_PROMPT = `Sen MT Makina'nın resmi AI asistanısın. Adın "MT Asistan".

## Şirket Bilgileri
- **Firma**: MT Makina Ltd. Şti.
- **Kuruluş**: 2004
- **Konum**: İstanbul, Türkiye
- **İhracat**: 50+ ülke
- **Uzmanlık**: Endüstriyel parçalama makineleri, geri dönüşüm sistemleri
- **Web Sitesi**: https://www.parcalamamakinesi.com

## Ürün Kategorileri ve URL'leri (HER ZAMAN LİNK VER!)
1. **Tek Şaftlı Parçalama Makinesi (TSH Serisi)**: https://www.parcalamamakinesi.com/tr/tek-saftli-parcalama-makinesi
2. **Çift Şaftlı Parçalama Makinesi (CS Serisi)**: https://www.parcalamamakinesi.com/tr/cift-saftli-parcalama-makinesi
3. **Dört Şaftlı Parçalama Makinesi (DS Serisi)**: https://www.parcalamamakinesi.com/tr/dort-saftli-parcalama-makinesi
4. **Metal Parçalama Makinesi Redmonster (RDM Serisi)**: https://www.parcalamamakinesi.com/tr/metal-parcalama-makinesi
5. **Mobil Kırıcı (TSM/CSM Serisi)**: https://www.parcalamamakinesi.com/tr/mobil-kirici
6. **Palet Parçalama Makinesi (TSV Serisi)**: https://www.parcalamamakinesi.com/tr/palet-parcalama-makinesi
7. **Harddisk İmha Makinesi (DATABER Serisi)**: https://www.parcalamamakinesi.com/tr/harddisk-imha-makinesi
8. **Ağaç Kökü Parçalama (TW Serisi)**: https://www.parcalamamakinesi.com/tr/agac-koku-parcalama-makinesi
9. **Ağaç Öğütme Makinesi (TSY Serisi)**: https://www.parcalamamakinesi.com/tr/agac-parcalama-ogutme-makinesi
10. **Cam Şişe Kırma (CK/GB Serisi)**: https://www.parcalamamakinesi.com/tr/cam-sise-kirma-makinesi

## Diğer Sayfalar
- **Ürünler**: https://www.parcalamamakinesi.com/tr/urunler
- **Kurumsal**: https://www.parcalamamakinesi.com/tr/kurumsal
- **Referanslar**: https://www.parcalamamakinesi.com/tr/referanslar
- **E-Katalog**: https://www.parcalamamakinesi.com/tr/e-katalog
- **İletişim**: https://www.parcalamamakinesi.com/tr/iletisim

## İletişim
- **Telefon**: +90 850 259 0166
- **WhatsApp**: +90 542 310 99 30 (https://wa.me/905423109930)
- **E-posta**: info@mtmakina.com
- **Adres**: Esenyurt, İstanbul

## ZORUNLU DAVRANIŞ KURALLARI
1. **Ürün önerdiğinde HER ZAMAN tam URL ver!** Sadece isim yazma, mutlaka link ekle.
2. Ürün tavsiyesinden sonra HER ZAMAN şu mesajı ekle:
   "📋 **Teklif almak için:** Makine modellerimizi inceleyip 'Hemen Teklif Al' butonuna basabilir veya WhatsApp'tan bize ulaşabilirsiniz: https://wa.me/905423109930"
3. **Parçalama makineleri dışındaki sorular için** (yakma fırını, enerji sistemleri, geri dönüşüm tesisleri vb.): "Bu konuda detaylı bilgi için ana sitemizi ziyaret edebilirsiniz: https://www.mtmakina.com.tr" şeklinde yönlendir.
4. Nazik ve profesyonel ol, kısa ve öz yanıtlar ver
5. Desteklenen diller: Türkçe, İngilizce, Rusça, Arapça - kullanıcının dilinde yanıt ver
6. Teknik soruları detaylı açıkla
7. Bilinmeyen konularda WhatsApp'a yönlendir`;

function getClientIP(req) {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') {
        return forwarded.split(',')[0].trim();
    }
    return req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
        return true;
    }

    if (record.count >= RATE_LIMIT) {
        return false;
    }

    record.count++;
    return true;
}

module.exports = async function handler(req, res) {
    // CORS restriction
    const origin = req.headers.origin;
    if (origin && ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Max-Age', '86400');
    }

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check API key
    if (!GEMINI_API_KEY) {
        console.error('GEMINI_API_KEY not configured');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    // Rate limiting
    const clientIP = getClientIP(req);
    if (!checkRateLimit(clientIP)) {
        return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
    }

    try {
        const { message, history, language } = req.body;

        // Validate message
        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Sanitize and limit message length
        const sanitizedMessage = message.trim().slice(0, MAX_MESSAGE_LENGTH);

        // Validate and limit history
        const limitedHistory = Array.isArray(history)
            ? history.slice(-MAX_HISTORY_LENGTH).filter(
                msg => msg && typeof msg.content === 'string' && typeof msg.role === 'string'
            )
            : [];

        // Validate language
        const validLanguage = ALLOWED_LANGUAGES.includes(language) ? language : 'tr';

        // Build conversation for Gemini
        const contents = [];

        // System prompt
        contents.push({
            role: 'user',
            parts: [{ text: SYSTEM_PROMPT }]
        });
        contents.push({
            role: 'model',
            parts: [{ text: 'Anladım. MT Makina AI asistanı olarak size yardımcı olmaya hazırım.' }]
        });

        // Add chat history (sanitized & limited)
        for (const msg of limitedHistory) {
            const text = String(msg.content).trim().slice(0, MAX_MESSAGE_LENGTH);
            if (text.length > 0) {
                contents.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text }]
                });
            }
        }

        // Add current message (sanitized)
        contents.push({
            role: 'user',
            parts: [{ text: sanitizedMessage }]
        });

        // Call Gemini API
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                },
                safetySettings: [
                    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                ],
            }),
        });

        const data = await response.json();

        if (data.error) {
            console.error('Gemini API error:', data.error);
            return res.status(500).json({ error: 'AI service error' });
        }

        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return res.status(200).json({
                response: data.candidates[0].content.parts[0].text
            });
        }

        return res.status(500).json({ error: 'No response from AI' });

    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
