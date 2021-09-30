import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

/**
 * Command for reverse plus to minus and vice versa
 *
 * Command, Decorator, State
 */
@StateDecorator
export class ReverseCommand extends CommandAbstract {
    name = 'reverse';

    constructor(payload) {
        super(payload);
    }

    execute() {
        const output = String(this.state.output).replace(/\D$/, '');
        this.state.output = eval(output) * -1;
    }
}