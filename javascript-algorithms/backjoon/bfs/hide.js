/* https://www.acmicpc.net/problem/1697 */

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let fs = require("fs");
let input = fs.readFileSync("./hide.txt").toString().split("\n");

let MAX = 10001;
let [n, k] = input[0].split(" ").map(Number);
let visited = new Array(MAX).fill(0);

function bfs() {
  queue = new Queue();
  queue.enqueue(n);
  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    if (cur == k) {
      return visited[cur];
    }
    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      // 공간을 벗어난 경우 무시
      if (nxt < 0 || nxt >= MAX) continue;
      // 아직 방문하지 않은 위치라면
      if (visited[nxt] == 0) {
        visited[nxt] = visited[cur] + 1;
        queue.enqueue(nxt);
      }
    }
  }
}

console.log(bfs());
