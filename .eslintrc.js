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
    'plugin:vue/recommended',
    'standard'
  ],
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 5,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    // TODO: disabled until vuejs/eslint-plugin-vue#349 is fixed
    /*"vue/script-indent": ["error", 2, {
      "baseIndent": 1,
      "switchCase": 0,
      "ignores": []
    }]*/
  },
  overrides: [
    {
      files: '**/*.vue',
      rules: {
        indent: false
      }
    },
    {
      files: 'examples/**/*.vue',
      rules: {
        "vue/valid-v-on": false,
        "vue/no-parsing-error": false, // This rule doesn't allow empty event listeners
        "vue/html-self-closing": ["error", {
          "html": {
            "void": "never",
            "normal": "always",
            "component": "never"
          },
          "svg": "always",
          "math": "always"
        }]
      }
    },
    {
      files: 'examples/layouts/**/*.vue',
      rules: {
        "vue/order-in-components": false,
        "vue/require-default-prop": false
      }
    }
  ]
}
