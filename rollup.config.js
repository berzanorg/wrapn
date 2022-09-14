/**
 * @type {import('rollup').RollupOptions}
 */
export default [
    {
        input: './ts/index.js',
        output: [
            {
                file: './lib/index.cjs.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: './lib/index.esm.js',
                format: 'es',
                sourcemap: true,
            }
        ],
        external: ['react']
    },
]