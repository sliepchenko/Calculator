import {CommandBus} from './CommandBus';

/**
 * Builder for HTML Element
 * @param tag {String} - tag of element
 * @returns {HTMLElement}
 *
 * @pattern Builder
 */
export function HTMLBuilder(tag) {
    const result = document.createElement(tag),
        methods = {
            id: function (string) {
                result.id = string;
                return methods;
            },
            class: function (string) {
                result.className = string;
                return methods;
            },
            text: function (string) {
                result.innerText = string;
                return methods;
            },
            value: function (string) {
                result.value = string;
                return methods;
            },
            disable: function () {
                result.disabled = true;
                return methods;
            },

            doCommandOnEvent: function (event, command, payload) {
                result.addEventListener(event, () => {
                    const commandBus = new CommandBus();

                    commandBus.do(command, payload);
                });

                return methods;
            },

            appendTo: function (parentNode) {
                parentNode.appendChild(result);
                return methods;
            },
            result: function () {
                return result;
            }
        };

    return methods;
}