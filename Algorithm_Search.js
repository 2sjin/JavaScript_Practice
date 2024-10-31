// DFS(깊이우선탐색), BFS(넓이우선탐색) 알고리즘

// 그래프
var graph = {
    1 : [2, 3, 8],
    2 : [1, 7],
    3 : [1, 4 ,5],
    4 : [3, 5],
    5 : [3, 4],
    6 : [7],
    7 : [2, 6, 8],
    8 : [1, 7]
};



// DFS 함수 정의
function dfs (graph, node, visited) {
    // 현재 노드 방문 처리
    console.log(node);
    visited.push(node);

    // 방문하지 않은 인접 노드 탐색(DFS)
    for (let next of graph[node]) {
        if (!visited.includes(next))
            dfs(graph, next, visited);
    }
}

// DFS 함수 호출
var visited = [...new Set()];   // 방문 노드 기록 집합
dfs(graph, 1, visited);         // 1 2 7 6 8 3 4 5


console.log('-'.repeat(20));


// BFS 함수 정의
function bfs (graph, start_node, visited) {
    // 큐 정의
    queue = [start_node];

    // 현재 노드를 방문 처리
    visited.push(start_node);

    while (queue.length > 0) {
        // 방문한 노드를 큐에서 꺼내기
        node = queue.shift();
        console.log(node);

        // 인접 노드 중 방문하지 않은 노드를 큐에 추가
        for (let next of graph[node]) {
            if (!visited.includes(next)) {
                queue.push(next);
                visited.push(next);     // 인접 노드 방문 처리
            }
        }
    }
}

// BFS 함수 호출
var visited = [...new Set()];   // 방문 노드 기록 집합
bfs(graph, 1, visited);         // 1 2 3 8 7 4 5 6