// private variable not exposed
var filename = 'index.js';

// function can receive arguments from outside
var hello = function(name) {
  console.log('Hello ' + name);
}

var intro = function() {
  console.log('I am a node file called ' + filename);
}

module.exports = {
  hello: hello,
  intro: intro
}