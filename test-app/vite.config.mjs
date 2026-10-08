import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { extensions, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import docfy from '@docfy/ember-vite';
import { generateApiDocs } from './scripts/api-docs.mjs';

// The API reference pages are generated from ember-table's type declarations
// before Docfy reads the docs folder. Rebuild the addon (or restart) to refresh.
generateApiDocs({
  declarations: fileURLToPath(new URL('../ember-table/declarations', import.meta.url)),
  outDir: fileURLToPath(new URL('./docs/api', import.meta.url)),
});

export default defineConfig(({ mode }) => ({
  plugins: [
    docfy(),
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // The test suite is only built for `--mode development` (see `pnpm test`).
        ...(mode === 'production' ? {} : { tests: 'tests/index.html' }),
      },
    },
  },
}));
