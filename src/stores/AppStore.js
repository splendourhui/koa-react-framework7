
"use strict";

import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';

let CHANGE_EVENT = 'change';
let _values = {
  activeTab: 'tab1'
};

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

export default store;
