const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');

//req is the request OBJECT

//res is the RESPONSE object

const app = createServer((req, res) => {
    const url = parse(req.url);
    console.log(url.pathname);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    //if url.pathname === './red', do X
    if(url.pathname === '/') {
        res.end(`<h1>*flicks light switch rapidly* WELCOME TO HELL WELCOME TO HELL WELCOME TO HELL</h1>`)
    }
    else if(url.pathname === '/red') {
        res.end(`<style>span { color: green}</style><h1>WELCOME TO THE <span>RED</span> ZONE</h1>`)
    }
    else if(url.pathname === '/blue') {
        res.end(`<style>span { color: red}</style><h1>WELCOME TO THE <span>BLUE</span> ZONE</h1>`)
    }
    else if(url.pathname === '/green') {
        res.end(`<style>span { color: blue}</style><h1>WELCOME TO THE <span>GREEN</span> ZONE</h1>`)
    }
});

module.exports = app;