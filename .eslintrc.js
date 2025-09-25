module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'vue',
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  plugins: ['vue', 'babel', 'import', 'prettier'],
  env: {
    jest: true,
    node: true,
    es6: true
  },
  rules: {
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'never'],
    'global-require': 2,
    indent: ['error', 2, { SwitchCase: 1, flatTernaryExpressions: true }],
    'max-len': 0,
    'no-nested-ternary': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 0,
    'no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true }
    ],
    'no-use-before-define': [
      'warn',
      { functions: true, classes: true, variables: true }
    ],
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'require-yield': 0,
    'no-empty': 2,
    'no-console': 1,
    radix: 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    semi: ['error', 'always'],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [
      'error',
      { ignore: ['^app', 'react-native-image-resizer'] }
    ],
    'import/prefer-default-export': 0,
    'import/default': 2,
    'import/export': 2,
    'linebreak-style': [0, 'error', 'windows'],
    'prefer-const': 0,
    'vue/no-reserved-keys': 0,
    camelcase: 0,
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/attribute-hyphenation': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'object-curly-spacing': ['error', 'always']
  },
  globals: {
    __DEV__: true,
    window: true,
    fetch: true,
    XMLHttpRequest: true,
    FormData: true,
    WebSocket: true,
    navigator: true,
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly',
    getApp: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  }
};
