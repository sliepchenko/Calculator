import {StateDecorator} from '../decorators/StateDecorator';
import {CommandAbstract} from './CommandAbstract';

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
        let output = String(this.state.output);

        if (/\D$/.test(this.state.output)) {
            output = `${output}`;
        } else {
            output = `${eval(output)}+`;
        }

        this.state.output = output;
    }
}