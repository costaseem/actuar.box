
module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base'
  ],
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': [2, 'windows'],
    'no-debugger': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'no-trailing-spaces': 0,
    'padded-blocks': 0,
    'keyword-spacing': 2,
    'space-before-function-paren': [2, 'always'],
    'spaced-comment': [2, 'always'],
    'vars-on-top': 2,
    'no-undef': 2,
    'comma-dangle': [2, 'never'],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'guard-for-in': 2,
    'no-eval': 2,
    'no-with': 2,
    'valid-typeof': 2,
    'no-unused-vars': 2,
    'no-continue': 1,
    'no-extra-semi': 1,
    'no-unreachable': 1,
    'no-unused-expressions': 1,
    'no-magic-numbers': 0,
    'no-undefined': 0,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    'max-len': [1, 140, 4, { ignoreComments: true }],
    'react/prefer-es6-class': 1,
    'indent': ['error', 2, { SwitchCase: 1}],
    'prefer-const': 'error',
    'no-shadow': 'error',
    'class-methods-use-this': 0,
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 0,
    'func-names': ['error', 'never'],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'css': 'never'
    }]
  },
  settings: {
    'import/resolver': {
      'webpack': {}
    }
  }
}