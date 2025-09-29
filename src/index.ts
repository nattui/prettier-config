import { type Config } from "prettier"
import prettierPluginCssOrder from "prettier-plugin-css-order"
import prettierPluginPackagejson from "prettier-plugin-packagejson"
import prettierPluginSortJson from "prettier-plugin-sort-json"

const config: Config = {
  cssDeclarationSorterOrder: "alphabetical",
  jsonRecursiveSort: true,
  plugins: [
    prettierPluginCssOrder,
    prettierPluginPackagejson,
    prettierPluginSortJson,
  ],
  semi: false,
}

export default config
