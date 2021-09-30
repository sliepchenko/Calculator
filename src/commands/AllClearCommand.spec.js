import {equal} from 'assert';

import {StateManager} from '../services/StateManager';
import {InitState} from '../states/InitState';
import {AllClearCommand} from './AllClearCommand';

beforeEach(() => {
    const state = new StateManager();
    state.set(InitState);
});

describe('AllClearCommand', () => {
    const state = new StateManager(),
        a = parseFloat((Math.random() * 100).toFixed(2)),
        b = parseFloat((Math.random() * 100).toFixed(2));

    it('Empty output', () => {
        (new AllClearCommand()).execute();
        return equal(state.output, '0');
    });

    it(`With random number ${a} in the output`, () => {
        state.output = `${a}`;
        (new AllClearCommand()).execute();
        return equal(state.output, '0');
    });

    it(`With random expression ${a} + ${b} in the output`, () => {
        state.output = `${a}+${b}`;
        (new AllClearCommand()).execute();
        return equal(state.output, '0');
    });
});