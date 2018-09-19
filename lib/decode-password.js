const assert = require('assert')
const debug = require('debug')('captive-portal:decode-password')

module.exports = encoded => {
  const bincoded = Buffer.from(encoded, 'hex')
  let decoded
  
  
  
  const decoded = encoded
  .match(/.{1,16}/g)
  .map(s => Buffer.from(s, 'hex').toString())
  .join('')
  debug('decoded password', decoded)
  return decoded
}
