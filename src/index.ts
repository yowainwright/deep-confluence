/**
 * @name Deep Confluence 🖤
 * @description Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 */

type MaybeObject = object | any
/**
  * @name isMergeable
  * @param {obj} obj
  */

const isMergeableObject = (obj: MaybeObject): boolean => obj !== null && typeof obj === 'object'

/**
 * @name deepConfluence
 * @param {obj}
 * @param {args} obj(s)
 */
export default function deepConfluence (obj: MaybeObject, otherObj: MaybeObject): object | null {
  if (!isMergeableObject(obj)) return null
  if (!isMergeableObject(otherObj)) return obj
  Object.keys(otherObj).map((key) => {
    const otherObjProperty = otherObj[key]
    obj[key] = isMergeableObject(otherObjProperty)
      ? deepConfluence(obj[key], otherObjProperty)
      : otherObjProperty
  })
  return obj
}
