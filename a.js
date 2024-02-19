"use strict";
//МАССИВЫ
let arr = [1, 2, 3, 4, 5];
alert (arr);
console.log(arr)

let arr1 = ['a', 'b', 'c'];
alert (arr1);
console.log(arr1)

let arr2 = ['a', 'b', 'c'];
console.log(arr2[0]); // выведет 'a'
console.log(arr2[1]); // выведет 'b'
console.log(arr2[2]); // выведет 'c'

let arr3 = [1, 2, 3];
console.log(arr3[0] + arr3[1] + arr3[2]);

let arr4 = ['a', 'b', 'c'];
console.log(arr4.length) // выведет 3

let arr5 = ['a', 'b', 'c'];
console.log(arr5[arr5.length - 1]) // выведет 'c'

let arr6 = ['a', 'b', 'c'];
arr6[0] = '1';
arr6[1] = '2';
arr6[2] = '3';
console.log(arr6);

let arr7 = ['1', '2', '3'];
arr7[0] += '3';
arr7[1] += '3';
arr7[2] += '3';
document.write (arr7)
console.log(arr7);

let arr8 = [1, 2, 3];
arr8[0]++;
++arr8[1];
arr8[2]++;
console.log(arr8);

let arr9 = [];

arr9[0] = '1';
arr9[1] = '2';
arr9[2] = '3';
console.log(arr9);

let arr10 = ['a', 'b', 'c'];
arr10[3] = '4';
arr10[4] = '5';
console.log(arr10); 

let arr11 = [];
arr11.push('1');
arr11.push('2');
arr11.push('3');
arr11.push('4');
arr11.push('5');

let arr12 = ['a', 'b', 'c', 'd', 'e'];
delete arr12[1];
delete arr12[2];
console.log(arr12.length)

//ОБЪЕКТЫ
let obj = {1: 'январь', 2: 'февраль', 3: 'март'};
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);

let user = {name: 'ksenia',surname :'kulakova'}
console.log(user['name'],'',user['surname']); 

let date = {year: 2024,month:1}
console.log(date.year, date.month); 

let obj1 = {};
obj1.a = 1;
obj1.b = 2;
obj1.c = 3;
console.log(obj1);

let obj2 = {x: 1, y: 2, z: 3};
obj2.x = obj.x ** 2;
obj2.y = obj.y ** 2;
obj2.z = obj.z ** 2;

let obj3 = {3: 'c', 1: 'a', 2: 'b'};
console.log(obj3[1]); // выведет 'a'
console.log(obj3[2]); // выведет 'b'
console.log(obj3[3]); // выведет 'c'

let obj4 = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj4);
console.log(keys);


//УСЛОВИЯ
let test = 10;
if (test > 0) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let test1 = -10;
if (test1 > 0) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}

let test11 = 1;
let test22 = 2;
if (test22 > test11) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

if ('123' == 123) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let num = 3;

if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}

if (!(num >= 0 || num <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}

let test2 = true;
if (test2 === true) {
	console.log('+++');
} else {
	console.log('---');
}

let test3 = false;
if (test3 === true) {
	console.log('+++');
} else {
	console.log('---');
}

let test4 = true;
if (test4) {
	console.log('+++');
} else {
	console.log('---');
}

let test5 = true;

if (!test5) {
	console.log('+++');
} else {
	console.log('---');
}

let test6 = true;
let test66 = true;
if (test6 && test66) {
	console.log('+++');
} else {
	console.log('---');
}

let test7 = 10;
if (test7 == 10) {
	console.log('yes');
}

if (test === 0) console.log('+++'); 
else console.log('---');

let lang = 'ru';
switch (lang) {
	case 'ru':
	console.log('рус');
	break;
	case 'en':
	    console.log('анг');
	break;
	case 'de':
	    console.log('нем');
	break;
	default:
        console.log('язык не поддерживается');
	break;
}

let num4 = 1;
let res = num4 >=0 ? "1" : "2";
alert(res);
    
let a = 2 * (3 - 1);
let b = 6 - 2;
console.log((a = 2 * (3 - 1)) == (6 - 2))

let a2 = 5 * (7 - 4);
let b2 = 1 + 2 + 7;
console.log( (5 * (7 - 4)) > (1 + 2 + 7))

let a3 = 2 ** 4;
let b3 = 4 ** 2;
console.log ((2 ** 4) != (4 ** 2))

let p = confirm('Вам есть 18 лет?');
if (p) {
	console.log('Доступ открыт');
} else {
	console.log('Доступ запрещен');
}

let min = 17;
if (min >= 0 && min < 21) {
	console.log('1 треть');
}
if (min >= 21 && min < 41) {
	console.log('2 треть');
}
if (min >= 41 && min <= 60) {
	console.log('3 треть');
}

let arr18 = [7, 34, 78, 55];
if (arr18.length == 3) {
    let sum = arr18[0]+arr18[1]+arr18[2];
	console.log(sum);
}

let str3 = 'aojdoas';
if (str3[0] == 'a') {
	console.log('!');
}

let str4 = 'aojdoas';
if (str4[-1] == 'x') {
	console.log('!');
}

let str5 = 'aojdoas';
if (str5[0] == 'a' || 'b') {
	console.log('!');
}

let num6 = 12345;
if (String(num6)[-1] == 1) {
	console.log('последняя цифра этого числа равна нулю'); 
} else {
	console.log('последняя цифра этого числа не равна нулю');
}

let num7 = 12345;
if (String(num7)[-1] %2 ==0) {
	console.log('четное'); 
} else {
	console.log('не чётное');
}

let c = 10;
if (c % 2 === 0) {
	console.log('чет');
} else {
	console.log('нечет');
}

let d = 10;
if (d % 3 == 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком');
}

let month = 4;
if (month >=3 && month <6)
    console.log(' Весна');
else if (month >=6 && month <9)
    console.log('Лето');
else if (month >=9 && month <12)
    console.log('Осень');
else
    console.log('Зима');

let str0 = 'sdfgh';
if (str0[0] == 'a') {
	console.log('да'); 
} else {
	console.log('нет');
}

let num0 = '123456';
if (String(num0[0]) == 1 || 2 ||3) {
	console.log('да'); 
} else {
	console.log('нет');
}

let num00 = 156;
let np3 = num00 %10;
let np2 = (num00 /10 ) % 10;
let np1= num00 /100;
alert( np1 + np2 + np3); 

let numl = '156000';
let n6 = numl[-1];
let n5 = numl[-2];
let n4 = numl[-3];
let n3 = numl[2];
let n2 = numl[1];
let n1 = numl[0];
if ((n1+n2+n3)==(n4+n5+n6))
    alert( 'да'); 
else
    alert( 'нет'); 


//ЦИКЛЫ 
let arrz = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arrz) {
	console.log(elem);
}

let obj8 = {x: 1, y: 2, z: 3};
for (let key in obj8) {
	console.log(key); 
}

let obj9 = {x: 1, y: 2, z: 3};
for (let key in obj9) {
	console.log(obj9[key]); 
}

let i = 1;
while (i <= 100) {
	console.log(i);
	i++;
}

let num11 = 2;
let iteration_num = 0;
while (num11 < 1000) {
	num11 = num11 * 3;
	iteration_num ++;
}
console.log(num);
console.log(iteration_num);

for (let i = 1; i <= 100; i++) {
	console.log(i);
}

for (let i = 0; i <= 100; i++) {
	if (i%2==0){
	console.log(i);
	}
}

for (let i = 1; i <= 99; i++) {
	if (i%2!=0){
	console.log(i);
	}
}

let arrz1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i <= arrz1.length - 1; i++) {
	console.log(arrz1[i]);
}

let arrz2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arrz2.length - 1; i >= 0; i--) {
	console.log(arrz2[i]);
}


let arr04 = [2, 5, 9, 15, 1, 4];
for (let elem of arr04) {
	if (3 < elem < 10) {
		console.log(arr04[elem]);
	}
}

let obj03 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let obj03 = 1; obj03 <= 5; obj03 += 1) {
	if (obj03 % 2 !== 0) {
	  console.log(obj03);
	}
  }

let re = 0;
for (let i = 2; i <= 100; i++) {
	if (i % 2 == 0){
	re = re + i;
	}
}
console.log(res);

for (let i = 1; i <= 99; i++) {
	if (i % 2 != 0){
	res = res + i;
	}
}
console.log(res);

let res1 = 0;
for (let i = 1; i <= 20; i++) {
	res1 = res * i;
console.log(res1);
}


let arr05 = [2, 5, 9, 3, 1, 4];
let res2 = 0;
for (let elem of arr05) {
	res2 += elem;
}
console.log(res2);

let arr06 = [2, 5, 9, 3, 1, 4];
let res3 = 1;
for (let elem of arr06) {
	res3 *= elem;
}
console.log(res3);

let arr07 = [2, 5, 9, 3, 1, 4];
let res4 = 0;
for (let elem of arr07) {
	if (elem % 2 == 0)
	res4 += elem;
}
console.log(res4);


let str = '';
for (let i = 0; i < 5; i++) {
	str += '-';
}
console.log(str);

let str2 = '';
for (let i = 1; i <= 9; i++) {
	str2 += i;
}
console.log(str2);

let str03 = '';
for (let i = 9; i >= 1; i--) {
	str03 += i;
}
console.log(str3);

let str04 = '';
for (let i = 1; i <= 9; i++) {
	str4 += -i;
}
console.log(str04);


for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
		console.log(str[0]);
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
		console.log(Number(str[0]) + Number(str[1]));
}

for (let i = 1; i <= 100; i++) {
	let str = String(i); 
	
	if (str[0] === '1') {
		console.log(i);
	}
}


for (let i = 1; i <= 100; i++) {
	let str = String(i); 
	
	if (Number(str[0] + Number(str[2])) == '5') {
		console.log(i);
	}
}

let arr03 = [1, 2, 3, 4, 5];
for (let elem of arr03) {
	if (elem != 0) {
		console.log(elem);
    }else{
    	break; // выйдем из цикла
	}
}

let arr09 = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem1 of arr09) {
	if (elem1 >= 0) {
        sum += elem1;
    }else{
    	break; 
	}
}
console.log(elem1);

let arr0 = [1, 2, 3, 4, 5];
let pos = 0;
for (let elem of arr0) {
	if (elem == 3) {
        break; 
    }else{
    	pos += 1;
	}
}
console.log(pos);


let sh = 0;
let k = 0;
for (let i = 1; ; i++) {
	if (sh > 100) {
        break; 
    }else{
    	sh += i;
        k += 1;
	}
}
console.log(k);

for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}

for (let i = 10; i <= 30; i += 10) {
    let num;
    for (let j = 1; j <= 3; j++){
        num = i + j;
        console.log(num + ' ');
    }
}

let arr02 = [];
for (let i = 1; i <= 10; i++) {
	arr12.push(i);
}
console.log(arr02);

let arr13 = [];
for (let i = 1; i <= 10; i++) {
	arr13.push('x');
}
console.log(arr13);

let arr14 = [1, 2, 3, 4, 5, -1, 7, 6];
let arr_new = [];
for (let elem of arr14) {
	if (elem > 0) {
        arr_new.push(elem)
}
console.log(arr_new);
}


let arr15 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr15.length; i++) {
	arr15[i] = arr15[i] ** 2;
}
console.log(arr15); 

let arr16 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr16.length; i++) {
	arr16[i]--;
}
console.log(arr16); 

let arr17 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr17.length; i++) {
	arr17[i] += 10;
}
console.log(arr17); 

let arr00 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr01 = [1, 2, 3, 4, 5, 6, 7];
let obj5 = {};
for (let i = 0; i <= 6; i++) {
	let key = arr00[i];
	let value = arr01[i];
	obj5[arr01] = arr00;
}
console.log(obj5);

let obj0 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj_new = {};
for (let i in obj1) {
if (obj0[i] % 2 === 0) {
    obj_new[i] = obj0[i];
}
}
console.log(obj_new);

let obj7 = {x: 1, y: 2, z: 3};
for (let key in ob7j) {
	obj7[key] = obj7[key] ** 2;
}
console.log(obj7);

let arr010 = [1, 2, 3, 4, 5];
let flag = false;
for (let elem of arr010) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

let num2 = 31;
let flag3 = true;
for (let i = 2; i < num; i++) {
	if (num2 % i == 0) {
		flag3 = false;
		break; // выйдем из цикла
	}
}
console.log(flag);

//ПРАКТИКА ЦИКЛЫ 
let i2 = 1;
while (i2 <= 100) {
  console.log(i2)
  i++
};


let i3 = 1;
while (i3 <= 100) {
    if ( i3 % 2 == 0)
    console.log(i3)
};


let arr20 = [1, 2, 3, 4, 5];
let sum3 = 0;
for (let elem of arr20) {
	if (elem >0 && elem < 10 ) 
    { console.log(elem);
}
}









































