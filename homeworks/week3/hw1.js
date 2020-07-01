function solve(input) {
  const number = Number(input[0]);
  let output = '';
  for (let i = 1; i <= number; i += 1) {
    output += '*';
    console.log(output);
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
