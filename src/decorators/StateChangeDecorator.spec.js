import {StateDecorator} from './StateDecorator';
import {StateChangeDecorator} from './StateChangeDecorator';

beforeEach((done) => {
    setTimeout(done, 1);
});

describe('StateChangeDecorator', () => {
    it('Listen direct state change', (done) => {
        const timestamp = Date.now();

        class A {
            constructor() {

            }

            @StateChangeDecorator()
            test({prop, value}) {
                if (prop === `prop_${timestamp}` && value === 1) {
                    done();
                }
            }
        }

        @StateDecorator
        class B {
            constructor() {
                this.state[`prop_${timestamp}`] = 1;
            }
        }

        new A();
        new B();
    });

    it('Listen direct state change', (done) => {
        const timestamp = Date.now();

        class A {
            constructor() {

            }

            @StateChangeDecorator(`prop_${timestamp}`)
            test() {
                done();
            }
        }

        @StateDecorator
        class B {
            constructor() {
                this.state[`prop_${timestamp}`] = 1;
            }
        }

        new A();
        new B();
    });
});