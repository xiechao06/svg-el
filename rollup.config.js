import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import json from 'rollup-plugin-json'

export default [
  {
    input: pkg.source,
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    plugins: [
      babel()
    ],
    external: ['style-attr', 'svg-tags']
  },
  {
    input: pkg.source,
    output: {
      file: pkg.module,
      format: 'esm'
    },
    plugins: [
      babel()
    ],
    external: ['style-attr', 'svg-tags']
  },
  {
    input: pkg.source,
    output: {
      file: 'dist/svg-el.browser.js',
      format: 'iife',
      name: 'svgEl'
    },
    plugins: [
      babel(),
      resolve(),
      commonjs(),
      json()
    ]
  },
  {
    input: pkg.source,
    output: {
      file: 'dist/svg-el.browser.min.js',
      format: 'iife',
      name: 'svgEl'
    },
    plugins: [
      babel(),
      resolve(),
      commonjs(),
      json(),
      uglify()
    ]
  }
]
