import {equal} from 'assert';

import {StateManager} from '../services/StateManager';
import {InitState} from '../states/InitState';
import {SubtractionCommand} from './SubtractionCommand';

beforeEach(() => {
    const state = new StateManager();
    state.set(InitState);
});

describe('SubtractionCommand', () => {
    const state = new StateManager(),
        a = parseFloat((Math.random() * 100).toFixed(2)),
        b = parseFloat((Math.random() * 100).toFixed(2));

    it('Empty output', () => {
        (new SubtractionCommand()).execute();
        return equal(state.output, '0-');
    });

    it(`With random number ${a} in the output`, () => {
        state.output = `${a}`;
        (new SubtractionCommand()).execute();
        return equal(state.output, `${a}-`);
    });

    it(`With random number ${a} and command + at the end in the output`, () => {
        state.output = `${a}+`;
        (new SubtractionCommand()).execute();
        return equal(state.output, `${a}+-`);
    });

    it(`With random number ${a} and command - at the end in the output`, () => {
        state.output = `${a}-`;
        (new SubtractionCommand()).execute();
        return equal(state.output, `${a}+`);
    });

    it(`With random number ${b} and command +- at the end in the output`, () => {
        state.output = `${b}+-`;
        (new SubtractionCommand()).execute();
        return equal(state.output, `${b}+`);
    });

    it(`With random expression ${a} + ${b} in the output`, () => {
        state.output = `${a}+${b}`;
        (new SubtractionCommand()).execute();
        return equal(state.output, Number(a) + Number(b) + '-');
    });
});