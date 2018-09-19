const assert = require('assert')
const calcRequestAuthenticator = require('../../lib/ra')

module.exports = async props => {
  
  const { ra, mac, node, ipv4, session } = props
  console.log('status, requesting access: mac, session', mac, session)
  
  assert.ok(mac, 'requires mac')
  assert.ok(session, 'requires session')
  
  // check if this session / mac are still valid or known?
  const code = 'REJECT'
  
  return {
    CODE: code,
    RA: calcRequestAuthenticator({ ra, code }),
    BLOCKED_MSG: 'You are not authenticated yet'    
  }
}