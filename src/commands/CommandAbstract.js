/**
 * Abstract class for all type of commands
 *
 * Command, Decorator, State
 */
export class CommandAbstract {
    name = null;
    payload = null;

    constructor(payload) {
        this.payload = payload;
    }

    execute() {
        throw new Error('Method execute must be implemented!');
    }
}