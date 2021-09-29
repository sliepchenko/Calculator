import {CommandAbstract} from './CommandAbstract';
import {StateDecorator} from '../decorators/StateDecorator';

/**
 * Command for submit any operations in output
 *
 * Command, Decorator, State
 */
@StateDecorator
export class SubmitCommand extends CommandAbstract {
    name = 'submit';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output = eval(this.state.output);
    }
}