const Router = require('koa-router');

const prefix = '/auth'

const router = new Router({
  prefix
});

const handlers = {
  login: require('./auth/login'),
}

const encodeResponse = props => Object.keys(props)
.map(key => `"${key}" "${props[key]}"`)
.join('\n')

router.get('/', async (ctx, next) => {
  const { query } = ctx
  const { type } = query
  if (!handlers[type]) {
    throw new Error('No handler for request type')
  }
  const response = await handlers[type](query)
  console.log('response', response)
  ctx.body = encodeResponse(response)
  next();
});

module.exports = router;