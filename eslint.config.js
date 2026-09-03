import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

import fsdLint from "eslint-plugin-fsd-lint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      "fsd-lint": fsdLint,
    },
    rules: {
      "no-unused-vars": "off",

      "fsd-lint/layer-boundaries": [
        "error",
        {
          alias: "@/*",
        },
      ],
      "fsd-lint/public-api": "error",
      "fsd-lint/slice-isolation": "error",
    },
  },
]);
