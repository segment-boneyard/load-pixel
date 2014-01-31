
/**
 * Module dependencies.
 */

var stringify = require('querystring').stringify;

/**
 * Factory function to create a pixel loader.
 *
 * @param {String} path
 * @return {Function}
 * @api public
 */

module.exports = function(path){
  return function(query, fn){
    fn = fn || function(){};
    var img = new Image;
    img.onerror = error(fn, 'failed to load pixel', img);
    img.onload = function(){ fn(); };
    img.src = path + '?' + stringify(query);
    img.width = 1;
    img.height = 1;
    return img;
  };
};

/**
 * Create an error handler.
 *
 * @param {Fucntion} fn
 * @param {String} message
 * @param {Image} img
 * @return {Function}
 * @api private
 */

function error(fn, message, img){
  return function(e){
    e = e || window.event;
    var err = new Error(message);
    err.event = e;
    err.source = img;
    fn(err);
  };
}
