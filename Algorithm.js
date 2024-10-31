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



// 최대공약수 함수 정의(유클리드 호제법)
function gcd(a, b) {
    while (b != 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

// 최대공약수 함수 호출
console.log(gcd(16, 24));   // 8
console.log(gcd(4, 6));     // 2
console.log(gcd(30, 18));   // 6

// 최소공배수 함수 정의(두 수의 곱/최대공약수)
function lcm(a, b) {
    return a * b / gcd(a, b);
}

// 최소공배수 함수 호출
console.log(lcm(16, 24));   // 48
console.log(lcm(10, 8));    // 40
console.log(lcm(3, 4))      // 12  



// 순열 함수 정의/호출
function permutation(arr, n) {
    if (n === 0) return [[]];
    let result = [];
    for (let i in arr) {
        for (let j of permutation([...arr.slice(0, i), ...arr.slice(Number(i)+1)], n-1)) 
            result.push([arr[i], ...j]);
    }
    return result
}
// [1,2], [1,3], [1,4], [2,1], [2,3], [2,4], [3,1], [3,2], [3,4], [4,1], [4,2], [4,3]
res = permutation([1, 2, 3, 4], 2);
console.log('[' + res.join('], [') + ']');



// 조합 함수 정의/호출
function combination(arr, n) {
    if (n === 0) return [[]];
    let result = [];
    for (let i in arr) {
        for (let j of combination(arr.slice(Number(i)+1), n-1))
            result.push([arr[i], ...j]);
    }
    return result
}
// [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]
res = combination([1, 2, 3, 4], 2);
console.log('[' + res.join('], [') + ']');



// 중복순열 함수 정의/호출
function permutation_with_repetition(arr, n) {
    if (n === 0) return [[]];
    let result = [];
    for (let i in arr) {
        for (let j of permutation_with_repetition(arr, n-1))
            result.push([arr[i], ...j]);
    }
    return result;
}
// [1,1], [1,2], [1,3], [1,4], [2,1], [2,2], [2,3], [2,4], [3,1], [3,2], [3,3], [3,4], [4,1], [4,2], [4,3], [4,4]
res = permutation_with_repetition([1, 2, 3, 4], 2);
console.log('[' + res.join('], [') + ']');



// 중복조합 함수 정의/호출
function combination_with_repetition(arr, n) {
    if (n === 0) return [[]];
    let result = [];
    for (let i in arr) {
        for (let j of combination_with_repetition(arr.slice(Number(i)), n-1))
            result.push([arr[i], ...j]);
    }
    return result
}
// [1,1], [1,2], [1,3], [1,4], [2,2], [2,3], [2,4], [3,3], [3,4], [4,4]
res = combination_with_repetition([1, 2, 3, 4], 2);
console.log('[' + res.join('], [') + ']');