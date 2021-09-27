import {StateManager} from 'src/services/StateManager';

/**
 * Decorator which can subscribe for any changes in state
 * @param prop - prop for subscribe
 *
 * @pattern Decorator, State, StateManager
 */
export function StateChangeDecorator(prop) {
    return function(target, key, descriptor) {
        const stateManager = new StateManager();

        stateManager.on('stateChanged', (data) => {
            if (prop && data?.detail?.prop === prop) {
                target[key](data?.detail?.value);
            } else {
                target[key](data?.detail);
            }
        });

        return descriptor;
    };
}