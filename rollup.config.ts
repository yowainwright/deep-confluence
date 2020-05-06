import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2'

import {
  author,
  description,
  homepage,
  license,
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

const banner = `/**
  ${name} - ${description}
  @version v${version}
  @link ${homepage}
  @author ${author}
  @license ${license}
**/`

const ensureArray = (maybeArr) =>
  Array.isArray(maybeArr) ? maybeArr : [maybeArr]

const createConfig = ({ input, output, env }) => {
  const plugins = [typescript({ useTsconfigDeclarationDir: true })]

  if (env === 'production') plugins.push(uglify(uglifyOutput))

  return {
    input,
    plugins,
    output: ensureArray(output).map((format) =>
      Object.assign({}, format, {
        banner,
        name,
      })
    ),
  }
}

export default [
  createConfig({
    input: 'src/index.ts',
    output: { file: unpkg, format: 'umd' },
    env: 'production',
  }),
  createConfig({
    input: 'src/index.ts',
    output: { file: module, format: 'es' },
    env: 'common',
  }),
]
