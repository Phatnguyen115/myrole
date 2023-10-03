console.log("hello");
function fibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

function Insofibo(count) {
    for ( i = 0; i < count; i++) {
        console.log(fibo(i));
    }
}

Insofibo(10);