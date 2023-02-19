declare module 'ext.gadget.Tasker' {}

declare global {
    function registerRenderer(renderer: unknown): void;
    function registerRenderer(...renderers: Array<unknown>): void;

    function registerHandler(renderer: unknown): void;
    function registerHandler(...renderers: Array<unknown>): void;

    function registerTrigger(renderer: unknown): void;
    function registerTrigger(...renderers: Array<unknown>): void;
}

export {};
