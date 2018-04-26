import resolver from './helpers/resolver';
import { setResolver } from 'ember-qunit';
import { start } from 'ember-cli-qunit';
import 'dummy/app';
import registerRAFWaiter from 'ember-raf-scheduler/test-support/register-waiter';

registerRAFWaiter();
setResolver(resolver);
start();
