function solve(input) {
  const number = Number(input[0]);
  for (let i = 0; i < number; i += 1) {
    let check = 0;
    if (Number(input[i + 1]) === 1) check = 1;
    else if (Number(input[i + 1]) === 2) check = 0;
    else {
      for (let y = 2; y < Number(input[i + 1]); y += 1) {
        if (Number(input[i + 1]) % y === 0) {
          check = 1;
          break;
        }
      }
    }
    if (check === 0) console.log('Prime');
    else console.log('Composite');
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
