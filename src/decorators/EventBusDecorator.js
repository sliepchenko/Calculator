import {EventBus} from '../services/EventBus';

/**
 * Decorator which enable event emitting and receiving event throw NumberEvent
 * @param target
 *
 * @pattern Decorator, EventBus
 */
export function EventBusDecorator(target) {
    const eventBus = new EventBus();

    target.prototype.emitBusEvent = function (name, payload) {
        eventBus.dispatchEvent(new CustomEvent('eventBus', {
            detail: {
                name,
                payload
            }
        }));
    };

    target.prototype.onBusEvent = function (name, callback) {
        eventBus.addEventListener('eventBus', (data) => {
            if (data?.detail?.name === name) {
                callback(data?.detail?.payload);
            }
        });
    };
}