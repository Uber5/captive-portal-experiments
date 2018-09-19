const assert = require('assert')
const debug = require('debug')('captive-portal:decode-password')

module.exports = encoded => {
  const decoded = encoded
  .match(/.{1,32}/g)
  .map(s => Buffer.from(s, 'hex').toString())
  .join('')
  debug('decoded password', decoded)
  return decoded
}
