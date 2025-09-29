declare module "prettier-plugin-packagejson" {
  import type { Plugin } from "prettier"

  interface PackageJsonOptions {
    packageSortOrder?: string[]
  }

  declare const plugin: Plugin & {
    options: {
      packageSortOrder: {
        category: string
        type: "string"
        array: true
        default: Array<{ value: string[] }>
        description: string
      }
    }
  }

  export default plugin
}
