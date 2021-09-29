import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

/**
 * Command for add command to output
 *
 * @pattern Command, Decorator, State
 */
@StateDecorator
export class AdditionCommand extends CommandAbstract {
    name = 'addition';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output = eval(this.state.output) + '+';
    }
}