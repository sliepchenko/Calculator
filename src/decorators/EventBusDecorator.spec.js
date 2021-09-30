import {EventBus} from '../services/EventBus';
import {EventBusDecorator} from './EventBusDecorator';

beforeEach(() => {
    const eventBus = new EventBus();
    eventBus.destroy();
});

describe('EventBusDecorator', () => {
    it('Simple emit bus event', (done) => {
        const timestamp = Date.now();

        @EventBusDecorator
        class A {
            constructor() {
                this.onBusEvent(`event_${timestamp}`, done);
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

    it('Emit 2 bus events with different payload', (done) => {
        const timestamp = Date.now();

        @EventBusDecorator
        class A {
            constructor() {
                let completed = 0;
                const check = () => ++completed === 2 && done(),
                    listener1 = payload => {
                        if (payload === 1) check();
                        this.offBusEvent(`event1_${timestamp}`, listener1);
                    },
                    listener2 = payload => {
                        if (payload === 2) check();
                        this.offBusEvent(`event2_${timestamp}`, listener2);
                    };


                this.onBusEvent(`event1_${timestamp}`, listener1);
                this.onBusEvent(`event2_${timestamp}`, listener2);
            }
        }

        @EventBusDecorator
        class B {
            constructor() {
                this.emitBusEvent(`event1_${timestamp}`, 1);
                this.emitBusEvent(`event2_${timestamp}`, 2);
            }
        }

        new A();
        new B();
    });
});