import { stringify } from 'style-attr'
import svgTags from 'svg-tags'

export default function svgEl (tagName, attrs = {}, win = window) {
  if (svgTags.indexOf(tagName) === -1) {
    throw new Error(tagName + ' is not a valid svg tag name')
  }
  let el = win.document.createElementNS('http://www.w3.org/2000/svg', tagName)
  if (attrs) {
    for (let k in attrs) {
      let attr = attrs[k]
      if (attr === null || attr === void 0) {
        continue
      }
      if (k === 'style' && typeof attr === 'object') {
        attr = stringify(attr)
      }
      el.setAttribute(k, attr)
    }
  }
  return el
}
