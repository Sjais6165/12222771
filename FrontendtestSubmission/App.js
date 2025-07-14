
const express = require('express');
const fs = require('fs');
const { nanoid } = require('nanoid');
const cors = require('cors'); // ✅ 1. Import cors


const logger = require('../LoggingMiddleware/logger.js');

const app = express();
const PORT = 3000;

let urls = require('./urls.json');

// ✅ 2. Use cors middleware before your routes
app.use(cors());
app.use(express.json());
app.use(logger);

app.post('/shorten', (req, res) => {
    const { originalUrl } = req.body;
    const shortId = nanoid(6);
    urls[shortId] = originalUrl;
    fs.writeFileSync('./urls.json', JSON.stringify(urls, null, 2));
    res.status(201).json({ shortUrl: `http://localhost:3000/${shortId}` });
});

app.get('/:shortId', (req, res) => {
    const { shortId } = req.params;
    const originalUrl = urls[shortId];
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
