/**
  deep-confluence - Merge objects—deeply 🖤
  @version v1.0.1
  @link https://github.com/yowainwright/deep-confluence#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * # Deep Confluence 🖤
 * ====
 * > Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 */

/**
  *
  * @param {obj} obj
  */
var isMergeable = function isMergeable(obj) {
  return obj !== null && _typeof(obj) === 'object' && !(obj.then instanceof Function);
};
/**
 * @param {obj}
 * @param {args} array
 */


function deepConfluence() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // the initial object must be an object
  if (!isMergeable(obj)) return;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args.forEach(function (item) {
    for (var key in item) {
      var itemProperty = item[key];
      obj[key] = _typeof(itemProperty) === 'object' ? deepConfluence(obj[key], itemProperty) : itemProperty;
    }
  });
  return obj;
}

export default deepConfluence;
