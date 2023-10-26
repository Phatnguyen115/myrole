var i = 0;
var ix = setInterval(function(){
    
    // i++;
    
    if(i%2==0){
        console.log(i*2);
    } else {
        console.log(i);

    }

    i = i + 1;

    if(i>99){
        clearInterval(ix);
    }
}, 10);

