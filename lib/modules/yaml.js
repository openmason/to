/*!
 * to.js - yaml parser 
 * Copyright(c) 2012 Truepattern
 * MIT Licensed
 */

var yaml = require('yamljs');

// yaml parser wrapper
// - load(filename)
// - load(data)
// - stringify(doc)

// please note that if the extension is NOT yml/yaml
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
  return yaml.stringify(doc, 2);
};
