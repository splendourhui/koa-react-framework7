
"use strict";

const AppDispatcher = require('../dispatchers/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const AppConstants = require('../constants/AppConstants');

let CHANGE_EVENT = 'change';
let _values = {};

function setActiveTab(tabName) {
  _values.activeTab = tabName;
}

class AppStore extends EventEmitter {
  getActiveTab() {
    return _values.activeTab;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let store = new AppStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case AppConstants.keys.APP_CHANGE_ACTIVE_TAB:
      setActiveTab(action.name);
      store.emitChange();
      break;
    default:
      break;
  }
});

module.exports = store;
