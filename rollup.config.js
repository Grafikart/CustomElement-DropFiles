import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss'
import inlineSvg from 'rollup-plugin-inline-svg';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/drop-files-element.js',
    format: 'iife'
  },
  plugins: [
    typescript(),
    postcss(),
    inlineSvg(),
    serve(),
    livereload({
      watch: 'dist',
    })
  ]
}
