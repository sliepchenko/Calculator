import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

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
        const output = String(this.state.output).replace(/\D$/, '');
        this.state.output = eval(output) + '/';
    }
}