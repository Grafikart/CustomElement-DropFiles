import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import inlineSvg from 'rollup-plugin-inline-svg'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import pkg from './package.json'

const isDev = process.env.ROLLUP_WATCH === 'true'

export default {
  input: './src/index.ts',
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: isDev
  },
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    postcss(),
    inlineSvg(),
    isDev ? serve() : null,
    isDev ? livereload() : null
  ]
}
