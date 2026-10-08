import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import { Addon } from '@embroider/addon-dev/rollup';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

// Components live at `components/<name>/component.js` so that consumers can keep
// importing (and subclassing) them from those paths, but the resolver expects
// `components/<name>.js` in the app tree. Private components keep their v1
// `ember-table-private` namespace.
function appComponentName(filename) {
  return filename
    .replace(/^components\/-private\//, 'components/ember-table-private/')
    .replace(/\/component\.js$/, '.js');
}

export default {
  output: addon.output(),

  plugins: [
    addon.publicEntrypoints(['**/*.js', 'index.js', 'template-registry.js']),

    addon.appReexports(
      [
        'components/**/component.js',
        'components/ember-table-simple-checkbox.js',
        'components/-private/row-wrapper.js',
      ],
      {
        mapFilename: appComponentName,
      }
    ),

    addon.dependencies(),

    babel({
      extensions: ['.js', '.gjs', '.ts', '.gts'],
      babelHelpers: 'bundled',
    }),

    addon.gjs(),

    addon.declarations('declarations'),

    addon.keepAssets(['**/*.css']),

    addon.clean(),

    copy({
      targets: [
        { src: 'src/styles/default.scss', dest: 'dist/styles' },
        { src: '../README.md', dest: '.' },
        { src: '../LICENSE.md', dest: '.' },
      ],
      // `addon.clean()` deletes files the bundle did not emit, so copy after
      // the bundle is written.
      hook: 'writeBundle',
    }),
  ],
};
