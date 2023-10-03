console.log("hello world");
//BT 1
function lap1so(i){
    console.log(i+""+i+i+i+i+i+i+i+i+""+i);
}
lap1so(4);
function lap2so(x,y) {
console.log(x+""+y+x+y+x+y+x+y+x+y+x+y+x+y+x+y+""+x+y);
}
lap2so(3,2);
//BT2
for (i=1;i<=100;i++) {
    console.log(i);
}

//BT4
for (i=3; i<=100;i=i+3){
	console.log(i);
}

//BT5
for(i=7;i<=100;i=i+7){
	console.log(i);
}

//BT6
var a=0
for(i=1;i<=5000;i=i+1){
	a=a+i;
}
console.log(a);

//BT7
var a=0
for(i=5000;i<=10000;i=i+1){
	a=a+i;
}
console.log(a);

//BT8
var a=0
for(i=5;i<=30;i=i+5){
	a=a+i;
}
console.log(a);

//BT9
function Number(n){
	var a = 1
	for (var i = 2; i <= n; i++) {
	console.log(i);
	a=a*i;
	}
	return a;
}
	console.log(Number(3));

//BT10
function nguyento(a) {
	var nguyento = false;

for (i=2;i<a;i++){
	if(a % i == 0){
		nguyento = true;
	} 
}
if (nguyento){
	console.log("Không là số nguyên tố");
} else {console.log("Là số nguyên tố");
	}
}
nguyento(5);




//BT 11
function fibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

function Insofibo(a) {
    for ( i = 0; i < a; i++) {
        console.log(fibo(i));
    }
}

Insofibo(10);

//BT12
function kiemtranguyento(n){
	for(i=1; i<=2000; i++){
		if(n % i != 0 ) {
			console.log(i);
		} 
	}
}

function kiemtranguyento(n) {
	// Kiểm tra xem n có phải là số nguyên tố hay không
	for ( i = 2; i <= 2000; i++) {
	  if (n % i === 0) {
		return false;
	  }
	}
  
	return true;
  }
  
  for ( i = 2; i <= 2000; i++) {
	if (kiemtranguyento(i)) {
	  console.log(i);
	}
  }
  

  console.log("hello");
  