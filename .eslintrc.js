'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  // Stop ESLint from looking for a configuration file in parent folders
  'root': true,
  'env': {
    'browser': true,
    'node': true,
    'es6': true,  //Enable all ES6 features except for modules (this automatically sets the ecmaVersion parser option to 6)
    'mocha': true,
    'jquery': true,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    //Setting parser options helps ESLint determine what is a parsing error. All language options are false by default.
    'ecmaVersion': 8,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors', //we will find about a bad import statement the moment we hit save
    'plugin:import/warnings'
  ],
  'plugins': [
  ],
  'rules': {
    'accessor-pairs': OFF,
    'brace-style': [ERROR, '1tbs'],
    'comma-dangle': [ERROR, 'always-multiline'],
    'consistent-return': OFF,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    'eqeqeq': [ERROR, 'allow-null'],
    'indent': OFF,
    'jsx-quotes': [ERROR, 'prefer-double'],
    'keyword-spacing': [ERROR, { after: true, before: true }],
    'no-bitwise': OFF,
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [OFF, { args: 'none' }],
    'no-useless-concat': OFF,
    'quotes': [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi': [ERROR, 'always'],
    'space-before-blocks': ERROR,
    'space-before-function-paren': OFF,
  },
  globals: {
    $: true,
    jQuery: true
  }
};

