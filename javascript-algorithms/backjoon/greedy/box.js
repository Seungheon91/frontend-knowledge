let fs = require("fs");
let input = fs.readFileSync("./box.txt").toString().split("\n");

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

let length = Number(input[0].split(" ")[0]);
let width = Number(input[0].split(" ")[1]);
let height = Number(input[0].split(" ")[2]);
let cubes = Array(20).fill(0);

let n = Number(input[1]);
for (let i = 2; i <= n; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  cubes[a] = b;
}

console.log(cubes);

let size = 19;
size = nearestSquare(length);
console.log(size);
size = Math.min(size, nearestSquare(width));
console.log(size);
size = Math.min(size, nearestSquare(height));
console.log(size);
