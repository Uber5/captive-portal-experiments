const crypto = require('crypto')
const assert = require('assert')
const debug = require('debug')('captive-portal:decode-password')

// https://github.com/cloudtrax/docs/blob/master/captive_portal/authentication/http/password_decoding.md
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
      password = Buffer.concat([
        password,
        Buffer.from([bincoded[i + j] ^ key[j]])
      ])
    }
    lastResult = bincoded.slice(i, i + 16)
  }
  let decoded = ''
  for (let i = 0; i < password.length; i++) {
    if (password[i] === 0) {
      break
    }
    decoded += String.fromCharCode(password[i])
  }
  //console.log('decoded', decoded, decoded.length)

  return decoded
}
