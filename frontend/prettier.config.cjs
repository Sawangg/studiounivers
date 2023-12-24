/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  endOfLine: "lf",
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^types$",
    "^@actions/(.*)$",
    "^@db/(.*)$",
    "^@hooks/(.*)$",
    "^@lib/(.*)$",
    "^@modules/(.*)$",
    "^@public/(.*)$",
    "^@src/(.*)$",
    "^@styles/(.*)$",
    "^@ui/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
