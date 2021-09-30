/**
 * @pattern Command, Singleton
 */
export class CommandBus {
    static #instance;

    #queue = [];

    constructor() {
        if (CommandBus.#instance === undefined) {
            CommandBus.#instance = this;
        }

        return CommandBus.#instance;
    }

    do(command, payload) {
        (new command(payload)).execute();
    }

    push(command, payload) {
        this.#queue.push(new command(payload));
    }

    pop() {
        this.#queue.pop();
    }

    execute() {
        this.#queue.map(command => {
            command.execute();
        });
    }

    destroy() {
        CommandBus.#instance = undefined;
    }
}