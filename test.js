const Koa = require('koa');

// const duingSDK = require('duing-sdk');
const duingSDK = require('./index');

const app = new Koa();

app.use(async ctx => {
  // 使用原生的 request 与 response
  duingSDK(ctx.req, ctx.res);
});

app.listen(3000);