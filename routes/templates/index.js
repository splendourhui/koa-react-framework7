"use strict";

const ctrl = require('./controller');

module.exports = router => {
  router.get('/pages/:name', ctrl.loadPage);
};
