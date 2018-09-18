var Koa = require('koa');
var app = new Koa();

var ap = require('./controllers/ap')

app.use(ap.routes())
app.use(ap.allowedMethods());

// app.use(ifttt.routes())
// app.use(ifttt.allowedMethods());

app.listen(process.env.PORT);

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});