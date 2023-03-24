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
}

export {};
