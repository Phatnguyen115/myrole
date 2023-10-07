console.log("hello world")

//BT 1

for ( i = 1; i <2; i = i+1) {
    var str = "" +i;
    console.log(str);
}

//BT2

for (i=1;i<=100;i=i+1)
{console.log(i)};

//BT3


for (var a=200; a<=100; a=a-1){
   var str = i - 100;
    console.log(str)
};

//BT 4

for (i=3; i <= 100 ; i=i+3) {
    console.log(i);
}

//BT 5
for (i=7; i<=99; i=i+7) {
    console.log(i);
}

/* 
    1
    1
    2
    3
    5
    8
    13
*/

function fibo(n){
    if(n == 1){
        console.log("1");
        return;
    } else {

    }

    if(n == 2){
        console.log("1");
        console.log("1");
        return;
    } else {

    }

    // 3
    var f1 = 1;
    var f2 = 1;
    var fn = 0;
    console.log(f1);
    console.log(f2);
    for(i = 3; i <= n; i++){
        fn = f1 + f2;
        console.log(fn);
        //
        f1 = f2;
        f2 = fn;
    }

}

fibo(8);
