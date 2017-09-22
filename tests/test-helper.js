import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import { start } from 'ember-cli-qunit';
import 'dummy/app';

setResolver(resolver);
start();
