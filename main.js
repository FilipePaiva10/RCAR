const express = require('express');
const path = require('path');
const app = express();

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy-Report-Only',
      "default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"
    );
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ada/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/ada/etapas/1/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ada/steps/step_1.html'));
});

app.get('/ada/etapas/2/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ada/steps/step_2.html'));
});

app.get('/ada/etapas/3/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ada/steps/step_3.html'));
});

app.get('/ada/etapas/4/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ada/steps/step_4.html'));
});

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
});