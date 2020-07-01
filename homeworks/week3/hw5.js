/* global BigInt */
function solve(input) {
  for (let i = 1; i <= Number(input[0]); i += 1) {
    const tmp = input[i].split(' ');
    if (Number(tmp[2]) > 0 && BigInt(tmp[0]) > BigInt(tmp[1])) console.log('A');
    else if (Number(tmp[2]) > 0 && BigInt(tmp[0]) === BigInt(tmp[1])) console.log('DRAW');
    else if (Number(tmp[2]) > 0) console.log('B');
    else if (BigInt(tmp[0]) > BigInt(tmp[1])) console.log('B');
    else if (BigInt(tmp[0]) === BigInt(tmp[1])) console.log('DRAW');
    else console.log('A');
  }
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
