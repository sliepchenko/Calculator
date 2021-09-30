/**
 * @pattern Singleton, EventBus
 */
export class EventBus extends EventTarget {
    static #instance;

    constructor() {
        super();

        if (EventBus.#instance === undefined) {
            EventBus.#instance = this;
        }

        return EventBus.#instance;
    }

    destroy() {
        EventBus.#instance = undefined;
    }
}