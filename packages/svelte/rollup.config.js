import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import buble from '@rollup/plugin-buble';
import svelte from 'rollup-plugin-svelte';

import pkg from './package.json';

const name = pkg.name.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3Pickr');

export default {
    input: 'src/index.js',
    output: [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd', name, globals: { '@simonwep/pickr': 'Pickr' } },
        // { file: pkg.tests, format: 'iife', name, globals: { '@simonwep/pickr': 'Pickr' } }
    ],
    plugins: [
        svelte(), // Compile svelte files
        json(), // Import Json files as module
        // Resolve dependencies
        resolve({
			browser: true,
			dedupe: ['svelte']
		}),
        commonjs(),
        buble({ // IE11 support
            transforms: {
                dangerousForOf: true
            }
        })
    ],
    external: Object.keys(pkg.dependencies)
};