declare module "prettier-plugin-css-order" {
  import type { Plugin } from "prettier"

  interface CssDeclarationSorterOptions {
    cssDeclarationSorterOrder?: "alphabetical" | "smacss" | "concentric-css"
    cssDeclarationSorterKeepOverrides?: boolean
    cssDeclarationSorterCustomOrder?: string[]
  }

  declare const plugin: Plugin & {
    options: {
      cssDeclarationSorterOrder: {
        type: "choice"
        description: string
        category: string
        default: string
        choices: Array<{
          value: string
          description: string
        }>
      }
      cssDeclarationSorterKeepOverrides: {
        type: "boolean"
        description: string
        category: string
        default: boolean
      }
      cssDeclarationSorterCustomOrder: {
        type: "string"
        array: true
        description: string
        category: string
        default: Array<{ value: string[] }>
      }
    }
  }

  export default plugin
}
