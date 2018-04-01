import deepConfluence from '../index.js'

// current deep-extend test
const testDeeply = [
  {
    lonelyObj1: {
      broken: true,
      alone: true,
      complex: {
        cats: true,
        dogs: false,
      },
    },
    lonelyObj2: {
      broken: false,
      alone: false,
      complex: {
        noPets: true,
        likesCats: true,
      },
    },
    expected: { 'alone': false, 'broken': false, 'complex': { 'cats': true, 'dogs': false, 'likesCats': true, 'noPets': true } },
  },
  {
    lonelyObj1: {
      broken: true,
      alone: true,
      complex: {
        cats: true,
        dogs: false,
      },
      likes: [
        'walks',
        'talks',
      ],
    },
    lonelyObj2: {
      broken: false,
      alone: false,
      complex: {
        noPets: true,
        likesCats: true,
      },
    },
    expected: { 'alone': false, 'broken': false, 'complex': { 'cats': true, 'dogs': false, 'likesCats': true, 'noPets': true }, 'likes': ['walks', 'talks'] },
  },
  {
    lonelyObj1: {
      broken: true,
      alone: true,
      complex: {
        cats: true,
        dogs: false,
      },
      likes: [
        'walks',
        'talks',
      ],
    },
    lonelyObj2: {
      broken: false,
      alone: false,
      complex: {
        noPets: true,
        likesCats: true,
      },
      likes: [
        'jumping',
        'running',
      ],
    },
    { "alone": false, "broken": false, "complex": { "cats": true, "dogs": false, "likesCats": true, "noPets": true }, "likes": ["jumping", "running"] },
  },
]
testDeeply.forEach(obj => {
  test(`deep-extend, test ${obj}`, () => {
    const result = deepConfluence(obj.lonelyObj1, obj.lonelyObj2)
    expect(result).toEqual(obj.expected)
  })
})
