//BT19
var arr19 = [1,5,4,8,6];

//BT20
// var arr20 = [1,7,4,6,7,3];
// arr19.sort();
// console.log(arr19);

//BT21
var arr21 = [1,4,3,6,8,7];
var bt21 = [];
for (i=0;i<arr21.length;i++){
    if(arr21[i] % 2 == 0){
       bt21.push(arr21[i]);
    } else {};
};
console.log(bt21);

//BT22
var arr22 = [1,3,6,3,7,9,8];
var bt22 = [];
for(i=0;i<arr22.length;i++){
    if(arr22[i]%2!=0){
        bt22.push(arr22[i]);
    } else {};
}
console.log(bt22);

//BT23
var arr23 = [1,"a",2, ,5,7,"w","c"];
var bt23 = [];
for(i=0;i<arr23.length;i++){
    if(typeof (arr23[i]) == "number"){
        bt23.push(arr23[i]);
    } else {};
}
console.log(bt23);

//BT24
for(i=1;i<=5;i++){
    str = "";
    for (k=1;k<=20;k+=1){
        str = str + " " + (k+ (i-1)*20);
    };
    console.log(str);
}

//BT25
