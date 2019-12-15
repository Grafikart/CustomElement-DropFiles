import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import inlineSvg from 'rollup-plugin-inline-svg'
import pkg from './package.json'
import dev from 'rollup-plugin-dev'
import livereload from 'rollup-plugin-livereload'

const isDev = process.env.ROLLUP_WATCH === 'true'

export default {
  input: './src/index.ts',
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: isDev,
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    postcss(),
    inlineSvg(),
    dev(),
    // isDev ? livereload() : null
  ],
}
