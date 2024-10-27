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

// for of 반복문(배열 활용)
let arr = [10, 20, 30, 40];
for (let i of arr) {
    console.log(i);     // 10 20 30 40
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