const { createServer } = require('http');


const server = createServer((req, res) => {
    console.log('Client side made a request');
    res.end('You found me!');
});

server.listen(8080, () => {
    console.log('Listening on port 8080');
});