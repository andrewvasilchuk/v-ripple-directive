import path from 'path'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

const name = 'VRipple'

export default [
  {
    input: path.join(__dirname, '..', 'src', 'index.js'),
    output: [
      {
        file: 'dist/v-ripple-directive.js',
        format: 'umd',
        name,
      },
      {
        file: 'dist/v-ripple-directive.common.js',
        format: 'cjs',
      },
      {
        file: 'dist/v-ripple-directive.esm.js',
        format: 'es',
      },
    ],
  },
  {
    input: path.join(__dirname, '..', 'src', 'index.js'),
    output: {
      file: 'dist/v-ripple-directive.min.js',
      format: 'umd',
      name,
    },
    plugins: [babel({ exclude: 'node_modules/**' }), terser()],
  },
]
