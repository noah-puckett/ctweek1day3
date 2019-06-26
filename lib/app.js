const { createServer } = require('http');
const { parse } = require('url');
// const fs = require('fs');

//req is the request OBJECT
//res is the RESPONSE object

function readFile(url, file) {
    //so this should take a url? or path? like, it needs to take what the user types in the search bar

    //then we should loop through our public directory to find a file that matches it???

    //then return the file's contents 
}

const app = createServer((req, res) => {
    const url = parse(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(url.pathname === '/index.html') {
        res.statusCode = 200;
        res.end('OK HERE IS WHERE WE START-- this should be programmatically injected');
    }

    // //if url.pathname === './red', do X
    // if(url.pathname === '/') {
    //     res.end('<h1>*flicks light switch rapidly* WELCOME TO HELL WELCOME TO HELL WELCOME TO HELL</h1>');
    // }
    // else if(url.pathname === '/red') {
    //     res.end('<style>span { color: green}</style><h1>WELCOME TO THE <span>RED</span> ZONE</h1>');
    // }
    // else if(url.pathname === '/blue') {
    //     res.end('<style>span { color: red}</style><h1>WELCOME TO THE <span>BLUE</span> ZONE</h1>');
    // }
    // else if(url.pathname === '/green') {
    //     res.end('<style>span { color: blue}</style><h1>WELCOME TO THE <span>GREEN</span> ZONE</h1>');
    // }
    // else {
    //     res.statusCode = 404; 
    //     res.end('<h1>OH YOU\'VE DONE IT NOW!</h1>');
    // }
});

module.exports = app;
