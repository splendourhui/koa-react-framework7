/**
 * Created by SamChan on 15/9/10.
 */

"use strict";

//let app = Symbol();

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

module.exports = globels;
