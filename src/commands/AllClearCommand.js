import {CommandAbstract} from 'src/commands/CommandAbstract';
import {StateDecorator} from 'src/decorators/StateDecorator';

/**
 * Command for clearing output
 *
 * Command, Decorator, State
 */
@StateDecorator
export class AllClearCommand extends CommandAbstract {
    name = 'allClear';

    constructor(payload) {
        super(payload);
    }

    execute() {
        this.state.output = '';
    }
}