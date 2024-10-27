// 문자열 관련 함수 연습

// 문자열 길이
var a = 'Hello World!!!';
console.log(a.length);     // 14

// 문자열 결합
var a = 'Hello';
var b = 'World';
console.log(a.concat(b));   // HelloWorld
console.log(a+b);           // HelloWorld

// 문자열 인덱싱
var a = 'Hello World';
console.log(a.charAt(0));   // H
console.log(a.charAt(6));   // W
console.log(a[6]);          // W

// 문자열에서 특정 부분 골라내기


// 문자열 분할(배열로 저장)
var a = 'abcdefg';
var b = 'My Name is JavaScript';
console.log(a.split(''));       // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(a.split('', 5));    // ['a', 'b', 'c', 'd', 'e']
console.log(b.split(' '));      // ['My', 'Name', 'is', 'JavaScript']
console.log(b.split(' ', 2));   // ['My', 'Name']

// 문자열 대소문자 변환
var a = 'Hello JavaScript';
console.log(a.toUpperCase());   // HELLO JAVASCRIPT
console.log(a.toLowerCase());   // hello javascript

// 문자열 앞뒤 공백 제거
var a = '   Hello   World  ';
console.log(a.trim());           // Hello   World

// 문자열 치환
var a = 'A door is orange colored.';
console.log(a.replace('or', '**'));     // A do** is orange colored.
console.log(a.replaceAll('or', '**'));  // A do** is **ange col**ed.

