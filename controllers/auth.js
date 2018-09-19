const Router = require('koa-router');

const prefix = '/auth'

const router = new Router({
  prefix
});

const handlers = {
  login: async props => { console.log('handle login'); return { res: 123 } },
}

router.get('/', async (ctx, next) => {
  console.log(`GET ${prefix}, headers`, ctx.headers)
  console.log('type', ctx.query.type)
  const { type } = ctx.query
  if (!handlers[type]) {
    throw
  switch (type) {
    case 'login': 
  ctx.body = 'this is wip...'
  next();
});

module.exports = router;