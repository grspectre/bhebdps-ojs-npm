import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "dist/",
      "webpack.config.js"
    ],
  },
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.browser, sourceType: 'module' },
  }
];