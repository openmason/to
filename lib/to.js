/**
 * to.js - copyright(c) 2012 truepattern.
 * MIT Licensed
 */

//
// To
//

/** Todo's 
*/

// dependencies
var path = require('path');
var basename = path.basename;
var fs = require('fs');

/**
 *  Auto-load formats available
 */
exports.format = {};

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

/* Load a given file
 */
exports.load = function(filename) {
};