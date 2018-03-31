export default function deepExtend (obj = {}, ...args) {
  args.forEach(item => {
    // iterate {item} properties
    for (const prop in item) {
      const piece = item[prop]
      obj[prop] = typeof piece === 'object'
        // merge new {object}
        ? deepExtend(obj[prop], piece)
        : piece
    }
  })
  return obj
}
