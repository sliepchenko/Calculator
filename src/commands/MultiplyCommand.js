import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

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
        const output = String(this.state.output).replace(/\D$/, '');
        this.state.output = eval(output) + '*';
    }
}