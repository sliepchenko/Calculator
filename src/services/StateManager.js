/**
 * @pattern State
 *
 * @pattern Proxy, State, StateManager, Singleton
 */
export class StateManager {
    static #instance;

    #eventTarget = new EventTarget();
    on = this.#eventTarget.addEventListener.bind(this.#eventTarget);
    off = this.#eventTarget.removeEventListener.bind(this.#eventTarget);

    output = '';

    constructor() {
        if (StateManager.#instance === undefined) {
            StateManager.#instance = new Proxy(this, {
                set: function (obj, prop, value) {
                    obj[prop] = value;

                    // clone of object to avoid rewriting
                    const {on, ...state} = obj;

                    obj.#eventTarget.dispatchEvent(new CustomEvent('stateChanged', {detail: {prop, value, state}}));
                    obj.#eventTarget.dispatchEvent(new CustomEvent(prop + 'Changed', {detail: {prop, value, state}}));

                    return true;
                },
                get: function (target, prop, receiver) {
                    return Reflect.get(...arguments);
                }
            });
        }

        return StateManager.#instance;
    }
}