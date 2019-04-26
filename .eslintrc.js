module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    'shared-node-browser': true,
    browser: true,
    amd: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  rules: {
    'space-before-function-paren': 0,
    'camelcase': 0
  }
}
