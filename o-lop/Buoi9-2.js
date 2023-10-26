// EMIT - ON
// EVENT

// var events = require('events'); // Thu vien

// var eventEmitter = new events.EventEmitter();

// var i = 0;
// function helloworld(){
//     console.log("Hello World " + (i++));
//     eventEmitter.emit("lam");
// }
// function black(){
//     console.log("BLACK");
//     if(i > 20){
//         clearInterval(iX);
//     }
// }

// eventEmitter.on('hello', helloworld);

// eventEmitter.on('lam', black);

// var iX = setInterval(function(){
//     eventEmitter.emit("hello");
//     // eventEmitter.emit("lam");
// }, 200);

var events = require('events'); // Thu vien

var eventEmitter = new events.EventEmitter();

var i = 0;
function demso(){
    // console.log("Số hiện tại là: " + (i++));
    // if(i%2 ==0){
    //     console.log("Số hiện tại là: "+ i*2);


    // } else {

    // };


    if(i==i) {
        return false
    } else {

    }
}
function black(){
    if(i > 20){
        clearInterval(iX);
    }
}

eventEmitter.on('hello', demso);

eventEmitter.on('Phat', black);

var iX = setInterval(function(){
    eventEmitter.emit("hello"); 
    eventEmitter.emit("Phat");
}, 1000);


