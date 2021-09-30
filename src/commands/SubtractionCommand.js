import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

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
        let output = String(this.state.output).replace(/\D$/, '');

        if (/-$/.test(this.state.output)) {
            output = `${output}+`.replace('++', '+');
        } else if (/\D$/.test(this.state.output)) {
            output = `${this.state.output}-`;
        } else {
            output = `${eval(output)}-`;
        }

        this.state.output = output;
    }
}