/**
 * Error thrown von der {@link ContextDirective} wenn kein type festgestellt werden kann.
 */
export class NoContextTypeError extends Error {
    constructor() {
        super('No type provided for menu actions');
    }
}
