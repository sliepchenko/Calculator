import {CommandAbstract} from 'src/commands/CommandAbstract';
import {StateDecorator} from 'src/decorators/StateDecorator';

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