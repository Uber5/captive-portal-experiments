const crypto = require('crypto')

module.exports = ({ ra, code, secret = process.env.SHARED_SECRET }) => {
  const b1 = Buffer.from(ra, 'hex')
  return crypto.createHash('md5').update(b1.toString()).digest("hex")
}