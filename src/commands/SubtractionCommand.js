import {CommandAbstract} from './CommandAbstract';
import {StateDecorator} from '../decorators/StateDecorator';

/**
 * Command for add subtraction command to output
 *
 * Command, Decorator, State
 */
@StateDecorator
export class SubtractionCommand extends CommandAbstract {
    name = 'subtraction';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output = eval(this.state.output) + '-';
    }
}