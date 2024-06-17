declare module 'ext.gadget.CGI2-parser' {
	class CGI2Parser<T> {
		actions: Record<string, (this: T, arg: unknown) => T | void>;
		constructor(actions: Record<string, (this: T, arg: unknown) => T | void>);
		parse(origin: T, params: string, useStrict?: boolean): T;
	}
	export = CGI2Parser;
}
