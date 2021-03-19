// Node built-in modules
/*
 - OS
 - PATH
 - FS
 - HTTP
*/

const { readFile, writeFile } = require('fs');

console.log('1 - start');

// Read first file
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  // Read second file
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    // Create/Write file - If the file does not exist yet, it will be created.
    // Default "flag" is overwrite - Use "a" for append.

    writeFile(
      './content/result-async.txt',
      `here is the result: ${first}, ${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(`Note that result is undefined here: ${result}`);
        console.log('2 - done with this task');
      }
    );
  });
});
console.log('3 - starting the next one');
