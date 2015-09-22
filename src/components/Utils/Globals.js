
"use strict";

class Global {
  constructor() {
    this['app'] = null;
    this['mainView'] = null;
    this['isAndroid'] = null;
  }

  getApp() {
    return this['app'];
  }
  setApp(obj) {
    this['app'] = obj;
  }

  getMainView() {
    return this['mainView'];
  }
  setMainView(obj) {
    this['mainView'] = obj;
  }

  getIsAndroid() {
    return this['isAndroid'];
  }
  setIsAndroid(obj) {
    this['isAndroid'] = obj;
  }
}

let globals = new Global();

module.exports = globals;
