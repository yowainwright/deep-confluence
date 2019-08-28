/**
  deep-confluence - Merge objects—deeply 🖤
  @version v1.0.1
  @link https://github.com/yowainwright/deep-confluence#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/**
 * @name Deep Confluence 🖤
 * @description Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 */
/**
  * @name isMergeable
  * @param {obj} obj
  */
var isMergeable = function (obj) { return obj !== null && typeof obj === 'object' && !(obj.then instanceof Function); };
/**
 * @name deepConfluence
 * @param {obj}
 * @param {args} obj(s)
 */
function deepConfluence(obj) {
    if (obj === void 0) { obj = {}; }
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // the initial object must be an object
    if (!isMergeable(obj))
        return;
    args.forEach(function (item) {
        for (var key in item) {
            var itemProperty = item[key];
            obj[key] = typeof itemProperty === 'object'
                ? deepConfluence(obj[key], itemProperty)
                : itemProperty;
        }
    });
    return obj;
}

export default deepConfluence;
