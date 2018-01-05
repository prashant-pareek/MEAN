require('./instantHello');

// load module function
var goodbye = require('./talk/goodbye');
// load talk/index.js file
var talk = require('./talk');
var question = require('./talk/question');

// run function
goodbye();

talk.intro();
talk.hello('Prashant');

var answer = question.ask('What is the meaning of life ?');
console.log(answer);