
"use strict";

const ctrl = require('./controller');
const wechat_verification = require('../../middlewares/wechat_verification');

module.exports = (router) => {
  router.get('/', ctrl.index);
};
