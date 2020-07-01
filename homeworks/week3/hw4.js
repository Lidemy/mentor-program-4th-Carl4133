function solve(input) {
  const serial = input[0];
  let reverse = '';
  for (let i = (serial.length - 1); i >= 0; i -= 1) {
    reverse += serial[i];
  }
  if (reverse === serial) console.log('True');
  else console.log('False');
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
