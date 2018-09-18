const Router = require('koa-router');

const prefix = '/ap'

const router = new Router({
  prefix
});

router.get('/', async (ctx, next) => {
  console.log(`GET ${prefix}, headers`, ctx.headers)
  ctx.body = 'should have written to mongodb';
  ctx.set('X-test1', `Glitch-time is: ${ new Date() }`);
  ctx.status = 201;
  next();
});

module.exports = router;