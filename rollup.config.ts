import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser';
import pkg from './package.json';

export default {
  input: 'index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    del({ targets: ['dist/*'] }),
    commonjs(),
    typescript(),
    terser(),
  ],
  external: ['@testing-library/dom', 'jest'],
};
