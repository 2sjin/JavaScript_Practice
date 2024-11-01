// DFS 예제
// 서로 상하좌우 연결된 땅을 한 구역으로 볼 때, 구역 수 구하기
// 예제에서는 0이 땅, 1이 벽으로 가정

// DFS 함수 정의
function dfs(row, col) {
    // 탐색할 땅 위치가 범위를 벗어난 곳이면 탐색 종료
    if (row < 0 || row >= n || col < 0 || col >= m) 
        return false;

    // 이미 방문한 땅이면 탐색 종료
    if (grid[row][col] === 1) 
        return false;

    // 방문하지 않은 땅 -> 해당 땅 방문 처리
    grid[row][col] = 1;

    // 상하좌우 탐색
    dfs(row-1, col);
    dfs(row+1, col);
    dfs(row, col-1);
    dfs(row, col+1);
    return true;
}

// 그리드 입력
let n = 4;  // 그리드 행 개수
let m = 5;  // 그리드 열 개수
let grid = [[0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]];

// 모든 땅 탐색
result = 0;
for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        if (dfs(i, j) === true) {
            result += 1;
        }
    }
}

// 구역 수 출력
console.log(result);    // 3
