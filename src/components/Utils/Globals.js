
"use strict";

class Global {
  constructor() {
    this['app'] = null;
  }

  getApp() {
    return this['app'];
  }
  setApp(obj) {
    this['app'] = obj;
  }

}

let globels = new Global();

export default globels;
