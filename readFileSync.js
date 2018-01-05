// file system module
var fs = require('fs');

console.log('Going to get a file');

// reading file synchronously
var file = fs.readFileSync('readFileSync.js');

console.log('Got the file');

console.log('App continuess..');