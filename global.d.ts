// 리버티게임에서 window 네임스페이스에 지정된 함수 및 변수들

declare global {
    // Common.js
    interface NotificationOptions extends Partial<typeof mw.notification.defaults> {
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

    function geturlSearch(location?: URL | Location): {
        [key: string]: string;
    };

    // Gadget-Tasker
    /// Gadget-Tasker.js
    function registerRenderer(renderer: unknown): void;
    function registerRenderer(...renderers: Array<unknown>): void;

    function registerHandler(renderer: unknown): void;
    function registerHandler(...renderers: Array<unknown>): void;

    function registerTrigger(renderer: unknown): void;
    function registerTrigger(...renderers: Array<unknown>): void;
}

export {};
