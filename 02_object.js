// 오브젝트(객체 타입) 관련 함수 연습

// 객체 선언
let obj = {
    name: '홍길동',
    age: 27,
    'nick-name': '2sjin'
};

// 객체 출력
console.log(obj);   // {name: '홍길동', age: 27, nick-name: '2sjin'}

// 객체의 프로퍼티 출력
console.log(obj.name);          // 홍길동
console.log(obj['nick-name']);  // 2sjin

// 객체의 key, value 배열 출력
console.log(Object.keys(obj));      // ['name', 'age', 'nick-name']
console.log(Object.values(obj));    // ['홍길동', 27, '2sjin']

// 객체 프로퍼티 추가
obj['country'] = '대한민국';
console.log(obj['country']);    // 대한민국

// 객체의 프로퍼티 수정
obj['name'] = '이승진';
console.log(obj['name']);       // 이승진

// 객체 프로퍼티 삭제
delete obj['nick-name'];
console.log(obj);   // {name: '이승진', age: 27, country: '대한민국'}