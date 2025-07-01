// eslint.config.js
import config from "@finsweet/eslint-config";

export default [
  ...config,
  {
    files: ["bin/**/*.js", "build.js"],
    languageOptions: {
      globals: {
        console: true,
        process: true,
      },
    },
  },
];
