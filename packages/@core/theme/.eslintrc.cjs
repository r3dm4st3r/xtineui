/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@xtineui/config-eslint/library.js"].map(require.resolve),
  rules: {
    "import/no-default-export": "off"
  }
};
