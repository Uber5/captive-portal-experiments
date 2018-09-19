const crypto = require('crypto')
const debug = require('debug')('captive-portal:ra')
const assert = require('assert')

module.exports = ({ ra, code, secret = process.env.SHARED_SECRET }) => {
  debug('in', { ra, code, secret })
  assert.ok(ra, 'ra requires previous ra value')
  assert.ok(code, 'ra requires code')
  assert.ok(secret, 'ra requires secret')
  const b1 = Buffer.from(ra, 'hex')
  const out = crypto.createHash('md5').update(
    Buffer.concat([
      Buffer.from(code),
      b1,
      Buffer.from(secret)
    ])
  ).digest("hex")
  debug('out', out)
  return out
}