import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss'
import inlineSvg from 'rollup-plugin-inline-svg';

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/drop-files-element.js',
    format: 'es'
  },
  plugins: [
    typescript(),
    postcss(),
    inlineSvg(),
  ]
}
