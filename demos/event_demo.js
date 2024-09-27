const eventEmitter = require('events')

class MyEmitter extends eventEmitter{}

const myEmitter = new MyEmitter()

myEmitter.on('event', () => {console.log("Event Fired")})
myEmitter.on('something else', () => {console.log("Something else Fired")})

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

myEmitter.emit('something else');

