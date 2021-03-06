import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { version, name } from './package.json';

const input = './src/index.ts';
const tsPlugin = typescript({ module: 'es2015' });
const output = {
	banner: `/* ${name} version ${version} Copyright (c) Keimeno\n   licensed under Apache-2.0 http://www.apache.org/licenses/LICENSE-2.0 */`,
	name: 'neojax'
};

const plugins = compress =>
	[tsPlugin].concat(
		compress
			? [
					terser({
						output: {
							comments: function(node, comment) {
								var text = comment.value;
								return /Copyright \(c\) Keimeno/i.test(text);
							}
						}
					})
			  ]
			: []
	);

export default [
	{
		input,
		plugins: plugins(true),
		output: Object.assign({}, output, {
			file: 'dist/neojax.umd.js',
			format: 'umd'
		})
	},
	{
		input,
		plugins: plugins(false),
		external: ['unfetch/polyfill'],
		output: Object.assign({}, output, {
			exports: 'named',
			file: 'dist/neojax.es.js',
			format: 'esm'
		})
	}
];
