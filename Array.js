// 배열 관련 함수 연습

// 배열 원소 출력(인덱싱)
var arr = ['A', 'B', 'C', 'D'];
console.log(arr[0])     // A
console.log(arr[3])     // D

// 배열 길이(원소 개수) 구하기
var arr = ['A', 'B', 'C', 'D'];
console.log(arr.length);    // 4

// 특정 원소를 찾아 인덱스 출력
// (값이 같은 원소가 여러개면 첫번째로 나타나는 위치)
var arr = ['A', 'B', 'C', 'D'];
console.log(arr.indexOf('C'));  // 2

// 배열 결합
var a = ['A', 'B', 'C']
var b = ['D', 'E', 'F']
console.log(a.concat(b))    // ['A', 'B', 'C', 'D', 'E', 'F']

// 배열 슬라이싱

// 원소 추가

// 원소 제거

// 배열 뒤집기
var arr = ['A', 'B', 'C', 'D'];
console.log(arr.reverse())  // ['D', 'C', 'B', 'A']

// 배열 정렬(오름차순)
var arr = [200, 'B', '마바사', 100, 'C', 300, 'A', '가나다']
console.log(arr.sort())     // [100, 200, 300, 'A', 'B', 'C', '가나다', '마바사']

// 배열을 문자열로 변환
var arr = ['A', 'B', 'C', 'D'];
console.log(arr.toString());    // A,B,C,D
console.log(arr.join());        // A,B,C,D
console.log(arr.join('/'));     // A/B/C/D
console.log(arr.join('::'));    // A::B::C::D