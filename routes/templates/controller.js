"use strict";
const jade = require('jade');

exports.loadPage = function *() {
  let name = this.params.name;
  let title = this.query.title || 'koa-react';
  let id = this.query.id;

  this.body = jade.renderFile(`public/tpls/page.jade`, {
    title,
    id,
    pageName: name,
    isAndroid: this.header['user-agent'].toLowerCase().indexOf('android') >= 0
  });
};
