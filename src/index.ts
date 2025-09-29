import { type Config } from "prettier"

const config: Config = {
  cssDeclarationSorterOrder: "alphabetical",
  jsonRecursiveSort: true,
  plugins: [
    "prettier-plugin-css-order",
    "prettier-plugin-packagejson",
    "prettier-plugin-sort-json",
  ],
  semi: false,
}

export default config
