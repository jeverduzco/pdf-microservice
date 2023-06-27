const request = require('supertest')
const { describe, it, expect } = require('@jest/globals')
const app = require('./app')

describe('GET /pdf', () => {
  it('should return 400 Bad Request if no url query parameter is provided', async () => {
    const res = await request(app).get('/pdf')

    expect(res.statusCode).toEqual(400)
    expect(res.text).toContain('Please provide URL as GET parameter')
  })

  it('should return a PDF when a valid url is provided', async () => {
    const res = await request(app).get('/pdf?url=https://verduzco.me/')

    expect(res.statusCode).toEqual(200)
    expect(res.headers['content-type']).toEqual('application/pdf;charset=utf-8')
  })

  // Add more test cases as needed
})
