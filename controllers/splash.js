const Router = require('koa-router');

const prefix = '/splash'

const router = new Router({
  prefix
});

const handlerNames = [ 'notyet', 'success', 'failed', 'logoff' ]


router.get('/', async (ctx, next) => {
  console.log(`GET ${prefix}, headers`, ctx.headers)
  ctx.body = 'should prompt for login';
  ctx.set('X-test1', `Glitch-time is: ${ new Date() }`);
  // ctx.status = 201;
  next();
});

module.exports = router;