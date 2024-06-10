import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "toast",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["sooner"],
  ...options,
}));
