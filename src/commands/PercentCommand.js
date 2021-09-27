import {CommandAbstract} from 'src/commands/CommandAbstract';
import {StateDecorator} from 'src/decorators/StateDecorator';

/**
 * Command that will make operation with output in percent style behaviour
 *
 * Command, Decorator, State
 */
@StateDecorator
export class PercentCommand extends CommandAbstract {
    name = 'percent';

    constructor(payload) {
        super(payload);
    }

    execute() {
        const [a, operator, b] = this.state.output.split(/([\+\-\*\/])/);
        this.state.output = eval(`${a}${operator}${a/100*b}`);
    }
}