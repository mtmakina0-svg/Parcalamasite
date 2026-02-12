const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();
dotenv.config({ path: '.env.local' });

// Import the Vercel handler
const chatHandler = require('./api/chat.js');

const app = express();
const PORT = 3001;

// Middleware - restricted CORS and body size limit
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '10kb' }));

// Routes
// Wrap the handler to catch errors and ensure it works with Express
app.all('/api/chat', async (req, res) => {
    try {
        await chatHandler(req, res);
    } catch (error) {
        console.error('Local Server Error:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Local Server Error' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`🚀 API Server running on http://localhost:${PORT}`);
    console.log(`🔑 GEMINI_API_KEY: ${process.env.GEMINI_API_KEY ? 'Set ✅' : 'Missing ❌'}`);
});
