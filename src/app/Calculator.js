import {AdditionCommand} from '../commands/AdditionCommand';
import {AllClearCommand} from '../commands/AllClearCommand';
import {DivideCommand} from '../commands/DivideCommand';
import {InputCommand} from '../commands/InputCommand';
import {MultiplyCommand} from '../commands/MultiplyCommand';
import {PercentCommand} from '../commands/PercentCommand';
import {ReverseCommand} from '../commands/ReverseCommand';
import {SubmitCommand} from '../commands/SubmitCommand';
import {SubtractionCommand} from '../commands/SubtractionCommand';

import {StateDecorator} from '../decorators/StateDecorator';
import {HTMLBuilder} from '../services/HTMLBuilder';

/**
 * Central class of application
 *
 * @pattern Builder, Command, Decorator, FabricMethod, State
 */
@StateDecorator
export class Calculator {
    mainContainer;
    outputNode;
    inputContainer;
    inputLeftContainer;
    rightInputContainer;

    specialButtonsContainer;
    operatorButtonsContainer;
    numberButtonsContainer;

    allClearButton;
    reverseButton;
    percentButton;
    divideButton;
    multiplyButton;
    minusButton;
    plusButton;
    equalButton;

    n0Button;
    n1Button;
    n2Button;
    n3Button;
    n4Button;
    n5Button;
    n6Button;
    n7Button;
    n8Button;
    n9Button;
    dotButton;

    constructor() {
        document.body.appendChild(this.build());

        this.state.on('outputChanged', (event) => this.onOutputChange(event.detail));
    }

    build() {
        this.mainContainer = HTMLBuilder('div')
            .id('calculatorContainer').class('calculator-container')
            .result();

        this.mainContainer.appendChild(this.buildOutput());
        this.mainContainer.appendChild(this.buildInput());

        return this.mainContainer;
    }

    buildOutput() {
        this.outputNode = HTMLBuilder('input')
            .id('outputNode').class('calculator-container__output')
            .value(this.state.output)
            .disable()
            .result();

        return this.outputNode;
    }

    buildInput() {
        this.inputContainer = HTMLBuilder('div')
            .id('inputContainer').class('calculator-container__input')
            .result();

        this.inputLeftContainer = HTMLBuilder('div')
            .id('inputLeftContainer').class('calculator-container-left')
            .appendTo(this.inputContainer)
            .result();
        this.inputRightCotainer = HTMLBuilder('div')
            .id('rightInputContainer').class('calculator-container-right')
            .appendTo(this.inputContainer)
            .result();

        this.inputLeftContainer.appendChild(this.buildSpecial());
        this.inputLeftContainer.appendChild(this.buildNumbers());
        this.inputRightCotainer.appendChild(this.buildOperators());

        return this.inputContainer;
    }

    buildSpecial() {
        this.specialButtonsContainer = HTMLBuilder('div')
            .id('specialButtonsContainer').class('calculator-container-special')
            .result();

        this.allClearButton = HTMLBuilder('button').id('allClearButton').class('all-clear-button')
            .text('AC')
            .doCommandOnEvent('click', AllClearCommand)
            .appendTo(this.specialButtonsContainer)
            .result();

        this.reverseButton = HTMLBuilder('button').id('reverseButton').class('reverse-button')
            .text('-/+')
            .doCommandOnEvent('click', ReverseCommand)
            .appendTo(this.specialButtonsContainer)
            .result();

        this.percentButton = HTMLBuilder('button').id('percentButton').class('percent-button')
            .text('%')
            .doCommandOnEvent('click', PercentCommand, 0)
            .appendTo(this.specialButtonsContainer)
            .result();

        return this.specialButtonsContainer;
    }

    buildOperators() {
        this.operatorButtonsContainer = HTMLBuilder('div')
            .id('operatorButtonsContainer')
            .class('calculator-container-operators')
            .result();

        this.divideButton = HTMLBuilder('button').id('divideButton').class('divide-button')
            .text('/')
            .doCommandOnEvent('click', DivideCommand)
            .appendTo(this.operatorButtonsContainer)
            .result();

        this.multiplyButton = HTMLBuilder('button').id('multiplyButton').class('multiply-button')
            .text('*')
            .doCommandOnEvent('click', MultiplyCommand)
            .appendTo(this.operatorButtonsContainer)
            .result();

        this.minusButton = HTMLBuilder('button').id('minusButton').class('minus-button')
            .text('-')
            .doCommandOnEvent('click', SubtractionCommand)
            .appendTo(this.operatorButtonsContainer)
            .result();

        this.plusButton = HTMLBuilder('button').id('plusButton').class('plus-button')
            .text('+')
            .doCommandOnEvent('click', AdditionCommand)
            .appendTo(this.operatorButtonsContainer)
            .result();

        this.equalButton = HTMLBuilder('button').id('equalButton').class('equal-button')
            .text('=')
            .doCommandOnEvent('click', SubmitCommand)
            .appendTo(this.operatorButtonsContainer)
            .result();

        return this.operatorButtonsContainer;
    }

    buildNumbers() {
        this.numberButtonsContainer = HTMLBuilder('div')
            .id('numberButtonsContainer')
            .class('calculator-container-numbers')
            .result();

        this.n7Button = HTMLBuilder('button').id('number7Button').class('number7-button')
            .text('7')
            .doCommandOnEvent('click', InputCommand, 7)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n8Button = HTMLBuilder('button').id('number8Button').class('number8-button')
            .text('8')
            .doCommandOnEvent('click', InputCommand, 8)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n9Button = HTMLBuilder('button').id('number9Button').class('number9-button')
            .text('9')
            .doCommandOnEvent('click', InputCommand, 9)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n4Button = HTMLBuilder('button').id('number4Button').class('number4-button')
            .text('4')
            .doCommandOnEvent('click', InputCommand, 4)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n5Button = HTMLBuilder('button').id('number5Button').class('number5-button')
            .text('5')
            .doCommandOnEvent('click', InputCommand, 5)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n6Button = HTMLBuilder('button').id('number6Button').class('number6-button')
            .text('6')
            .doCommandOnEvent('click', InputCommand, 6)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n1Button = HTMLBuilder('button').id('number1Button').class('number1-button')
            .text('1')
            .doCommandOnEvent('click', InputCommand, 1)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n2Button = HTMLBuilder('button').id('number2Button').class('number2-button')
            .text('2')
            .doCommandOnEvent('click', InputCommand, 2)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n3Button = HTMLBuilder('button').id('number3Button').class('number3-button')
            .text('3')
            .doCommandOnEvent('click', InputCommand, 3)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.n0Button = HTMLBuilder('button').id('number0Button').class('number0-button')
            .text('0')
            .doCommandOnEvent('click', InputCommand, 0)
            .appendTo(this.numberButtonsContainer)
            .result();

        this.dotButton = HTMLBuilder('button').id('dotButton').class('dot-button')
            .text('.')
            .doCommandOnEvent('click', InputCommand, '.')
            .appendTo(this.numberButtonsContainer)
            .result();

        return this.numberButtonsContainer;
    }

    onOutputChange({value}) {
        this.outputNode.value = value;
    }
}