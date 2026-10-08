import type TableApi from './table-api.ts';

/**
  Sections receive `@api` either as the `TableApi` itself (from the yielded
  `head`/`body`/... components) or as the hash `<EmberTable>` yields
  (`<EmberThead @api={{t}}>`).
*/
export type TableApiArg = TableApi | { api: TableApi };

export function unwrapApi(api: TableApiArg | undefined): TableApi | undefined {
  return api && 'api' in api ? api.api : api;
}
