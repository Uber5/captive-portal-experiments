const assert = require('assert')
const debug = require('debug')('captive-portal:login')
const calcRequestAuthenticator = require('../../lib/ra')

module.exports = async props => {
  
  const { ra, username, password, mac, node, ipv4, session } = props
  debug('in', props)
  assert.ok(ra, 'ra required')
  assert.ok(username, 'username required')
  assert.ok(password, 'password required')

  const response = {
    CODE: 'REJECT'
  }
  
  if (username === 'test1') { // TODO
    response.CODE = 'ACCEPT'
    response.SECONDS = 120
    response.DOWNLOAD = 1024
    response.UPLOAD = 1024
  } else {
    response.BLOCKED_MSG = 'Not a valid test user'
  }
  
  response.RA = calcRequestAuthenticator({ ra, code: response.CODE })
  return response
}


module.exports = async props => {
  console.log('auth, props', props);
  return { dummy: 123 }
}