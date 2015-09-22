"use strict";
const jade = require('jade');

exports.loadPage = function *() {
  let name = this.params.name;
  let title = this.query.title || 'koa-react';

  this.body = jade.renderFile(`public/tpls/${name}.jade`, {
    name,
    title,
    isAndroid: this.header['user-agent'].toLowerCase().indexOf('android') >= 0
  });
};
