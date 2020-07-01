/* eslint no-param-reassign: ["error", { "props": false }] */
let min = Infinity;
function recursion(maze, sx, sy, endx, endy, count) {
  if (count <= min) {
    if (sx === endy && sy === endx) min = Math.min(min, count);
    else {
      maze[sy][sx] = '#';
      if (sy >= 0 && sx + 1 >= 0 && sy <= endx && sx + 1 <= endy) {
        if (maze[sy][sx + 1] === '.') {
          recursion(maze, sx + 1, sy, endx, endy, count + 1);
        }
      }
      if (sy + 1 >= 0 && sx >= 0 && sy + 1 <= endx && sx <= endy) {
        if (maze[sy + 1][sx] === '.') {
          recursion(maze, sx, sy + 1, endx, endy, count + 1);
        }
      }
      if (sy >= 0 && sx - 1 >= 0 && sy <= endx && sx - 1 <= endy) {
        if (maze[sy][sx - 1] === '.') {
          recursion(maze, sx - 1, sy, endx, endy, count + 1);
        }
      }
      if (sy - 1 >= 0 && sx >= 0 && sy - 1 <= endx && sx <= endy) {
        if (maze[sy - 1][sx] === '.') {
          recursion(maze, sx, sy - 1, endx, endy, count + 1);
        }
      }
      maze[sy][sx] = '.';
    }
  }
}

function solve(input) {
  const wh = input[0].split(' ').map(Number);
  const endx = wh[0] - 1;
  const endy = wh[1] - 1;
  const maze = [];
  for (let i = 1; i <= endx + 1; i += 1) {
    maze.push(input[i].split(''));
  }
  const count = 0;
  const sx = 0;
  const sy = 0;
  // console.log(maze)
  recursion(maze, sx, sy, endx, endy, count, min);
  console.log(min);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
