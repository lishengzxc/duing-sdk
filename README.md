# duing-sdk

## install

```
npm install --save duing-sdk
```

## usage

```js
// demo for koa

const Koa = require('koa');

const duingSDK = require('duing-sdk');

const app = new Koa();

app.use(async ctx => {
  // 使用原生的 request 与 response
  duingSDK(ctx.req, ctx.res);
});

app.listen(3000);
```