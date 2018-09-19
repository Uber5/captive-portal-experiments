const debug = require('debug')('captive-portal:splash-notyet')

module.exports = async (ctx, props) => {
  debug('in', props)
  
  ctx.body = `<html>
    <head>
      <title>DA Access Point Login (Experimental)</title>
    </head>
    <body>
      Login here: <a href="https://login.voteda.org/authorize">Login</a>
    </body>
  </html>`
  
}