var OFF = 0, WARN = 1, ERROR = 2;

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
    "indent": [WARN],
    "strict": [ ERROR, "never" ],
    "space-in-parens": OFF,
    "no-use-before-define": ERROR,
    "semi": ["error", "always"]
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
