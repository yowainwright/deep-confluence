/**
 * # Deep Confluence 🖤
 * ====
 * > Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 * */


 /**
  *
  * @param {obj} obj
  */
const isMergeable = (obj) => Array.isArray(obj) || (obj !== null && typeof obj === 'object' && !(o.then instanceof Function))

/**
 * @param {obj}
 * @param {args} array
*/
export default function deepConfluence(obj = {}, ...args) {
  // the initial object must be an object
  if (Array.isArray(obj) || !isMergeable(obj)) return
  args.forEach(item => {
    // skip items that aren't mergeable
    if (!isMergeable(item)) continue
    for (const key in item) {
      const piece = item[key]
      obj[key] = typeof piece === 'object'
        ? deepConfluence(obj[key], piece)
        : piece
    }
  })
  return obj
}
