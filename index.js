/**
  deep-confluence - Merge objects—deeply 🖤
  @version v0.0.1
  @link https://github.com/yowainwright/deep-confluence#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
"use strict";function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function deepExtend(){for(var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return e.forEach(function(t){for(var e in t){var n=t[e];o[e]="object"===_typeof(n)?o[e]=deepExtend(o[e],n):o[e]=n}}),o}module.exports=deepExtend;
