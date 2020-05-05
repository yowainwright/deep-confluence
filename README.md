![Deep Confluence](https://jeffry.in/deep-confluence/deep-confluence.svg)

# Deep Confluence [![codecov](https://codecov.io/gh/yowainwright/deep-confluence/branch/master/graph/badge.svg)](https://codecov.io/gh/yowainwright/deep-confluence)

## A JavaScript Utility Method to deeply merge objects

Where other deep merge utilities might take a bit to groc for the simple function you desire,<br />
you can view Deep Confluence's few lines of code and feel at ease saying "yes" **OR** "no"—but, say "yes".

---

## Install

```shell

yarn deep-confluence -D

```

---

## Problem: there are 2 lonely _deep_ objects

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
  },
}
```

## Fix: Deep Confluence

Invoke **Deep Confluence** and merge two lonely objects deeply into 1. 🖤

```javascipt

const youreNotAlone = deepConfluence(lonelyObj1, lonelyObj2)

```

Which outputs

```javascript

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

---

## Examples

Here's a [CodePen](https://codepen.io/yowainwright/pen/MVVjOP/).

Take it Deep Confluence for a test drive.<br />
Feel free to use the example to point out issues or request features.

---

**Note:** Deep Confluence's goal is simplicity!

- If you have lodash, and don't mind a little size, use [\_.merge](https://www.npmjs.com/package/lodash.merge)!
- If you want a utility smaller than `_.merge` but more supportive than **deep-confluence** use [deepMerge](https://github.com/KyleAMathews/deepmerge/).

Deep confluence is a **"try it first, don't make you think about it"** utility.
