import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

// Components keep the .js extension from the CRA days. Vite 8 picks the
// parser by extension (.js never allows JSX, and the esbuild "loader"
// option is gone), so JSX in src/**/*.js is compiled by this small pre
// plugin before Vite's own transform sees the file. Dependencies are left
// alone.
const SRC_JS = /\/src\/.*\.js$/;

function jsxInJs() {
  let isProduction = false;
  return {
    name: 'jsx-in-js',
    enforce: 'pre',
    configResolved(config) {
      isProduction = config.isProduction;
    },
    async transform(code, id) {
      if (id.includes('/node_modules/') || !SRC_JS.test(id.split('?')[0])) return null;
      const result = await transformWithOxc(code, id, {
        lang: 'jsx',
        jsx: { runtime: 'automatic', development: !isProduction },
      });
      return { code: result.code, map: result.map };
    },
  };
}

export default defineConfig({
  plugins: [jsxInJs(), react({ include: /\.(jsx|js)$/ })],
  optimizeDeps: {
    // The dependency scanner does not run user plugins, so tell it directly
    // that .js entries may contain JSX.
    rolldownOptions: { moduleTypes: { '.js': 'jsx' } },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    css: false,
    // Node 25 ships its own experimental `localStorage` global, which shadows
    // jsdom's implementation inside the test workers. Turn it off so the
    // tests see the same Storage API they did under Jest.
    execArgv: ['--no-experimental-webstorage'],
  },
});
