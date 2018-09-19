const Router = require('koa-router');

const prefix = '/ap'

const router = new Router({
  prefix
});

router.get('/', async (ctx, next) => {
  console.log(`GET ${prefix}, headers`, ctx.headers)
  ctx.body = 'should prompt for login';
  ctx.set('X-test1', `Glitch-time is: ${ new Date() }`);
  // ctx.status = 201;
  next();
});

module.exports = router;