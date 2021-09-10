/**
 * @name Deep Confluence 🖤
 * @description Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 */

type Item = any

const isArray = (item: Item): boolean => Array.isArray(item)

const isObject = (item: Item): boolean =>
  item !== null && typeof item === 'object' && !isArray(item)

const filterArray = (arr: Item) =>
  arr.filter(
    (item: unknown, index: number, self: unknown[]) =>
      self.indexOf(item) === index
  )

/**
 * @name deepConfluence
 * @param {item}
 * @param {otherItem} obj(s)
 */
export default function deepConfluence(item: Item, otherItem: Item) {
  if (
    (!isObject(item) && !isArray(item)) ||
    (!isObject(otherItem) && !isArray(otherItem))
  )
    return item

  if (isArray(item) && isArray(otherItem))
    return filterArray([...item, ...otherItem])

  return filterArray([...Object.keys(item), ...Object.keys(otherItem)]).reduce(
    (acc: any, key: any) => {
      if (key === '__proto__') {
        acc = otherItem
      } else if (typeof acc[key] === 'undefined') {
        acc[key] = otherItem[key]
      } else if (isObject(acc[key]) || isArray(acc[key])) {
        acc[key] = deepConfluence(item[key], otherItem[key])
      } else if (
        acc[key] !== otherItem[key] &&
        typeof otherItem[key] !== 'undefined'
      ) {
        acc[key] = otherItem[key]
      }
      return acc
    },
    item
  )
}
