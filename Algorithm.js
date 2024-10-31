// 알고리즘

// 팩토리얼 함수 정의
function factorial (num) {
    if (num === 1)
        return 1;
    return num * factorial(num-1);
}

// 팩토리얼 함수 호출
console.log(factorial(3));  // 6
console.log(factorial(4));  // 24
console.log(factorial(5));  // 120
console.log(factorial(6));  // 720
console.log(factorial(10));  // 3628800