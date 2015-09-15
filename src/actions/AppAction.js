
"use strict";

const AppDispatcher = require('../dispatchers/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let actions = {
  initCurrentTab: (name) => {
    AppDispatcher.dispatch({
      actionType: AppConstants.keys.APP_CHANGE_ACTIVE_TAB,
      name
    });
  }
};

module.exports = actions;
