
"use strict";

const http = require('http');
const path = require('path');
const koa = require('koa');
const middlewares = require('koa-middlewares');
const router = middlewares.router();

const logger = require('./common/log4js');
const config = require('./config');

let app = koa();

/**
 * response time header
 */
app.use(middlewares.rt());

app.use(middlewares.compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}));

/**
 * static file server
 */
app.use(middlewares.staticCache(path.join(__dirname, 'public')));
app.use(middlewares.bodyParser());

app.use(logger({
  filename: 'logs/logger.log',
  staticPath: [
    '/img',
    '/js',
    '/lib',
    '/css'
  ]
}));

app.use(function *(next) {
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log(`${this.cookies.get('username')} :`
    +` ${this.method} ${this.url} - ${ms}ms`);
});

require('./routes')(router);
app.use(router.routes());

app = module.exports = http.createServer(app.callback());
if (!module.parent) {
  app.listen(config.port);
  console.log(`$ open http://127.0.0.1:${config.port}`);
}
