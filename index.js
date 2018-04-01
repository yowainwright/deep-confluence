/*
  bools 👻
  ====
  - isObj = bool:checks if the item being looped in an {object}
  - isArray = bool:checks if the item being looped in an [array]
*/
export const isObj = (o) => typeof o === 'object'
export const isArr = (a) => Array.isArray(a)

export default function deepConfluence (obj = {}, ...args) {
  args.forEach(item => {
    // is {object}? 🤷🏽‍
    if (isObj(item)) {
      // iterate {item} properties
      for (const prop in item) {
        const piece = item[prop]
        obj[prop] = isObj(piece)
          // merge new {object}
          ? deepConfluence(obj[prop], piece)
          : piece
      }
    // is [array]? 🤷🏽‍
    } else if (isArr(item)) {
      // el = Array elements
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      item.forEach(el => {
        // if el is {obj} (in an array of objs) => recursion
        obj[item] = isObj(el) || isArr(el)
          ? deepConfluence(obj[item], el)
          : el
      })
    }
  })
  return obj
}
