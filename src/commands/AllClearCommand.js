import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

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
        this.state.output = '0';
    }
}