const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Добавяме CSP хедъри
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', 
        "default-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:; " +
        "style-src 'self' 'unsafe-inline' https: data: blob:; " +
        "font-src 'self' https: data: blob:; " +
        "img-src 'self' data: https: blob:; " +
        "connect-src 'self' https: wss:; " +
        "frame-src 'self' https:; " +
        "object-src 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self';"
    );
    
    // Други сигурностни хедъри
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    next();
});

// Статични файлове
app.use(express.static(__dirname));

// Главна страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Стартиране на сървъра
app.listen(PORT, () => {
    console.log(`Сървърът работи на http://localhost:${PORT}`);
    console.log('CSP хедърите са активирани за Firebase поддръжка');
}); 