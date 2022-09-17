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
            },
            {
                file: './lib/index.esm.js',
                format: 'es',
            }
        ],
        external: ['react']
    },
]