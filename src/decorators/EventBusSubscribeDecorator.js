import {EventBus} from '../services/EventBus';

/**
 * Decorator which can subscribe any method for an EventBus event
 * @param name
 *
 * @pattern Decorator, EventBus
 */
export function EventBusSubscribeDecorator(name) {
    return function (target, key, descriptor) {
        const eventBus = new EventBus();

        eventBus.addEventListener('eventBus', (data) => {
            if (data?.detail?.name === name) {
                target[key](data?.detail?.payload);
            }
        });

        return descriptor;
    };
}