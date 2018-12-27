/**
 * # Deep Confluence 🖤
 * ====
 * > Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 * @param {obj}
 * @param ...args (other {obj}s)
 * */
export default function deepConfluence (obj = {}, ...args) {
  args.forEach(item => {
    for (const prop in item) {
      const piece = item[prop]
      obj[prop] = typeof piece === 'object'
        ? deepConfluence(obj[prop], piece)
        : piece
    }
  })
  return obj
}
