
const Koa = require('koa');

const server = new Koa();

server.use(async ctx => (ctx.body = "Hello Koa App"));

server.listen(3000, () => console.log('Server is running on localhost 3000'));

