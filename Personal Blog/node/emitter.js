const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const emitter = new CustomEvent();

module.exports = emitter;

