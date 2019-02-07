# svg-el
a handy tool to create svg element

## Motivation

There's aleary a package [svg](https://www.npmjs.com/package/svg). But:

1. at current time, [this package can't handle surrounding spaces](https://github.com/npm-dom/svg/issues/2), this forbid me to use template string (or I need to remember to trim the string, this is a little confusing).

2. I feel a little inconvenient to write a bunch of template. instead of:

```javascript
svg(`
  <rect
    width="${width}"
    height="${height}"
    fill="none"
    stroke="${stroke}" />
`)
```

I prefer:

```javascript
svgEl('rect', {
    width,
    height,
    stroke
})
```

## Thanks

https://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element

## Installation

```bash
npm i svg-el
```

## Usage

* esm way

```javascript
import svgEl from 'svg-el'
```

* common js way

```javascript
const svgEl = require('svg-el')
```

## API

### svgEl(tagName, attributes)

#### parameters

* tagName - a valid svg element tag
* attributes - attributes to be set

#### return value

newly created svg element

## Developement

```bash
$ git clone https://github.com/xiechao06/svg-el.git
$ cd svg-el
$ npm test # test
$ npm build # build
```
