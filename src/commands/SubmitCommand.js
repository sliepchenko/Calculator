import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

/**
 * Command for submit any operations in the output
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
        const output = String(this.state.output).replace(/\D$/, '');
        this.state.output = eval(output);
    }
}