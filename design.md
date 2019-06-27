# Goals

## Route the user to their requested site

# Steps

1. Deep Breath!!!

1. If request path is index.html? Serve that thing?

1. Cycle through files-- we just did that with the oops files

1. Create a function that reads a file?

1. When we read the file, we need to maybe store contents in a variable?

1. Interpolate page contents into response



unction namePending(url) {
    // let resultContent = '';

    readDirectory('./public', (err, files) => {
        
        if(err) {
            return console.log(err);
        }

        files.forEach(file => {
            if(url.pathname.includes(file)) {
                readFile(file, (err, fileData) => {
                    if(err) return err;
                    console.log(fileData);
                    return fileData;
                });
            }
        });
    });
    // return resultContent;
} 