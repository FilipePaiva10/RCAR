const express = require('express');
const path = require('path');
const app = express();

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
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