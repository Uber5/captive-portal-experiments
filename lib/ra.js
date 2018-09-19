const crypto = require('crypto')
const debug = require('debug')('captive-portal:ra')
const assert = require('assert')

module.exports = ({ encoded, ra, secret = process.env.SHARED_SECRET }) => {
  const bincoded = Buffer.from(encoded, 'hex')
  let lastResult = Buffer.from(ra, 'hex')
  let password = Buffer.from('')

  for (let i = 0; i < bincoded.length; i += 16) {
    const key = crypto.createHash('md5').update(
      Buffer.concat([
        Buffer.from(secret),
        lastResult
      ])
    ).digest()
    for (let j = 0; j < 16; j++) {
      const xored = bincoded[i + j] ^ key[j]
      console.log('xored', xored)
      password = Buffer.concat([
        password,
        Buffer.from([xored])
      ])
    }
    lastResult = Buffer.from(bincoded, i, 16)
  }
  console.log('password.length', password.toString().length)
  let decoded = ''
  for (let i = 0; i < password.length; i++) {
    console.log('password', i, password[i])
    if (password[i] === 0) {
      break
    }
    decoded += String.fromCharCode(password[i])
  }
  console.log('decoded', decoded, decoded.length)

  return password.toString()
}
