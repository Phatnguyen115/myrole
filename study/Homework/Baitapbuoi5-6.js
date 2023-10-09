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

//Tạo ra một mảng rỗng, sau đó nếu thỏa điều kiện là số ko chia hết cho 2 thì thêm số đó vào mảng rỗng vừa mới tạo.

//BT23
var arr23 = [1,"a",2, ,5,7,"w","c"];
var bt23 = [];
for(i=0;i<arr23.length;i++){
    if(typeof (arr23[i]) == "number"){
        bt23.push(arr23[i]);
    } else {};
}
console.log(bt23);

// Gán giá trị == number thì cần phải để trong dấu ngoặc kép
//BT24
for(i=1;i<=5;i++){
    str = "";
    for (k=1;k<=20;k+=1){
        str = str + " " + (k+ (i-1)*20);
    };
    console.log(str);
}

//str = str + " " : Làm khoảng trắng cho mỗi dãy số
//(k+ (i-1)*20): Tạo ra giá trị bắt đầu mới cho dãy số
//Nói cách khác: i=5 tạo ra số hàng, k=20 tạo ra số cột của dãy số

//BT25
function bt25(a){
for(i=1;i<=20;i++){
    console.log(a + " x "+ i +" = " + a*i);
}
};
bt25(5);
bt25(9);

//BT27
var str = "hello world my name lam";
var sotu = 0;
for(i=0;i<str.length;i++){
    if(str[i] == " "){
        sotu +=1;
    } else {};
}
console.log("Số từ: "+ (sotu +1));
console.log("Số kí tự: "+ str.length);

//Số từ: Điếm khoảng trắng và + thêm 1

//BT28
var a = "168364736482";
bt28 = "";
for(i= a.length-1;i>=0;i--){
    bt28 += a[i];
}
console.log( "Dãy số sau khi đảo ngược là: "+ bt28);

//Lỗi: Biến a là chuỗi số thì nên đặt trong dấu ngoặc kép

//BT29
function bt29(x,y){
    var tongbinhphuong = 0;
    for(i=x;i<=y;i++){
        tongbinhphuong += i*i;
    }
    return tongbinhphuong;
}
console.log(bt29(3,7));

//Lỗi: Ko có return ngay tongbinhphuong sau khi kết thúc vòng lặp

//BT30
function bt30(a){
    var socankiemtra = 0;
    for(i=1;i<a;i++){
        if(a%i ==0){
            socankiemtra +=i;
        } else {}
    }
    if(socankiemtra == a){
        console.log(a + ": Là số hoàn hảo");
    }   else {}
}
bt30(28);
//Lỗi: Đặt if(socankiemtra == a) trong vòng lặp, phía sau else ko cần dấu chấm phẩy.

//BT31
for(i=1;i<1000;i++){
    if(bt30(i)){
        console.log(i);
    }
}

//BT32
function bt32(a){
    var congthuc =0;
    for(i=0;i<=a;i+=1){
        congthuc += i*(i+1);
    }
    return congthuc;
}
console.log(bt32(3));

//BT33
var arr33 = [4,7,8];
tongbt33 = 0;
tichbt33 = 1;
for(i=0;i<arr33.length;i++){
    tongbt33 += arr33[i];
    tichbt33 *= arr33[i];
}
console.log("Tổng của mảng là: "+ tongbt33);
console.log("Tích của mảng là: "+ tichbt33);
console.log("Trung bình cộng của mảng là: "+ (tongbt33/(arr33.length)));

//BT34
var arr34 = [8,3,6,5,9,7,4];
var maxarr34 = arr34[0];
var minarr34 = arr34[0];
for(i= 0;i<arr34.length;i++){
    if(arr34[i]>maxarr34){
        maxarr34 = arr34[i];
    } else {}
    if(arr34[i]<minarr34){
        minarr34 = arr34[i]
    } else {}
}
console.log( "Số lớn nhất của mảng là: "+  maxarr34);
console.log( "Số nhỏ nhất của mảng là: "+ minarr34);

//Nên chọn giá trị để so sánh ban đầu là arr[0]

//BT35
var arr35 = [3,4,5,3,6,7,8];
solantrung = 0;
for(i=0;i<arr35.length;i++){
    if(arr35[i] == 3){
        solantrung +=1;
    } else {}
}
console.log("Số lần lặp lại của số 3 là: "+ solantrung);

//BT37
var arr37 = [2,4,6,7,9,11,15,19];
function songuyento(a){
    if(a< 2){
        return false;
    }
    if (a == 2){
        return true;
    } 

    for(var i=2;i<=Math.sqrt(a);i++){
        if(a%i==0){
            return false;
        }
    }
    return true;
}
var songuyentoarr37 = [];
    for(i=0;i<arr37.length;i++){
        if(songuyento(arr37[i])){
            songuyentoarr37.push(arr37[i]);
        } else {}
    }
    console.log(songuyentoarr37);

//Lỗi code tìm số nguyên tố: Tại vòng lặp bỏ chữ else, nếu ko sẽ ko ra kết quả gì, từ đó dẫn đến tìm số nguyên tố cũng bị sót


