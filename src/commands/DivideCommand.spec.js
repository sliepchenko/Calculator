import {equal} from 'assert';

import {StateManager} from '../services/StateManager';
import {InitState} from '../states/InitState';
import {DivideCommand} from './DivideCommand';

beforeEach(() => {
    const state = new StateManager();
    state.set(InitState);
});

describe('DivideCommand', () => {
    const state = new StateManager(),
        a = parseFloat((Math.random() * 100).toFixed(2)),
        b = parseFloat((Math.random() * 100).toFixed(2));

    it('Empty output', () => {
        (new DivideCommand()).execute();
        return equal(state.output, '0/');
    });

    it(`With random number ${a} in the output`, () => {
        state.output = `${a}`;
        (new DivideCommand()).execute();
        return equal(state.output, `${a}/`);
    });

    it(`With random number ${a} and command + at the end in the output`, () => {
        state.output = `${a}+`;
        (new DivideCommand()).execute();
        return equal(state.output, `${a}/`);
    });

    it(`With random expression ${a} + ${b} in the output`, () => {
        state.output = `${a}+${b}`;
        (new DivideCommand()).execute();
        return equal(state.output, Number(a) + Number(b) + '/');
    });
});