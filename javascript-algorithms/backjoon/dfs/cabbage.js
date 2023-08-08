/* https://www.acmicpc.net/problem/1012 */
let fs = require("fs");
let input = fs.readFileSync("./cabbage.txt").toString().split("\n");

function dfs(graph, n, m, x, y) {
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

  // 현재 노드를 아직 처리하지 않았다면
  if (graph[x][y] == 1) {
    graph[x][y] = -1;
    // 상, 하, 좌, 우 위치들을 재귀적으로 호출
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);

    return true;
  }
  return false;
}

let testCases = Number(input[0]);
let line = 1;

while (testCases--) {
  // 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 위치 개수(K)
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  console.log(graph);
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }
  console.log(graph);

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++; // 현재 위치에서 dfs 수행
    }
  }
  line += k + 1; // 다음 테스트 케이스로 이동
  console.log(answer);
}
