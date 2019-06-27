const app = require('../lib/app');
const request = require('supertest');

describe('application path routing', () => {

    //this fails, whyyy
    it('returns an error if wrong path is given', () => {
        return request(app)
            .get('/failure.html')
            .then(res => {
                expect(res.status).toEqual(404);
                expect(res.text).toEqual(expect.stringContaining('Oh now you\'ve done it!'));
            });
    }); 

    //this fails and I ALSO don't know why
    it('returns welcome header if path is /index.html', () => {
        return request(app)
            .get('/index.html')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toBe(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                </head>
                <body>
                    <h1>WELCOME TO THE DAYDREAM
                    </h1>
                </body>
                </html>`);
            });
    });

    // it('returns welcome if path is /', () => {
    //     return request(app)
    //         .get('/')
    //         .then(res => {
    //             expect(res.status).toEqual(200);
    //             expect(res.text).toEqual(expect.stringContaining('<h1>*flicks light switch rapidly* WELCOME TO HELL WELCOME TO HELL WELCOME TO HELL</h1>'));
    //         });
    // }); 

    // it('returns a failure message and a status of 404', () => {
    //     return request(app)
    //         .get('/failure')
    //         .then(res => {
    //             expect(res.status).toEqual(404);
    //             expect(res.text).toEqual(expect.stringContaining('<h1>OH YOU\'VE DONE IT NOW!</h1>'));
    //         });
    // }); 

});
