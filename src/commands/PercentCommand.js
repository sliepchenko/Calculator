import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

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
        const [a = '0', operator = '+', b = '0'] = this.state.output.split(/([+\-*\/])/),
            out = `${a}${operator}${a / 100 * b}`;

        if (eval(out) != a) {
            this.state.output = out;
        } else {
            this.state.output = a;
        }
    }
}