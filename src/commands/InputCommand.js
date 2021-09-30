import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

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
        this.state.output = this.state.output == 0 ? this.payload : String(this.state.output) + String(this.payload);
    }
}