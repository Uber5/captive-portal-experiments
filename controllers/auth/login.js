const assert = require('assert')
const debug = require('debug')('captive-portal:login')
const calcRequestAuthenticator = require('../../lib/ra')
const decodePassword = require('../../lib/decode-password')

module.exports = async props => {
  
  const { ra, username, password, mac, node, ipv4, session } = props
  debug('in', props)
  assert.ok(ra, 'ra required')
  assert.ok(username, 'username required')
  assert.ok(password, 'password required')

  const response = {
    CODE: 'REJECT'
  }
  
  const cleartextPassword = decodePassword(password)
  if (username === 'test1') { // TODO
    response.CODE = 'ACCEPT'
    response.SECONDS = 120
    response.DOWNLOAD = 1024
    response.UPLOAD = 1024
  } else {
    response.BLOCKED_MSG = encodeURIComponent('Not a valid test user')
  }
  
  response.RA = calcRequestAuthenticator({ ra, code: response.CODE })
  return response
}
