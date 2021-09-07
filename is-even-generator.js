const fs = require('fs');
const prettier = require('prettier');
const noOfItems = +process.argv[2] || 1000;

function isEvenGenerator(maxLimit) {
  let elseIfConditions = '';
  for (let i = 1; i < maxLimit; i++) {
    if (i % 2 === 0) {
      elseIfConditions += `else if (num === ${i}) return true;`;
    } else {
      elseIfConditions += `else if (num === ${i}) return false;`;
    }
  }

  const code =
    'function isEven(num) { if (num === 0) return true;' +
    elseIfConditions +
    'else return false; } module.exports = isEven;';

  return code;
}

function writeToFile() {
  const code = isEvenGenerator(noOfItems);
  fs.writeFileSync('script.js', code);
}

writeToFile();
