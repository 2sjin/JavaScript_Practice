// BFS 예제
// 미로에서 최단 경로 길이 구하기(시작점, 도착점 포함)
// 예제에서는 0이 벽, 1이 이동 가능한 길로 가정
// 출발점은 (0, 0)이고, 도착점은 (n, m)

// BFS 함수 정의
function bfs(row, col) {
    // 큐 정의, 시작점 push
    let queue = [[row, col]];

    while (queue.length > 0) {
        // 큐 pop -> 해당 위치로 이동
        [row, col] = queue.shift();

        // 상하좌우 탐색
        for (let i=0; i<4; i++) {
            // 다음 이동할 위치 저장
            let next_row = row + d_row[i];
            let next_col = col + d_col[i];

            // 탐색할 위치가 범위를 벗어난 곳이면 무시
            if (next_row < 0 || next_row >= n || next_col < 0 || next_col >= m) 
                continue;

            // 벽인 경우 무시
            if (grid[next_row][next_col] === 0)
                continue;

            // 이미 방문한 곳이면 무시
            if (grid[next_row][next_col] != 1)
                continue;

            // 처음 방문하는 곳에 최단 거리 기록
            grid[next_row][next_col] = grid[row][col] + 1;
            queue.push([next_row, next_col]);
        }
    }

    // 도착점까지의 최단 거리 반환
    return grid[n-1][m-1];
}

// 그리드 입력
let n = 5;  // 그리드 행 개수
let m = 6;  // 그리드 열 개수
let grid = [[1, 0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1]];

// 이동할 방향(상하좌우) 정의
let d_row = [-1, 1, 0, 0];
let d_col = [0, 0, -1, 1];

// 출발점 기준으로 BFS 탐색 수행
result = bfs(0, 0);

// 구역 수 출력
console.log(result);    // 10



