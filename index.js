const { createServer } = require('http');
const fs = require('fs');

//req is the request OBJECT

//res is the RESPONSE object

const server = createServer((req, res) => {
    console.log('Client side made a request');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Success!</title>
        <style>
        li { color: red }
        </style>
    </head>
    <body>
        <h1>YOU HAVE SUCCEEDED!</h1>
        <ul>
            <li>SO GOOD</li>
            <li>REALLY</li>
            <li>KILLIN IT</li>
        </ul>
        <script>console.log('SUUUUUP')</script>
    </body>
    </html>`);
});

server.listen(8080, () => {
    console.log('Listening on port 8080');
});