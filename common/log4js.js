'use strict'

let log4js = require('log4js');
let util = require('util');
let date = require('./date_format.js');

// date, addr, method, url, HTTP/version, content-length, user-agent
const DEFAULT = "%s : %s %s %s -- %s %s\n    HTTP/%s %s";
/*
* middleware
*/
module.exports = function(opts){
  let logger;
  if(!opts) {
    logger = log4js.getLogger();  // 默认使用 console logger
  } else {
    var loggerName = 'logger';
    log4js.configure({
      appenders: [
      {
        type: 'console'
      },
      {
        type: 'dateFile',
        filename: opts.filename,
        pattern: opts.pattern || "_yyyy-MM-dd",
        alwaysIncludePattern: false,
        maxLogSize: opts.size || 10*1024*1024,
        backups: opts.backups || 4
      }
      ],
      replaceConsole: true
    });
    logger = log4js.getLogger(loggerName);
  }

  return function* (next) {
    let req = this.request;
    let res = this.response;
    let username = this.cookies.get('username');
    let header = req.header;
    let nodeReq = this.req;
    yield next;
    let str = util.format(DEFAULT, username, res.status, date.asString(new Date),
      req.ip, req.method, req.url,
      nodeReq.httpVersion, header['user-agent']);

    let staticPath = opts.staticPath || [];
    let showLog = true;
    for(var path of staticPath) {
      if (req.url.indexOf(path) === 0) {
        showLog = false;
      }
    }
    if (showLog) {
      logger.debug(str);
    }
  }
}
