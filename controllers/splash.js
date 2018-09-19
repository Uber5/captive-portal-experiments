const Router = require('koa-router');

const prefix = '/splash'

const router = new Router({
  prefix
});

const handlerNames = [ 'notyet', 'success', 'failed', 'logoff' ]

const handlers = handlerNames.map(name => ({ name, handler: require('./splash/' + name) }))
.reduce((handlers, e) => {
  const { name, handler } = e
  handlers[name] = handler
  return handlers
}, {})

router.get('/', async (ctx, next) => {
  console.log(`GET ${prefix}, headers`, ctx.headers)
  
  const { query } = ctx
  const { res, ...props } = query
  if (!handlers[res]) {
    throw new Error('No handler for res: ' + res)
  }
  ctx.set('X-test1', `Glitch-time is: ${ new Date() }`)
  await handlers[res](ctx, props)
  // ctx.body = 'should prompt for login'
  // ctx.status = 201
  next()
})

module.exports = router