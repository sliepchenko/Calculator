import {CommandAbstract} from './CommandAbstract';
import {StateDecorator} from '../decorators/StateDecorator';

/**
 * Command for input any number
 *
 * Command, Decorator, State
 */
@StateDecorator
export class InputCommand extends CommandAbstract {
    name = 'input';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output += this.payload;
    }
}