function solve(input) {
  const pack = input[0].split(' ').map(Number);
  // console.log(pack)
  const things = [];
  for (let i = 1; i <= pack[0]; i += 1) {
    things.push(input[i].split(' ').map(Number));
  }

  const bagMatrix = [];

  for (let w = 0; w <= pack[1]; w += 1) {
    bagMatrix[w] = [];
    // 內層for迴圈j代表 紀錄物品的索引值
    for (let j = 0; j < things.length; j += 1) {
      // 背包重量為0，肯定不能放任何東西進去
      if (w === 0) bagMatrix[w][j] = 0;
      //  背包的容量小於物品j的重量
      else if (w < things[j][0]) bagMatrix[w][j] = bagMatrix[w][j - 1] || 0;
      //  這邊紀錄的是取物品和不取物品的情況下，選擇結果較大的值填入陣列內
      else {
        bagMatrix[w][j] = Math.max((bagMatrix[w - things[j][0]][j - 1] || 0)
        + things[j][1], bagMatrix[w][j - 1] || 0);
      }
    }
  }
  console.log(bagMatrix[pack[1]][things.length - 1]);
}

const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
