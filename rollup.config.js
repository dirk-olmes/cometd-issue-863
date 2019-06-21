import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/comet-client.js',
	output: {
		file: 'webapp/comet-bundle.js',
		format: 'iife',
		name: 'cometbundle'
	},
	plugins: [
		nodeResolve(),
		commonjs({
			namedExports: {
				'node_modules/cometd/cometd.js': [ 'CometD' ]
			}
		})
	]
};
