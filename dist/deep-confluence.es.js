/**
  deep-confluence - Merge objects—deeply 🖤
  @version v1.1.1
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
var isMergeableObject = function (obj) { return obj !== null && typeof obj === 'object'; };
/**
 * @name deepConfluence
 * @param {obj}
 * @param {args} obj(s)
 */
function deepConfluence(obj, otherObj) {
    if (!isMergeableObject(obj))
        return null;
    if (!isMergeableObject(otherObj))
        return obj;
    Object.keys(otherObj).map(function (key) {
        var otherObjProperty = otherObj[key];
        obj[key] = isMergeableObject(otherObjProperty)
            ? deepConfluence(obj[key], otherObjProperty)
            : otherObjProperty;
    });
    return obj;
}

export default deepConfluence;
