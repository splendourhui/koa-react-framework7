/**
 * Created by SamChan on 15/9/9.
 */

"use strict";
const jade = require('jade');
const path = require('path');

exports.index = function *() {
  let isAndroid = this.header['user-agent'].toLowerCase().indexOf('android') >= 0;
  this.body = jade.renderFile('views/index.jade', {
    isAndroid
  });
};
