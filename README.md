# Deep Confluence

> Merges objects—deeply 🖤

Deep Confluence is a Javascript Utility Method to deeply merge objects. It is not intended to change lives, be better than other deep merge utilities, or s**t on the code you wrote yesterday.

Where other deep merge utilities might take a bit to groc for the simple function you desire, you can view Deep Confluence's few lines of code and feel at ease saying "yes" **OR** "no"—but, say "yes".

## Usage

```shell
npm i deep-confluence -D
```

```javascript
import deepConfluence from 'deep-confluence'

const lonelyObj1 = {
  broken: true,
  alone: true,
  complex: {
    cats: true,
    dogs: false,
  },
}
const lonelyObj2 = {
  broken: false,
  alone: false,
  complex: {
    noPets: true,
    likesCats: true,
  }
}

const youreNotAlone = deepCongluence(lonelyObj1, lonelyObj2) // 🖤🖤
```

## Fin
