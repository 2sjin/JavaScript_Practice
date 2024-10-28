// 기타 연습

// for 반복문
for (let i=0; i<10; i++) {
    console.log(i);     // 0 1 2 3 4 5 6 7 8 9
}

// while 반복문
let i=0
while (i < 10) {
    console.log(i);     // 0 1 2 3 4 5 6 7 8 9
    i++;
}

// for of 반복문(배열 활용, 원소 출력)
var arr = [10, 20, 30, 40];
for (let i of arr) {
    console.log(i);     // 10 20 30 40
}

// for in 반복문(배열 활용, 원소 index-value 출력)
var arr = ['A', 'B', 'C', 'D'];
for (let i in arr) {
    console.log(i + '-' + arr[i]);  // 0-A 1-B 2-C 3-D
}

// for in 반복문(오브젝트 활용, key-value 출력)
let obj = {name: '홍길동', age: 27, country:'대한민국'};
for (let i in obj) {
    console.log(i + ':' + obj[i]);  // name:홍길동 age:27 country:'대한민국'
}

// 함수 정의 및 호출
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
console.log(add(100, 50))   // 150
console.log(add(123, 456))  // 579

// 두 변수의 값 교환하기(swap)
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);     // 10
console.log(b);     // 5