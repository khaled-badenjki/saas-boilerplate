const request = require('supertest')
const { expect } = require('chai')

const app = require('../app')

describe('GET /health-check', () => {
  it('should return 200 OK', () => {
    return request(app)
      .get('/api/health-check')
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.status).to.equal('ok')
      })
  })
})
