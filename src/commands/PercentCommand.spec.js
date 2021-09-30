import {equal} from 'assert';

import {StateManager} from '../services/StateManager';
import {InitState} from '../states/InitState';
import {PercentCommand} from './PercentCommand';

beforeEach(() => {
    const state = new StateManager();
    state.set(InitState);
});

describe('PercentCommand', () => {
    const state = new StateManager(),
        a = parseFloat((Math.random() * 100).toFixed(2)),
        b = parseFloat((Math.random() * 100).toFixed(2));

    it('Empty output', () => {
        (new PercentCommand()).execute();
        return equal(state.output, '0');
    });

    it(`With random number ${a} in the output`, () => {
        state.output = `${a}`;
        (new PercentCommand()).execute();
        return equal(state.output, `${a}`);
    });

    it(`With random number ${a} and command + at the end in the output`, () => {
        state.output = `${a}+`;
        (new PercentCommand()).execute();
        return equal(state.output, `${a}`);
    });

    it(`With random expression ${a} + ${b} in the output`, () => {
        state.output = `${a}+${b}`;
        (new PercentCommand()).execute();
        return equal(state.output, `${a}+${Number(a) / 100 * Number(b)}`);
    });
});