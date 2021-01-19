const { app, server} = require('../server')
const request = require('supertest');

let res = null

beforeAll(() =>{
  res = request(app)
})

describe('GET /movies', function() {
    it('responds with json', function(done) {
      res.get('/movies')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

afterAll(()=>{
    server.close()
})
