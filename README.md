![Deep Confluence](https://jeffry.in/deep-confluence/deep-confluence.svg)

# Deep Confluence ![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555) [![codecov](https://codecov.io/gh/yowainwright/deep-confluence/branch/master/graph/badge.svg)](https://codecov.io/gh/yowainwright/deep-confluence)[![npm version](https://badge.fury.io/js/deep-confluence.svg)](https://badge.fury.io/js/deep-confluence)[![unpkg](https://img.shields.io/badge/unpkg-link-blue.svg)](https://unpkg.com/deep-confluence@latest/dist/deep-confluence.min.js)

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

## Simplicity

Deep Confluence's goal is simplicity!

- If you have lodash, and don't mind a little size, use [\_.merge](https://www.npmjs.com/package/lodash.merge)!
- If you want a utility smaller than `_.merge` but more supportive than **deep-confluence** use [deepMerge](https://github.com/KyleAMathews/deepmerge/).

Deep confluence is a **"try it first, don't make you think about it"** utility.

---

## Known Issues

Deep Confluence does simple Array diffing using filter to get rid of duplicate items. However, if there is an array of Objects, the arrays are merged but duplicate objects are not removed. That can be done by you with custom filtering at your leisure.
