module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended'
  ]
}
