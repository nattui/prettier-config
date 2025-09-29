import { defineConfig } from "tsdown"

export default defineConfig({
  clean: true,
  dts: {
    sourcemap: true,
  },
  entry: "src/index.ts",
  external: ["prettier"],
  format: ["cjs", "esm"],
  platform: "neutral",
  sourcemap: true,
  treeshake: true,
})
