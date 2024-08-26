import antfu from '@antfu/eslint-config'

// import { FlatCompat } from '@eslint/eslintrc'

// const compat = new FlatCompat()

export default antfu(
    {
    // Enable stylistic formatting rules
    // stylistic: true,

        // Or customize the stylistic rules
        stylistic: {
            indent: 4, // 4, or 'tab'
            quotes: 'single', // or 'double'
            semi: false,
            // braceStyle: '1tbs', // doesn't work somehow
            // commaDangle: 'only-multiline', // doesn't work somehow
        },

        // Language support
        typescript: true,
        svelte: true,
        // jsonc: false,
        // yaml: false,

        // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
        ignores: [
            './fixtures',
            '.DS_Store',
            'node_modules',
            '/build',
            '/.svelte-kit',
            '/package',
            '.env',
            '.env.*',
            '!.env.example',
            'pnpm-lock.yaml',
            'package-lock.json',
            'yarn.lock',
            'bun.lockb',
        ],
    },

    // Legacy config
    // ...compat.config({
    //   extends: [
    //     'eslint:recommended',
    //     // Other extends...
    //   ]
    // }),

    // Other flat configs...
    {
        rules: {
            'style/brace-style': [
                'warn',
                '1tbs', // '1tbs', 'stroustrup', 'allman'
                { allowSingleLine: true },
            ],
            'style/comma-dangle': [
                'warn',
                'only-multiline' // 'always-multiline', 'only-multiline', 'always', 'never'
            ],
            'linebreak-style': ['error', 'unix'],
            'curly': ['warn', 'all'],
            'style/max-statements-per-line': ['warn', { max: 2 }],
            'no-console': 'off',
        }
    },
    {
        files: ['**/*.svelte'],
        rules: {
            'svelte/html-quotes': [
                'error',
                { prefer: 'double' },
            ],
            'svelte/max-attributes-per-line': [
                'error',
                {
                    multiline: 1,
                    singleline: 1
                }
            ],
            'svelte/first-attribute-linebreak': [
                'error',
                {
                    multiline: 'below',
                    singleline: 'beside'
                }
            ],
        },
    }
)
