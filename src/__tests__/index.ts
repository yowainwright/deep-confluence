import deepConfluence from '..'

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
        likesCats: true,
      },
    },
    expected: { 'alone': false, 'broken': false, 'complex': { 'cats': true, 'dogs': false, 'likesCats': true } },
  },
  {
    lonelyObj1: {
      bummed: true,
      depressed: true,
      complex: {
        cats: false,
        dogs: true,
      },
      likes: [
        'home',
        'yoga',
      ],
    },
    lonelyObj2: {
      bummed: false,
      depressed: false,
      complex: {
        likesDogs: true,
      },
      likes: [
        'home',
        'yoga',
      ],
    },
    expected: { 'bummed': false, 'depressed': false, 'complex': { 'cats': false, 'dogs': true, 'likesDogs': true }, 'likes': ['home', 'yoga'] },
  },
]
testDeeply.forEach(obj => {
  test(`deep-extend, test ${obj}`, () => {
    const result = deepConfluence(obj.lonelyObj1, obj.lonelyObj2)

    expect(result).toEqual(obj.expected)
  })
})
