function solve(input) {
  const region = input[0].split(' ');
  for (let i = Number(region[0]); i <= Number(region[1]); i += 1) {
    const testNumber = i.toString();
    let checkNumber = 0;
    for (let y = 0; y < testNumber.length; y += 1) {
      checkNumber += Number(testNumber[y]) ** testNumber.length;
    }
    if (Number(testNumber) === checkNumber) {
      console.log(checkNumber);
    }
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
