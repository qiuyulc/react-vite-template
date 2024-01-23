/* eslint-env node */

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended', //配置prettier和eslint的适配问题
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true,
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.less'],
    },
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        "linebreak-style": ["error", "unix"],
        '@typescript-eslint/no-unsafe-member-access': 'off', //禁止成员访问类型 any 为 的值。
        '@typescript-eslint/no-unsafe-return': 'off', //不允许从函数返回具有类型的 any 值。
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-explicit-any': 'off', //禁止键入。 any
        // "@typescript-eslint/no-unused-vars": "off"
    },
};
