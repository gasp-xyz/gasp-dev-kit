import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'], // adjust formats as needed
  dts: true,
  clean: true,
  splitting: false,
  outDir: 'dist/packages/sdk',
  noExternal: ["*"], // This bundles all dependencies, including PolkadotJS
});
