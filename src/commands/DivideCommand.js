import {CommandAbstract} from 'src/commands/CommandAbstract';
import {StateDecorator} from 'src/decorators/StateDecorator';

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
        this.state.output = eval(this.state.output) + '/';
    }
}