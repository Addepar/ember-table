// Ambient declarations for untyped runtime dependencies (development only).
declare module 'css-element-queries/src/ResizeSensor' {
  export default class ResizeSensor {
    constructor(element: Element, callback: () => void);
    detach(callback?: () => void): void;
  }
}

declare module 'hammerjs' {
  interface HammerPointer {
    clientX: number;
    target: Element;
  }

  interface HammerInput {
    pointers: HammerPointer[];
  }

  type HammerListener = (event: HammerInput) => void;

  class Press {
    constructor(options: { time: number });
  }

  class Hammer {
    static Press: typeof Press;
    constructor(element: HTMLElement);
    add(recognizer: Press): void;
    on(events: string, handler: HammerListener): void;
    off(events: string): void;
    destroy(): void;
  }

  export default Hammer;
  export type { HammerInput };
}

declare module '@html-next/vertical-collection' {
  import type { ComponentLike } from '@glint/template';

  export const VerticalCollection: ComponentLike<{
    Args: {
      items: unknown;
      containerSelector?: string;
      estimateHeight?: number;
      key?: string;
      staticHeight?: boolean;
      bufferSize?: number;
      renderAll?: boolean;
      firstReached?: (...args: unknown[]) => void;
      lastReached?: (...args: unknown[]) => void;
      firstVisibleChanged?: (...args: unknown[]) => void;
      lastVisibleChanged?: (...args: unknown[]) => void;
      idForFirstItem?: string;
    };
    Blocks: {
      default: [item: unknown, index: number];
      inverse: [];
    };
  }>;
}

declare module 'ember-raf-scheduler' {
  export class Token {
    cancel(): void;
  }
  export const scheduler: {
    schedule(queue: string, callback: () => void, token?: Token): { cancel(): void };
  };
}

declare module '*.css';
