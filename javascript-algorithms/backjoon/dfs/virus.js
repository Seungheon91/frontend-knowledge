/* https://www.acmicpc.net/problem/2606 */

let fs = require("fs");
let input = fs.readFileSync("./virus.txt").toString().split("\n");
let n = Number(input[0]);
let m = Number(input[1]);
let graph = [];

for (let i = 1; i <= n; i++) graph[i] = [];
console.log(graph);
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
console.log(graph);

let cnt = 0;
let visited = new Array(n + 1).fill(false);
function dfs(x) {
  visited[x] = true;
  cnt++;
  for (y of graph[x]) {
    console.log(y);
    if (!visited[y]) dfs(y);
  }
}
dfs(1);

console.log(visited);
console.log(cnt - 1);
