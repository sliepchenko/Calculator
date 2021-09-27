import {CommandAbstract} from 'src/commands/CommandAbstract';
import {StateDecorator} from 'src/decorators/StateDecorator';

/**
 * Command for add command to output
 *
 * @pattern Command, Decorator, State
 */
@StateDecorator
export class AdditionCommand extends CommandAbstract {
    name = 'addition';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output = eval(this.state.output) + '+';
    }
}