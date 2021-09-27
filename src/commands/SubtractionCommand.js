import {CommandAbstract} from 'src/commands/CommandAbstract';
import {StateDecorator} from 'src/decorators/StateDecorator';

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