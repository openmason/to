/*!
 * to.js - json parser
 *  
 * Copyright(c) 2012 Truepattern
 * MIT Licensed
 */


// json parser wrapper
// - load(filename)
// - load(data)
// - stringify(doc)

// please note that if the extension is NOT json
// it wouldn't load
exports.load = function(filename) {
  try {
    doc = require(filename);
    return doc;
  } catch (e) {
    console.log(e.stack || e.toString());
  }
};

exports.stringify = function(doc) {
  return JSON.stringify(doc,null,2);
};
