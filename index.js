var count = require('./countdown').Countdown;
var countdown = new Count(10);

countdown.on('secondElapsed', function(n) {
    console.log(n);
})

countdown.on('done', function() {
    console.log('lift off!');
})
