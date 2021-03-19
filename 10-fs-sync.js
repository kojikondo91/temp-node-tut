// Node built-in modules
/*
 - OS
 - PATH
 - FS
 - HTTP
*/

const { readFileSync, writeFileSync } = require('fs');
console.log('1 - start');

// Read file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

// Create/Write file - If the file does not exist yet, it will be created.
// Default "flag" is overwrite - Use "a" for append.
writeFileSync(
  './content/result-sync.txt',
  `here is the result: ${first}, ${second}`,
  { flag: 'a' }
);
console.log('2 - done with this task');
console.log('3 - starting the next one');
