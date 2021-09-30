import {StateDecorator} from './StateDecorator';

beforeEach((done) => {
    setTimeout(done, 1);
});

describe('StateDecorator', () => {
    it('Simple change state', (done) => {
        const timestamp = Date.now();

        @StateDecorator
        class A {
            constructor() {
                this.state[`prop_${timestamp}`] = 1;
            }
        }

        @StateDecorator
        class B {
            constructor() {
                if (this.state[`prop_${timestamp}`] === 1) {
                    done();
                }
            }
        }

        new A();
        new B();
    });

    it('Change state and listen direct changes', (done) => {
        const timestamp = Date.now();

        @StateDecorator
        class A {
            constructor() {
                const listener = () => {
                    this.state.off(`prop_${timestamp}Changed`, listener);
                    done();
                };

                this.state.on(`prop_${timestamp}Changed`, listener);
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

    it('Change state and listen all changes', (done) => {
        const timestamp = Date.now();

        @StateDecorator
        class A {
            constructor() {
                const listener = () => {
                    this.state.off('stateChanged', listener);
                    done();
                };

                this.state.on('stateChanged', listener);
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