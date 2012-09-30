/**
 * to.js - copyright(c) 2012 truepattern.
 * MIT Licensed
 */

/** Todo's 
*/

// dependencies
var path = require('path');
var basename = path.basename;
var fs = require('fs');
var inspect = require('util').inspect;

/* Holds all available formats
 */
exports.format = {};

// ------------
// All the modules to have the following methods
// - load(filename) 
//     returns the loaded doc
// - stringify(doc)
//     returns the stringified doc
// - support require(filename.format)
//     support require based loading data file
/**
 * Auto-load bundled format.
 */
fs.readdirSync(__dirname + '/modules').forEach(function(filename) {
  if (!/\.js$/.test(filename)) return;
  var name = basename(filename, '.js');
  function load() {
    return require('./modules/' + name);
  }
  exports.format.__defineGetter__(name, load);
});

/* Load given file
 */
exports.load = function(filename) {
};

/* Stringify given doc
 */
exports.stringify = function(doc) {
  return inspect(doc, false, 10, true);
};

/* Version of this lib
 */
exports.version = fs.readFileSync(path.join(__dirname, '..', 'package.json'))
  .toString().match(/"version"\s*:\s*"([\d.]+)"/)[1];

