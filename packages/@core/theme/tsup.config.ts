import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...options,
  name: "theme",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "@xtineui/base"],
}));
