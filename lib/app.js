const { createServer } = require('http');
const { parse } = require('url');
const { serveFile } = require('./functions');

const app = createServer((req, res) => {
    const url = parse(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    serveFile(url, res);
});

module.exports = app;
