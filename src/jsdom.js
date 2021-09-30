const {JSDOM} = require('jsdom');

const DOM = new JSDOM();

global.window = DOM.window;
global.document = window.document;
global.CustomEvent = window.CustomEvent;
global.Event = window.Event;
global.EventEmitter = window.EventEmitter;
global.EventTarget = window.EventTarget;
global.HTMLElement = window.HTMLElement;