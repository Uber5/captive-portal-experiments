const Router = require('koa-router');

const prefix = '/auth'

const router = new Router({
  prefix
});

const handlers = {
  login: async props => { console.log('handle login'); return { res: 123 } },
}

const encodeResponse = props => Object.keys(props)
.map(key => `"${key}" "${props[key]}"`)
.join('\n')

router.get('/', async (ctx, next) => {
  // console.log(`GET ${prefix}, headers`, ctx.headers)
  console.log('type', ctx.query.type)
  const { type } = ctx.query
  if (!handlers[type]) {
    throw new Error('No handler for request type')
  }
  const response = await handlers[type]()
  console.log('response', response)
  ctx.body = encodeResponse(response)
  next();
});

module.exports = router;