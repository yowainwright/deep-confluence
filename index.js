export default function deepExtend (obj = {}, ...args) {
  args.forEach(item => {
    // iterate {item} properties
    for (const prop in item) {
      const piece = item[prop]
      obj[prop] = typeof piece === 'object'
        // merge new {object}
        ? obj[prop] = deepExtend(obj[prop], piece)
        : obj[prop] = piece
    }
  })
  return obj
}
