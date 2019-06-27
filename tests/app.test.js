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
});
