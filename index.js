/*
  # deepConfluence 🖤
  ====
  > Deep Confluence is a Javascript Utility Method to deeply merge objects.
  - meant for: legibility, simplicity, testability, and utility
  - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
  - usecase/audiance: I want to use a bare-bones deep extend method that I can understand
*/
export default function deepConfluence (obj = {}, ...args) {
  args.forEach(item => {
    for (const prop in item) {
      const piece = item[prop]
      obj[prop] = typeof piece === 'object'
        // merge new {object} recursively
        ? deepConfluence(obj[prop], piece)
        // or, add prop
        : piece
    }
  })
  return obj
}
