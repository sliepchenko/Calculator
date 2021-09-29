import {equal} from 'assert';

import {AdditionCommand} from './AdditionCommand';

describe('Test block', () => {
    it('Test 1', () => equal(!!1, true));
    it('Test 2', () => equal(!!0, false));
    it('Test 3', () => {
        (new AdditionCommand()).execute();

        return true;
    });
});