
const EventEmitter = require('events');
const logger = require('./logger')
const event_divide_by_zero = new EventEmitter()
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

event_divide_by_zero.on('divide_by_zero', number => {
    logger.log(`ERROR: CANNOT DIVIDE BY ZERO. nominator = ${number}`)
})

readline.question('enter 1st number', _x => {
    
    x = _x

    readline.question('enter 2nd number', _y => {
        y = _y
        if (y == 0) {
            // fire divide-by-zero event
            event_divide_by_zero.emit('divide_by_zero', x)
        }
        else {
            const result = x / y
            console.log(`${x} / ${y} = ${result}`);
        }
    
        readline.close();
    })    
    

})
