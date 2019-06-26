const app = require('../lib/app');
const request = require('supertest');

describe('application path routing', () => {

    it('returns welcome if path is /', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('<h1>*flicks light switch rapidly* WELCOME TO HELL WELCOME TO HELL WELCOME TO HELL</h1>'))
            })
    }); 

    it('returns red html when path is /red', () => {
        return request(app)
            .get('/red')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('<style>span { color: green}</style><h1>WELCOME TO THE <span>RED</span> ZONE</h1>'))
            })
    }); 

    it('returns blue html when path is /red', () => {
        return request(app)
            .get('/blue')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('<style>span { color: red}</style><h1>WELCOME TO THE <span>BLUE</span> ZONE</h1>'))
            })
    }); 

    it('returns green html when path is /red', () => {
        return request(app)
            .get('/green')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('<style>span { color: blue}</style><h1>WELCOME TO THE <span>GREEN</span> ZONE</h1>'))
            })
    }); 

    it('returns a failure message and a status of 404', () => {
        return request(app)
            .get('/failure')
            .then(res => {
                expect(res.status).toEqual(404);
                expect(res.text).toEqual(expect.stringContaining(`<h1>OH YOU'VE DONE IT NOW!</h1>`));
            });
    }); 

});
