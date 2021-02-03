'use strict';

const express = require('express');
const logger = require('simple-node-logger').createSimpleLogger();
const url = require('url');

const PORT = 8088;
const HOST = '0.0.0.0';
const app = express();

const randomNumber = Math.floor(Math.random() * 1000);

app.use((req, res, next) => {
	const urlData = url.parse(req.url);
	logger.info(`Received request: ${req.method} ${urlData.pathname}`);
	next();
});

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

logger.info(`Running on http://${HOST}:${PORT}`);
