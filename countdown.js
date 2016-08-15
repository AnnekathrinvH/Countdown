var events = require('events');
var myEmitter = new events.EventEmitter();

function Countdown(n) {
    console.log(n);
    var countdownInstance = this;
    function timer() {
        if(n === 0) {
            return
        }
        countdownInstance.emit('secondElapsed', n);
        if(n === 1) {
            countdownInstance.emit('done', n);
            return;
        }
        n--;

        setTimeout(timer, 1000);
    }
    timer();
}


Countdown.prototype = myEmitter;

module.exports.Countdown = Countdown;
