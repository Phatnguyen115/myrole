function add(x, y, cb){
    cb(); // function -> run
    return x + y;
}

function phepcong(){
    console.log("ADD");
}


c = add(9,8, phepcong );

console.log(c);
function sau500ms(){
    console.log("Đã đến 500ms");
}
setTimeout(sau500ms,500);
setInterval(sau500ms,500);

