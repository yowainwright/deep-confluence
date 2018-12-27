import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import {
  author,
  description,
  homepage,
  license,
  main,
  unpkg,
  module,
  name,
  version,
} from './package.json'

const uglifyOutput = {
  output: {
    comments: (node, comment) => {
      const text = comment.value
      const type = comment.type
      if (type === 'comment2') {
        // multiline comment
        return /@preserve|@license|@cc_on/i.test(text)
      }
    },
  },
}

const babelSetup = {
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false }]],
  exclude: 'node_modules/**',
}

const banner = `/**
  ${name} - ${description}
  @version v${version}
  @link ${homepage}
  @author ${author}
  @license ${license}
**/`

const ensureArray = maybeArr =>
  Array.isArray(maybeArr) ? maybeArr : [maybeArr]

const createConfig = ({ input, output, env } = {}) => {
  const plugins = [
    babel(babelSetup),
  ]

  if (env === 'production') plugins.push(uglify(uglifyOutput))

  return {
    input,
    plugins,
    output: ensureArray(output).map(format =>
      Object.assign(
        {},
        format,
        {
          banner,
          name,
        }
      )
    ),
  }
}

export default [
  createConfig({
    input: 'index.js',
    output: { file: unpkg, format: 'umd' },
    env: 'production',
  }),
  createConfig({
    input: 'index.js',
    output: { file: module, format: 'es' },
  }),
]
