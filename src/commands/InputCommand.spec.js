import {equal} from 'assert';

import {StateManager} from '../services/StateManager';
import {InitState} from '../states/InitState';
import {InputCommand} from './InputCommand';

beforeEach(() => {
    const state = new StateManager();
    state.set(InitState);
});

describe('InputCommand', () => {
    const state = new StateManager(),
        input = Math.round(Math.random() * 9),
        a = parseFloat((Math.random() * 100).toFixed(2)),
        b = parseFloat((Math.random() * 100).toFixed(2));

    it(`Empty output, input is ${input}`, () => {
        (new InputCommand(input)).execute();
        return equal(state.output, input);
    });

    it(`With random number ${a} in the output, input is ${input}`, () => {
        state.output = `${a}`;
        (new InputCommand(input)).execute();
        return equal(state.output, `${a}${input}`);
    });

    it(`With random number ${a} and command + at the end in the output`, () => {
        state.output = `${a}+`;
        (new InputCommand(input)).execute();
        return equal(state.output, `${a}+${input}`);
    });

    it(`With random expression ${a} + ${b} in the output, input is ${input}`, () => {
        state.output = `${a}+${b}`;
        (new InputCommand(input)).execute();
        return equal(state.output, `${a}+${String(b) + String(input)}`);
    });
});