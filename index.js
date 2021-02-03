'use strict';

const express = require('express');

const PORT = 8088;
const HOST = '0.0.0.0';
const app = express();

const randomNumber = Math.floor(Math.random() * 1000);

app.get('/', (req, res) => {
    res.status = 200;
    res.send(`Random number: ${randomNumber}.`);
});

app.get('/number', (req, res) => {
    const result = Math.floor(Math.random() * 1000);

    res.status = 200;
    res.send(result.toString());
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
