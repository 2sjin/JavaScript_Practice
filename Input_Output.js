// 입출력(코딩테스트 대비, VSCode에서는 정상 실행되지 않음)

// 입력(파일 시스템 모듈)
const fs = require('fs');   // fs 모듈 불러오기
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 출력(개행 있음)
console.log('Hello')
console.log('World')

// 출력(개행 없음)
process.stdout.write('Hello')
process.stdout.write('World')