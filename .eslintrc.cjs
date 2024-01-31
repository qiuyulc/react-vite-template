/* eslint-env node */

module.exports = {
  root: true,
  //root: true：告诉 ESLint 这是配置的根，ESLint 将停止在父级目录中寻找配置文件。
  env: { browser: true, es2020: true },
  //指定代码的运行环境，这里配置了 browser: true（可以使用浏览器全局变量）和 es2020: true（启用 ES2020 语法支持）。
  extends: [
    'eslint:recommended',
    // 这是 ESLint 官方推荐的规则集，包含了一组核心规则，旨在捕获 JavaScript 中的常见问题，如未使用的变量、语法错误等。启用这个配置有助于提高代码质量和避免基本的错误。
    'plugin:@typescript-eslint/recommended',
    //这个配置来自 @typescript-eslint/eslint-plugin，它是一个 ESLint 插件，专为 TypeScript 设计。这个推荐规则集包含了一组针对 TypeScript 代码的规则，旨在捕获类型安全以外的常见问题，如命名约定、接口定义等。
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 这也是来自 @typescript - eslint / eslint - plugin 的一个配置，但它包含了一组需要 TypeScript 类型检查器支持的规则。这意味着这些规则会使用 TypeScript 编译器的信息来进行更深入的代码分析，以捕获潜在的类型错误和其他类型相关的问题。这个配置提供了更严格的类型安全检查。
    'plugin:react-hooks/recommended',
    // 这个配置来自 eslint - plugin - react - hooks，它是专门为 React Hooks 设计的 ESLint 插件。这个推荐规则集包含了一组规则，用于确保您正确地使用 React Hooks，如规则 rules - of - hooks 和 exhaustive - deps，旨在帮助开发者避免在使用 Hooks 时遇到的常见问题。
    'plugin:prettier/recommended', //配置prettier和eslint的适配问题
    // 这个配置来自 eslint - plugin - prettier 和 eslint - config - prettier。它首先通过 eslint - plugin - prettier 将 Prettier 作为 ESLint 规则运行，这意味着任何 Prettier 可以修复的代码样式问题都会作为 ESLint 问题报告。其次，通过 eslint - config - prettier 关闭所有与 Prettier 冲突的 ESLint 规则，确保 ESLint 和 Prettier 之间的兼容性，让 Prettier 负责代码样式的问题，而 ESLint 负责代码质量的问题。
  ],
  parser: '@typescript-eslint/parser',
  // '@typescript-eslint/parser'：指定 ESLint 使用的解析器，这里使用的是 TypeScript ESLint 解析器，允许 ESLint 理解 TypeScript 语法。
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.less'],
  },
  //配置解析器选项。ecmaVersion: 'latest' 表示使用最新的 ECMAScript 标准，sourceType: 'module' 表示代码使用 ES 模块，project: true 和 tsconfigRootDir: __dirname 配合使用，指示解析器使用项目的 tsconfig.json 文件，extraFileExtensions: ['.less'] 允许在解析时考虑 .less 文件。
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off', //禁止成员访问类型 any 为 的值。
    '@typescript-eslint/no-unsafe-return': 'off', //不允许从函数返回具有类型的 any 值。
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-explicit-any': 'off', //禁止键入。 any
    // "@typescript-eslint/no-unused-vars": "off"
  },
  //    - 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]：对于 react - refresh 插件，只有导出的组件才会被热更新，这里允许常量导出。
  //    - 'prettier/prettier': ['error', { endOfLine: 'auto' }]：将 Prettier 的错误显示为 ESLint 错误，并自动处理不同操作系统间的行尾差异。
  //    - '@typescript-eslint/no-non-null-assertion': 'off'：关闭 TypeScript 的非空断言检查。
  //    - '@typescript-eslint/no-unsafe-member-access': 'off'：关闭对 any 类型成员访问的限制。
  //    - '@typescript-eslint/no-unsafe-return': 'off'：关闭对从函数返回 any 类型值的限制。
  //    - '@typescript-eslint/no-floating-promises': 'off'：关闭对未处理的 Promise 警告。
  //    - '@typescript-eslint/no-explicit-any': 'off'：允许使用 TypeScript 的 any 类型。
};
