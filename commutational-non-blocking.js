// load child process module 
var child_process = require('child_process');

console.log(1);

// run child process
// run command node with filename
var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
  // inherit child process output to main process
  // console log
  stdio: 'inherit'
});

console.log(2);