const fs = require('fs');

function readDirectory(directory, callback) {
    fs.readdir(directory, callback);
}

function readFile(path, callback) {
    fs.readFile(path, { encoding: 'utf8' }, callback);
}

function serveFile(url, res) {
    readDirectory('./public', (err, files) => {
        if(err) {
            return console.log(err);
        }
        console.log('getting files log', files);
        files.forEach(file => {
            console.log('file console log', file);
            console.log(url.pathname, url.pathname.includes(file));
            if(url.pathname.includes(file)) {
                readFile(`./public/${file}`, (err, resultContent) => {
                    if(err) {
                        console.error(err);
                    }
                    console.log('file contents', resultContent);
                    res.end(resultContent);
                }); 
            }
            else {
                res.statusCode = 404;
                res.end('Oh, you\'ve done it now!');
            }
        });
    });
}

module.exports = { readDirectory, readFile, serveFile };
