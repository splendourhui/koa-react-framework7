/**
 * Created by SamChan on 15/9/11.
 */

"use strict";

const co = require('co');
const request = require('superagent');

module.exports = function *(next) {
  let code = this.request.query.code;
  let ctx = this;
  yield co(function *() {
    let username = yield sendVerifyRequest(code);
    ctx.cookies.set('username', username);
    yield next;
  }).catch((err) => {
    ctx.throw(401, err);
  });
};

function sendVerifyRequest(code) {
  return new Promise((resolve, reject) => {
    request
      .get('http://wxqyh.cvte.com/apis/utils/verification')
      .query({
        code,
        appName: 'sixDev'
      })
      .end((err, result) => {
        if (err) {
          console.trace(err);
          reject(err.response.body.errMessage);
        } else {
          if (result.body) {
            resolve(result.body.data);
          } else {
            reject(result.text)
          }
        }
      });
  });
}
