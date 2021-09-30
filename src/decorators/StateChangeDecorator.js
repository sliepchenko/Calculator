import {StateManager} from '../services/StateManager';

/**
 * Decorator which can subscribe for any changes in state
 * @param prop - prop for subscribe
 *
 * @pattern Decorator, State, StateManager
 */
export function StateChangeDecorator(prop) {
    return function (target, key, descriptor) {
        const stateManager = new StateManager(),
            listener = (data) => {
                if (prop !== undefined && data?.detail?.prop === prop) {
                    target[key](data?.detail?.value);
                } else if (prop === undefined) {
                    target[key](data?.detail);
                }
            };

        stateManager.on('stateChanged', listener);

        return descriptor;
    };
}