// 배열 관련 함수 연습

// 배열 길이(원소 개수) 구하기
var arr = ['A', 'B', 'C', 'D'];
console.log(arr.length);    // 4
 
// 배열 인덱싱(원소 출력)
var arr = ['A', 'B', 'C', 'D'];
console.log(arr[0]);     // A
console.log(arr[3]);     // D

// 배열 슬라이싱(start, end)
var arr = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(arr.slice(1));      // ['B', 'C', 'D', 'E', 'F']
console.log(arr.slice(1, 4));   // ['B', 'C', 'D']
console.log(arr.slice(-1));     // ['F']
console.log(arr.slice(-3, -1)); // ['D', 'E']
console.log(arr.slice(2, -1));  // ['C', 'D', 'E']

// 특정 원소를 찾아 인덱스 출력
// (값이 같은 원소가 여러개면 첫번째로 나타나는 위치)
var arr = ['A', 'B', 'C', 'D'];
console.log(arr.indexOf('C'));  // 2

// 배열 결합
var a = ['A', 'B', 'C'];
var b = ['D', 'E', 'F'];
console.log(a.concat(b));   // ['A', 'B', 'C', 'D', 'E', 'F']
console.log([...a, ...b])   // ['A', 'B', 'C', 'D', 'E', 'F']

// 배열 마지막에 원소 추가
var arr = ['A', 'B', 'C'];
arr.push('FAIL');
console.log(arr);   // ['A', 'B', 'C', 'FAIL']

// 배열 마지막 원소 제거(return)
var arr = ['A', 'B', 'C', 'FAIL']
arr.pop();          // 'FAIL'
console.log(arr);   // ['A', 'B', 'C']

// 배열 첫번째에 원소 추가
var arr = ['A', 'B', 'C'];
arr.unshift('SSS');
console.log(arr);   // ['SSS', 'A', 'B', 'C']

// 배열 첫번째 원소 제거(return)
var arr = ['SSS', 'A', 'B', 'C']
arr.shift();        // 'SSS'
console.log(arr);   // ['A', 'B', 'C']

// 배열 뒤집기
var arr = ['A', 'B', 'C', 'D'];
console.log(arr.reverse()); // ['D', 'C', 'B', 'A']

// 배열 정렬(문자열 정렬)
var arr = [30, 200, 'B', '마바사', 100, 'C', 300, 'A', 11, '가나다'];
console.log(arr.sort());    // [100, 11, 200, 30, 300, 'A', 'B', 'C', '가나다', '마바사']

// 배열 정렬(숫자 정렬)
var arr = [10, 3, 8, 4, 1];
var arr_sorted = arr.sort((a, b) => a-b);   // 오름차순 정렬
console.log(arr_sorted);    // [1, 3, 4, 8, 10]
var arr_sorted = arr.sort((a, b) => b-a);   // 내림차순 정렬
console.log(arr_sorted);    // [10, 8, 4, 3, 1]
var arr_sorted = arr.sort()                 // 문자열 정렬
console.log(arr_sorted);    // [1, 10, 3, 4, 8]

// 배열을 문자열로 변환
var arr = ['A', 'B', 'C', 'D'];
console.log(arr.toString());    // A,B,C,D
console.log(arr.join());        // A,B,C,D
console.log(arr.join('/'));     // A/B/C/D
console.log(arr.join('::'));    // A::B::C::D

// 배열을 집합(Set)으로 변환(중복 요소 제거)
var arr = ['B', 'A', 'C', 'A', 'A', 'B'];
var arrSet = [...new Set(arr)];
console.log(arrSet);    // ['B', 'A', 'C']

// 스프레드 연산자
var a = ['A', 'B', 'C'];
var b = ['D', 'E', 'F'];
console.log(...a);          // A B C
console.log(...b);          // D E F

// 스프레드 연산자 - 배열 결합
console.log([...a, ...b]);  // ['A', 'B', 'C', 'D', 'E', 'F']

// 스프레드 연산자 - 배열 복사
var arr = ['A', 'B', 'C'];
var arr2 = arr;         // 얕은 복사
var arr3 = [...arr];    // 깊은 복사
arr.push('D', 'E');
console.log(arr2);  // ['A', 'B', 'C', 'D', 'E']
console.log(arr3);  // ['A', 'B', 'C']