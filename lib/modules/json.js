/*!
 * to.js - json parser
 *  
 * Copyright(c) 2012 Truepattern
 * MIT Licensed
 */

var fs = require('fs');

// json parser wrapper
// - load(filename)
// - load(data)
// - stringify(doc)

// please note that if the extension is NOT json
// it wouldn't load
exports.load = function(filename) {
  try {
    var doc = fs.readFileSync(filename, 'utf-8');
    doc = JSON.parse(doc);
    return doc;
  } catch (e) {
    console.log(e.stack || e.toString());
  }
};

exports.stringify = function(doc) {
  return JSON.stringify(doc,null,2);
};
