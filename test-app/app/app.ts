import EmberApp from 'ember-strict-application-resolver';
import { DocfyService } from '@docfy/ember';
import PageTitleService from 'ember-page-title/services/page-title';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';
import Router from './router.ts';
import '@docfy/ember/code-block.css';
import './styles/app.scss';
import './styles/docs.css';

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow.ts');
}

export default class App extends EmberApp {
  // The strict resolver only knows the modules listed here (RFC 1132).
  modules = {
    './router': Router,
    './services/docfy': DocfyService,
    './services/page-title': PageTitleService,
    ...import.meta.glob('./routes/**/*', { eager: true }),
    ...import.meta.glob('./templates/**/*', { eager: true }),
  };

  inspector = setupInspector(this);
}
