import {CommandAbstract} from './CommandAbstract';
import {StateDecorator} from '../decorators/StateDecorator';

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