import {equal} from 'assert';
import {HTMLBuilder} from './HTMLBuilder';

describe('HTMLBuilder', () => {
    const timestamp = Date.now();

    it('Create div', () => equal(
        HTMLBuilder('div').result().tagName,
        'DIV'
    ));

    it('Create span with id', () => equal(
        HTMLBuilder('span').id(`id_${timestamp}`).result().id,
        `id_${timestamp}`
    ));

    it('Create p with class', () => equal(
        HTMLBuilder('p').class(`class_${timestamp}`).result().className,
        `class_${timestamp}`
    ));

    it('Create h1 with text', () => equal(
        HTMLBuilder('h1').text(`text_${timestamp}`).result().innerText,
        `text_${timestamp}`
    ));

    it('Create input with value', () => equal(
        HTMLBuilder('input').value(`value_${timestamp}`).result().value,
        `value_${timestamp}`
    ));

    it('Create disabled input', () => equal(
        HTMLBuilder('input').disable().result().disabled,
        true
    ));

    it('Create textarea and append it to document body', () => equal(
        HTMLBuilder('textarea').appendTo(window.document.body).result().parentNode,
        window.document.body
    ));

    it('Create checkbox and check result', () => equal(
        HTMLBuilder('checkbox').result().outerHTML,
        '<checkbox></checkbox>'
    ));
});