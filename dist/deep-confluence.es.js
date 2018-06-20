/**
  deep-confluence - Merge objects—deeply 🖤
  @version v0.0.5
  @link https://github.com/yowainwright/deep-confluence#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function deepConfluence(){for(var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];return t.forEach(function(e){for(var t in e){var n=e[t];o[t]="object"===_typeof(n)?deepConfluence(o[t],n):n}}),o}export default deepConfluence;
