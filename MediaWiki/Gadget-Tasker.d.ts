declare module 'ext.gadget.Tasker' {}

type Task = () => void | PromiseLike<any>;

interface TaskerError {
	task: Task;
	error: Error | unknown;
}

declare global {
	class Tasker {
		constructor();

		push(items: Iterable<Task | PromiseLike<any>>): this;
		push(...items: Array<Task | PromiseLike<any>>): this;

		wait(): Promise<unknown>;

		waitSettled(): ReturnType<typeof Promise.allSettled>;

		run(): this;

		catch(handler: (errors: TaskerError[]) => any): this;
	}

	function registerRenderer(renderers: Iterable<Task | PromiseLike<any>>): void;
	function registerRenderer(...renderers: Array<Task | PromiseLike<any>>): void;

	function registerHandler(handlers: Iterable<Task | PromiseLike<any>>): void;
	function registerHandler(...handlers: Array<Task | PromiseLike<any>>): void;

	function registerTrigger(triggers: Iterable<Task | PromiseLike<any>>): void;
	function registerTrigger(...triggers: Array<Task | PromiseLike<any>>): void;
}

export {};
