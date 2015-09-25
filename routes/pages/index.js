
"use strict";

const ctrl = require('./controller');

module.exports = (router) => {
  router.get('/', ctrl.index);
};
