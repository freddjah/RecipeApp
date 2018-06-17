const expect = require('expect')
const request = require('supertest')

const { app } = require('./../server')

describe('GET /search', () => {
  it('should fetch some recipes', (done) => {
    request(app)
      .get('/search?ingredients=onion')
      .timeout(4000)
      .expect(200)
      .expect((response) => {
        expect(response.body.count).toBe(30)
        expect(response.body.recipes).toBeTruthy()
      })
      .end((error, response) => {
        if (error) return done(error)
        done()
      })
  })
})