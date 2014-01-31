
describe('load-pixel', function(){
  var pixel = require('load-pixel');
  var assert = require('assert');
  var protocol = 'file:' != location.protocol
    ? location.protocol
    : 'http:';

  it('should work', function(done){
    var path = protocol + '//facebook.com/offsite_event.php';
    var load = pixel(path);
    var img = load({ value: 80, id: 200 }, done);
    assert(path + '?value=80&id=200' == img.src);
  })

  it('should error', function(done){
    var load = pixel('baz');
    var img = load({}, function(err){
      if (!err) return done(new Error('expected an error'));
      assert(err instanceof Error);
      assert('error' == err.event.type);
      assert(err.source == img);
      done();
    });
  })
});
