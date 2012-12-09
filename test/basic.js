var to=require('..');
var assert=require('assert');
var handy=require('handy');

// verify basic functions
// - load
// - stringify
describe('basic', function() {
  before(function(done) {
    done();
  });

  // -- check list of modules
  describe('list of modules', function() {
    it('should return the following modules', function(done) {
      var modulesAvailable = ['json', 'yaml', 'xml'];
      assert.equal(handy.isArrayEqual(Object.keys(to.format), modulesAvailable), true);
      done();
    });
  });

});
