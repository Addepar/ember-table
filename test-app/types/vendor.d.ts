// ember-source provides `rsvp` at runtime but ships no types for it.
declare module 'rsvp' {
  const RSVP: { Promise: PromiseConstructor };
  export default RSVP;
}
