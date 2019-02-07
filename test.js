import test from 'tape'
import svgEl from './index'
import Window from 'window'
import { parse } from 'style-attr'

test('basic', t => {
  let window = new Window()
  let el = svgEl('rect', {
    width: 100,
    height: 200,
    style: {
      fill: 'none',
      stroke: 'red'
    },
    x: null
  }, window)
  t.equal(el.tagName, 'rect')
  t.equal(el.getAttribute('width'), '100')
  t.equal(el.getAttribute('height'), '200')
  t.deepEqual(parse(el.getAttribute('style')), {
    fill: 'none',
    stroke: 'red'
  })
  t.false(el.hasAttribute('x'))
  t.end()
})

test('style is a string', t => {
  let window = new Window()
  let el = svgEl('rect', {
    style: 'fill: none; stroke: red;'
  }, window)
  t.deepEqual(parse(el.getAttribute('style')), {
    fill: 'none',
    stroke: 'red'
  })
  t.end()
})

test('only valid svg element is allowed', t => {
  t.throws(() => svgEl('foo', null, new Window()), /foo is not a valid svg tag name/)
  t.end()
})
