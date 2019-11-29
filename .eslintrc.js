var OFF = 0,
  WARN = 1,
  ERROR = 2;

module.exports = {
  "root": true,
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript"
  ],
  "rules": {
    "indent": [OFF],
    "strict": [ERROR, "never"],
    "space-in-parens": OFF,
    "no-use-before-define": ERROR,
    "padded-blocks": OFF,
    "semi": [WARN, "always"],
    "space-before-function-paren": OFF,
    // 'vue/max-attributes-per-line': [ERROR, {
    //   'singleline': 3,
    //   'multiline': {
    //     'max': 1,
    //     'allowFirstLine': true
    //   }
    // }],
    // 'vue/script-indent': [ERROR, 2, { 'baseIndent': 1 }]
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "overrides": [{
    "files": [
      "**/__tests__/*.{j,t}s?(x)",
      "**/tests/unit/**/*.spec.{j,t}s?(x)"
    ],
    "env": {
      "jest": true
    }
  }]
}
