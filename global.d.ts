// 리버티게임에서 window 네임스페이스에 지정된 함수 및 변수들

declare global {
	// Common.js
	interface NotificationOptions
		extends Partial<typeof mw.notification.defaults> {
		additionalMessage?: string;
	}

	interface MWApiHTTPErrorDetails {
		xhr: JQueryXHR;
		textStatus: string;
		exception: string;
	}

	function notifyApiError(
		msg: string,
		option: NotificationOptions | null,
		code: string,
		object?: MWApiHTTPErrorDetails
	): void;

	function geturlSearch(location?: URL | Location): Record<string, string>;

	// Gadget-Tasker
	/// Gadget-Tasker.js
	function registerRenderer(renderer: unknown): void;
	function registerRenderer(...renderers: unknown[]): void;

	function registerHandler(handler: unknown): void;
	function registerHandler(...handlers: unknown[]): void;

	function registerTrigger(trigger: unknown): void;
	function registerTrigger(...triggers: unknown[]): void;
}

export {};
