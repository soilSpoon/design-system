import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

/** @type {import('rollup').RollupOptions} */
export default {
  input: './index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    terser(),
    resolve(),
    typescript({ tsconfig: 'tsconfig-rollup.json', sourceMap: false }),
    commonjs({ extensions: ['.js', '.ts'] }),
  ],
};
