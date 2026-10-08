import {
  addObserver as emberAddObserver,
  removeObserver as emberRemoveObserver,
} from '@ember/object/observers';

type ObserverMethod = (sender: object, key: string) => void;

// The classic models rely on asynchronous observers, which fire on tag
// invalidation before each render rather than synchronously on every `set`.
export function addObserver(obj: object, path: string, method: ObserverMethod): void {
  // eslint-disable-next-line ember/no-observers
  emberAddObserver(obj, path, null, method, false);
}

export function removeObserver(obj: object, path: string, method: ObserverMethod): void {
  emberRemoveObserver(obj, path, null, method, false);
}
