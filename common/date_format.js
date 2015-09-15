"use strict";
exports.ISO8601_FORMAT = "yyyy-MM-dd hh:mm:ss.SSS";
exports.ISO8601_WITH_TZ_OFFSET_FORMAT = "yyyy-MM-ddThh:mm:ssO";
exports.DATETIME_FORMAT = "dd MM yyyy hh:mm:ss.SSS";
exports.ABSOLUTETIME_FORMAT = "hh:mm:ss.SSS";

function padWithZeros(vNumber, width) {
  let numAsString = vNumber + "";
  while (numAsString.length < width) {
    numAsString = "0" + numAsString;
  }
  return numAsString;
}

function addZero(vNumber) {
  return padWithZeros(vNumber, 2);
}

/**
 * Formats the TimeOffest
 * Thanks to http://www.svendtofte.com/code/date_format/
 * @private
 */
function offset(date) {
  // Difference to Greenwich time (GMT) in hours
  let os = Math.abs(date.getTimezoneOffset());
  let h = String(Math.floor(os/60));
  let m = String(os%60);
  if (h.length == 1) {
    h = "0" + h;
  }
  if (m.length == 1) {
    m = "0" + m;
  }
  return date.getTimezoneOffset() < 0 ? "+"+h+m : "-"+h+m;
}

exports.asString = function(/*format,*/ date) {
  let format = exports.ISO8601_FORMAT;
  if (typeof(date) === "string") {
    format = arguments[0];
    date = arguments[1];
  }

  let vDay = addZero(date.getDate());
  let vMonth = addZero(date.getMonth()+1);
  let vYearLong = addZero(date.getFullYear());
  let vYearShort = addZero(date.getFullYear().toString().substring(2,4));
  let vYear = (format.indexOf("yyyy") > -1 ? vYearLong : vYearShort);
  let vHour  = addZero(date.getHours());
  let vMinute = addZero(date.getMinutes());
  let vSecond = addZero(date.getSeconds());
  let vMillisecond = padWithZeros(date.getMilliseconds(), 3);
  let vTimeZone = offset(date);
  let formatted = format
    .replace(/dd/g, vDay)
    .replace(/MM/g, vMonth)
    .replace(/y{1,4}/g, vYear)
    .replace(/hh/g, vHour)
    .replace(/mm/g, vMinute)
    .replace(/ss/g, vSecond)
    .replace(/SSS/g, vMillisecond)
    .replace(/O/g, vTimeZone);
  return formatted;

};
