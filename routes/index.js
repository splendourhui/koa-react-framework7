
"use strict";

module.exports = (router) => {
  require('./pages')(router);
  require('./templates')(router);
};
