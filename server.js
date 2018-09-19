var Koa = require('koa');
var app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    // TODO: we may want to do something with the error here
    throw e
  }
})

var ap = require('./controllers/ap')
app.use(ap.routes())
app.use(ap.allowedMethods());
var auth = require('./controllers/auth')
app.use(auth.routes())
app.use(auth.allowedMethods());

app.listen(process.env.PORT);

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});