import {CommandAbstract} from './CommandAbstract';
import {StateDecorator} from '../decorators/StateDecorator';

/**
 * Command for add multiply command to output
 *
 * Command, Decorator, State
 */
@StateDecorator
export class MultiplyCommand extends CommandAbstract {
    name = 'multiply';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output = eval(this.state.output) + '*';
    }
}