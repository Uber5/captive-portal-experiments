const calcRequestAuthenticator = require('../../lib/ra')

module.exports = async props => {
  const { ra, mac, node, ipv4, session } = props
  console.log('status, requesting access, mac')
  
  // check if this session / mac are still valid or known?
  return {
    CODE: 'REJECT',
    RA: ra({ ,
    BLOCKED_MSG: 'You are not authenticated yet'    
  }
}