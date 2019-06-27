const app = require('../lib/app');
const request = require('supertest');

describe('application path routing', () => {

    it('returns an error if wrong path is given', () => {
        return request(app)
            .get('/failure.html')
            .then(res => {
                expect(res.statusCode).toEqual(404);
                expect(res.text).toEqual('Oh, you\'ve done it now!');
            });
    }); 

    it('returns welcome header if path is /index.html', () => {
        return request(app)
            .get('/index.html')
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('WELCOME'));
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
