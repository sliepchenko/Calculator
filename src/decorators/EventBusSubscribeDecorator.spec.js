import {EventBus} from '../services/EventBus';
import {EventBusDecorator} from './EventBusDecorator';
import {EventBusSubscribeDecorator} from './EventBusSubscribeDecorator';

beforeEach(() => {
    const eventBus = new EventBus();
    eventBus.destroy();
});

describe('EventBusSubscribeDecorator', () => {
    it('Simple emit bus event', (done) => {
        const timestamp = Date.now();

        class A {
            constructor() {

            }

            @EventBusSubscribeDecorator(`event_${timestamp}`)
            test() {
                done();
            }
        }

        @EventBusDecorator
        class B {
            constructor() {
                this.emitBusEvent(`event_${timestamp}`);
            }
        }

        new A();
        new B();
    });
});