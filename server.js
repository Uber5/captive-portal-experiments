var Koa = require('koa');

var app = new Koa();

// app.use(pings.routes())
// app.use(pings.allowedMethods());

// app.use(ifttt.routes())
// app.use(ifttt.allowedMethods());

app.listen(process.env.PORT);

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});