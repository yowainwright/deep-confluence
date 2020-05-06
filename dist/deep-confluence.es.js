/**
  deep-confluence - Merge objects—deeply 🖤
  @version v1.2.1
  @link https://github.com/yowainwright/deep-confluence#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

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
        if (typeof acc[key] === 'undefined') {
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
