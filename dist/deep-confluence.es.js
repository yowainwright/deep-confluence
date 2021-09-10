/**
  deep-confluence - Merge objects—deeply 🖤
  @version v1.2.3
  @link https://github.com/yowainwright/deep-confluence#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @name Deep Confluence 🖤
 * @description Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 */
var isArray = function (item) { return Array.isArray(item); };
var isObject = function (item) {
    return item !== null && typeof item === 'object' && !isArray(item);
};
var filterArray = function (arr) {
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
};
/**
 * @name deepConfluence
 * @param {item}
 * @param {otherItem} obj(s)
 */
function deepConfluence(item, otherItem) {
    if ((!isObject(item) && !isArray(item)) ||
        (!isObject(otherItem) && !isArray(otherItem)))
        return item;
    if (isArray(item) && isArray(otherItem))
        return filterArray(__spreadArrays(item, otherItem));
    return filterArray(__spreadArrays(Object.keys(item), Object.keys(otherItem))).reduce(function (acc, key) {
        if (key === '__proto__') {
            acc = otherItem;
        }
        else if (typeof acc[key] === 'undefined') {
            acc[key] = otherItem[key];
        }
        else if (isObject(acc[key]) || isArray(acc[key])) {
            acc[key] = deepConfluence(item[key], otherItem[key]);
        }
        else if (acc[key] !== otherItem[key] &&
            typeof otherItem[key] !== 'undefined') {
            acc[key] = otherItem[key];
        }
        return acc;
    }, item);
}

export default deepConfluence;
