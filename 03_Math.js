// Math 함수 연습

// 절대값
console.log(Math.abs(-123));    // 123

// 제곱(2의 10승)
console.log(Math.pow(2, 10));   // 1024

// 제곱근
console.log(Math.sqrt(81));     // 9
console.log(Math.sqrt(2));      // 1.4142135623730951

// 최대값
console.log(Math.max(200, 500, 100, 300, 400));     // 500

// 최대값(배열은 스프레드 연산자 사용)
var arr = [200, 500, 100, 300, 400];
console.log(Math.max(...arr));                      // 500

// 최소값
console.log(Math.min(200, 500, 100, 300, 400))      // 100

// 최소값(배열은 스프레드 연산자 사용)
var arr = [200, 500, 100, 300, 400];
console.log(Math.min(...arr));                      // 100

// 올림
console.log('\n올림')
console.log(Math.ceil(10.1));   // 11
console.log(Math.ceil(99.9));   // 100
console.log(Math.ceil(-10.1));  // -10
console.log(Math.ceil(-99.9));  // -99

// 내림
console.log('\n내림')
console.log(Math.floor(10.1));  // 10
console.log(Math.floor(99.9));  // 99
console.log(Math.floor(-10.1)); // -11
console.log(Math.floor(-99.9)); // -100

// 반올림
console.log('\n반올림')
console.log(Math.round(10.1));  // 10
console.log(Math.round(99.9));  // 100
console.log(Math.round(-10.1)); // -10
console.log(Math.round(-99.9)); // -100

// 버림
console.log('\n버림')
console.log(Math.trunc(10.1));  // 10
console.log(Math.trunc(99.9));  // 99
console.log(Math.trunc(-10.1)); // -10
console.log(Math.trunc(-99.9)); // -99