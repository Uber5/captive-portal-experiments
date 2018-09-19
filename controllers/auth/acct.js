const debug = require('debug')('captive-portal:acct')

module.exports = async props => {
  
  const { ra, mac, node, download, upload, seconds, ipv4, session } = props
  debug('in', props)
  
