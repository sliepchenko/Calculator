import {CommandAbstract} from './CommandAbstract';
import {StateDecorator} from '../decorators/StateDecorator';

/**
 * Command for add divide command to output
 *
 * Command, Decorator, State
 */
@StateDecorator
export class DivideCommand extends CommandAbstract {
    name = 'divide';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output = eval(this.state.output) + '/';
    }
}