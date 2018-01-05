# MEAN
Demo mean stack application

## Commands
1. Check node version: __node -v__
2. Check npm version: __npm -v__
3. Node REPL: __node__
4. Go to directory: __cd MEAN__
5. Run node file in terminal: __node app.js__

## Code Description
1. Spliting node application into multiple files
2. Using require to load in files
3. Exposing functionality using module.exports

## Code Explanation
require('instantHello');  
- This will only look into node_modules folder. To load local directory file use  
require('./instanHello');  
- Here we can use .js extension after file name, but it is best practise to not include it.  

module.exports  
- This is required to expose module methods to the application, so it can be imported in other files using require

var talk = require('./talk');  
- Here require statment will look for talk.js file in same directory, if no file found, it will check for file index.js inside folder named talk
