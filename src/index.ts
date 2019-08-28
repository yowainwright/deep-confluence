/**
 * @name Deep Confluence 🖤
 * @description Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 */

type $FIXME = any
/**
  * @name isMergeable
  * @param {obj} obj
  */

const isMergeable = (obj: $FIXME) => obj !== null && typeof obj === 'object' && !(obj.then instanceof Function)

/**
 * @name deepConfluence
 * @param {obj}
 * @param {args} obj(s)
 */
export default function deepConfluence (obj: $FIXME = {}, ...args: $FIXME) {
  // the initial object must be an object
  if (!isMergeable(obj)) return
  args.forEach((item: $FIXME) => {
    for (const key in item) {
      const itemProperty = item[key]
      obj[key] = typeof itemProperty === 'object'
        ? deepConfluence(obj[key], itemProperty)
        : itemProperty
    }
  })
  return obj
}
