import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser, sourceType: 'module' },
    ignores: [
      "**/dist/",
      "webpack.config.js"
    ],
  },
  pluginJs.configs.recommended
];