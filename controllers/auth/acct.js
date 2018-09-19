const assert = require('assert')
const debug = require('debug')('captive-portal:acct')
const calcRequestAuthenticator = require('../../lib/ra')

module.exports = async props => {
  
  const { ra, mac, node, download, upload, seconds, ipv4, session } = props
  debug('in', props)
  assert.ok(ra, 'ra required')
  assert.ok(session, 'session required')
  
  // TODO: log accounting data
  
  const CODE = 'OK'
  return {
    CODE,
    RA: calcRequestAuthenticator({ ra, code: CODE })
  }
}
