const crypto = require('crypto')
const debug = require('debug')('captive-portal:ra')

module.exports = ({ ra, code, secret = process.env.SHARED_SECRET }) => {
  debug('in', { ra, code, secret })
  const b1 = Buffer.from(ra, 'hex')
  const out = crypto.createHash('md5').update(b1.toString()).digest("hex")
  debug('out', out)
  return out
}