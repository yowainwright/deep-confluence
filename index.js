export default function deepConfluence (obj = {}, ...args) {
  args.forEach(item => {
    // iterate {item} properties
    for (const prop in item) {
      const piece = item[prop]
      obj[prop] = typeof piece === 'object'
        // merge new {object}
        ? deepConfluence(obj[prop], piece)
        : piece
    }
  })
  return obj
}
