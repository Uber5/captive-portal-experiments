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

var splash = require('./controllers/splash')
app.use(splash.routes())
app.use(splash.allowedMethods());
var auth = require('./controllers/auth')
app.use(auth.routes())
app.use(auth.allowedMethods());

const port = process.env.PORT
app.listen(port);
console.log('listening, port', port);

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});