![Deep Confluence](https://jeffry.in/deep-confluence/deep-confluence.svg)


# Deep Confluence 🖤

[![Greenkeeper badge](https://badges.greenkeeper.io/yowainwright/deep-confluence.svg)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/yowainwright/deep-confluence/branch/master/graph/badge.svg)](https://codecov.io/gh/yowainwright/deep-confluence)

Deep Confluence is a Javascript Utility Method to deeply merge objects.

Where other deep merge utilities might take a bit to groc for the simple function you desire, you can view Deep Confluence's few lines of code and feel at ease saying "yes" **OR** "no"—but, say "yes".

----

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

// outputs
{
  'alone': false,
  'broken': false,
  'complex': {
    'cats': true,
    'dogs': false,
    'likesCats': true,
    'noPets': true
  }
}

```
----
