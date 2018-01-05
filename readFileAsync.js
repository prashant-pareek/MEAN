var fs = require('fs');

var onFileLoad = function(err, file) {
  console.log('Got the file');
}

console.log('Going to get a file');

// reading file asynchronously and passing callback
// function to get response or error
fs.readFile('readFileSync.js', onFileLoad);

console.log('App continuess..');