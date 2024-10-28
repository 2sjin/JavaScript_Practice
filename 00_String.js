// 문자열 관련 함수 연습

// 문자열 길이
var a = 'Hello World!!!';
console.log(a.length);     // 14

// 문자열 결합
var a = 'Hello';
var b = 'World';
console.log(a.concat(b));   // HelloWorld
console.log(a + b);         // HelloWorld

// 문자열 인덱싱
var a = 'Hello World';
console.log(a.charAt(0));   // H
console.log(a.charAt(6));   // W
console.log(a[6]);          // W

// 문자열 슬라이싱(start, length)
var a = 'ABCDEFG';
console.log(a.substr(1));       // BCDEFG
console.log(a.substr(1, 4));    // BCDE

// 문자열 슬라이싱(start, end)
var a = 'abcdefg';
console.log(a.slice(1));        // bcdefg
console.log(a.slice(1, 4));     // bcd
console.log(a.slice(-1));       // g
console.log(a.slice(-3));       // efg
console.log(a.slice(2, -1));    // cdef

// 문자열 분할(배열로 저장)
var a = 'abcdefg';
var b = 'My Name is JavaScript';
console.log(a.split(''));       // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(a.split('', 5));    // ['a', 'b', 'c', 'd', 'e']
console.log(b.split(' '));      // ['My', 'Name', 'is', 'JavaScript']
console.log(b.split(' ', 2));   // ['My', 'Name']

// 특정 문자열의 시작 위치 확인
var a = 'My Name is JavaScript';
console.log(a.indexOf('i'));        // 8
console.log(a.indexOf('Name'));     // 3
console.log(a.indexOf('Java'));     // 11

// 특정 문자열의 마지막 위치 확인
var a = 'My Name is JavaScript';
console.log(a.lastIndexOf('i'));     // 18

// 특정 문자열을 포함하는지 확인
var a = 'My Name is JavaScript';
console.log(a.includes('Java'));        // true
console.log(a.includes('JavaScript'));  // true
console.log(a.includes('Python'));      // false

// 특정 문자열로 시작하는지 확인
var a = 'My Name is JavaScript';
console.log(a.startsWith('M'));         // true
console.log(a.startsWith('My Name'));   // true
console.log(a.startsWith('Script'));    // false

// 특정 문자열로 끝나는지 확인
var a = 'My Name is JavaScript';
console.log(a.endsWith('My Name'));   // false
console.log(a.endsWith('Script'));    // true

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

// 백틱(`) 활용: 템플릿 리터럴(문자열 내 변수나 수식 포함)
var a = 100;
var b = 200;
var c = `100 + 200 = ${a+b}`;
console.log(c)  // 100 + 200 = 300

// 백틱(`) 활용: 여러줄 문자 만들기
var a = `Hello,
JavaScript
World!!!`;
console.log(a);  // Hello,
                // JavaScript
                // World!!!

// 문자열을 숫자로 타입 변환
var str = '1234.567';
console.log(typeof str);    // string
var num = Number(str);
console.log(typeof num);    // number

// 숫자를 문자열로 타입 변환
var num = 1234.567;
console.log(typeof num);    // number
str = num.toString();
console.log(typeof str)     // string