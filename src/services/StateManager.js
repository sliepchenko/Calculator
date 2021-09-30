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

    output = '0';

    constructor() {
        if (StateManager.#instance === undefined) {
            StateManager.#instance = new Proxy(this, {
                set: function (obj, prop, value) {
                    if (obj[prop] !== value) {
                        obj[prop] = value;

                        // clone of object to avoid rewriting
                        const {on, off, ...state} = obj;

                        obj.#eventTarget.dispatchEvent(new CustomEvent('stateChanged', {detail: {prop, value, state}}));
                        obj.#eventTarget.dispatchEvent(new CustomEvent(prop + 'Changed', {detail: {prop, value, state}}));
                    }

                    return true;
                },
                get: function (target, prop, receiver) {
                    return Reflect.get(...arguments);
                }
            });
        }

        return StateManager.#instance;
    }

    set(state) {
        state = new state();

        const {on, off, ...props} = this;

        Object.keys(props).forEach(key => {
            delete this[key];
        });

        Object.keys(state).forEach(key => {
            this[key] = state[key];
        });
    }

    destroy() {
        StateManager.#instance = undefined;
    }
}