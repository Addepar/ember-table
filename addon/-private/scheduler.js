import Ember from 'ember';
import { stripInProduction } from 'vertical-collection/-debug/helpers';

const {
  run
} = Ember;

export class Token {
  constructor(parent) {
    this._parent = parent;
    this._cancelled = false;

    stripInProduction(() => {
      Object.seal(this);
    });
  }

  get cancelled() {
    return this._cancelled || (this._cancelled = this._parent ? this._parent.cancelled : false);
  }

  cancel() {
    this._cancelled = true;
  }
}

function job(cb, token) {
  return function execJob() {
    if (token.cancelled === false) {
      cb();
    }
  };
}

export class Scheduler {
  constructor() {
    this.sync = [];
    this.measure = [];
    this.jobs = 0;
    this._nextFlush = null;
    this.ticks = 0;

    stripInProduction(() => {
      Object.seal(this);
    });
  }

  schedule(queueName, cb, parent) {
    this.jobs++;
    const token = new Token(parent);

    this[queueName].push(job(cb, token));
    this._flush();

    return token;
  }

  forget(token) {
    // TODO add explicit test
    if (token) {
      token.cancel();
    }
  }

  _flush() {
    if (this._nextFlush !== null) {
      return;
    }

    this._nextFlush = requestAnimationFrame(() => {
      this.flush();
    });
  }

  flush() {
    let i, q;
    this.jobs = 0;

    if (this.sync.length > 0) {
      run.begin();
      q = this.sync;
      this.sync = [];

      for (i = 0; i < q.length; i++) {
        q[i]();
      }
      run.end();
    }

    if (this.measure.length > 0) {
      q = this.measure;
      this.measure = [];

      for (i = 0; i < q.length; i++) {
        q[i]();
      }
    }

    this._nextFlush = null;
    if (this.jobs > 0) {
      this._flush();
    }
  }
}

export const scheduler = new Scheduler();

export default scheduler;
