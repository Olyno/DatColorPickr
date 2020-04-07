const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
app.use(serve('tests'));
app.listen(3000, () => console.log('> Server at http://localhost:3000'));