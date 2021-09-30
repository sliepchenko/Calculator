import {equal} from 'assert';

import {StateManager} from '../services/StateManager';
import {InitState} from '../states/InitState';
import {ReverseCommand} from './ReverseCommand';

beforeEach(() => {
    const state = new StateManager();
    state.set(InitState);
});

describe('ReverseCommand', () => {
    const state = new StateManager(),
        a = parseFloat((Math.random() * 100).toFixed(2)),
        b = parseFloat((Math.random() * 100).toFixed(2));

    it('Empty output', () => {
        (new ReverseCommand()).execute();
        return equal(state.output, '0');
    });

    it(`With random number ${a} in the output`, () => {
        state.output = `${a}`;
        (new ReverseCommand()).execute();
        return equal(state.output, `-${a}`);
    });

    it(`With random negative number -${b} in the output`, () => {
        state.output = `-${b}`;
        (new ReverseCommand()).execute();
        return equal(state.output, `${b}`);
    });

    it(`With random number ${a} and command + at the end in the output`, () => {
        state.output = `${a}+`;
        (new ReverseCommand()).execute();
        return equal(state.output, `-${a}`);
    });

    it(`With random expression ${a} + ${b} in the output`, () => {
        state.output = `${a}+${b}`;
        (new ReverseCommand()).execute();
        return equal(state.output, `-${a + b}`);
    });
});