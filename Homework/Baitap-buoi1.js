//BT1
function bt1_1(a){
    console.log(a+""+""+a+""+a+""+""+a+""+a+""+""+a+""+a+""+""+a+""+a+""+""+a);
};
function bt1_2(bc){
    console.log(bc+""+bc+""+bc+""+bc+""+bc+""+bc+""+bc+""+bc+""+bc+""+bc+"");
};
bt1_1(5);
bt1_2(12);

//BT2
for(i=1;i<=100;i++){
    console.log(i);
}

//BT3
for(i=100;i>=1;i--){
    console.log(i);
}

//BT4
for(i=1;i<=100; i++)
{
    if ( i % 3 == 0 )
    {
        console.log(i);
    } else {};
};

//BT5
for(i=99;i>=1;i--){
    if(i%7==0){
        console.log(i);
    } else {};
};

//BT6
var bt6 =i;
for(i=1;i<=5000;i++){
   bt6 =bt6+i;
}
console.log(bt6);

//BT7
var bt7 = 0;
for(i=5000;i<=10000;i++){
    bt7 = bt7 +i;
};
console.log(bt7);

//BT8
var bt8 =0;
for (i=5;i<=150; i = i+5){
    bt8 = bt8+i;
    console.log(i);
}
console.log(bt8);

//BT9
function bt9(a){
    var giaithua =1;
    for(i=1;i<=a;i++){
        giaithua = giaithua*i;
    }
    console.log(giaithua);
}
bt9(3);

//BT10
function bt10(a){
        if(a % i == 0){
            console.log(a +" Không là số nguyên tố");
        } else {console.log(a +" Là số nguyên tố ")};
    }
bt10(19);

//BT11
function bt11(a){
    if(a == 1){
      console.log(1);
    } else {};
    if (a == 2) {
        console.log(1);
        console.log(1);
    } else {};
    f1 = 1;
    f2 = 1;
    fn = 0;
    console.log(f1);
    console.log(f2);
        for(i=3;i<= a;i++){
            fn = f1 +f2;
            f1 = f2;
            f2 = fn; 
            console.log(fn);
    }
}
bt11(6);

