# MEAN
Demo mean stack application

## Commands
Run node file in terminal:  
__node setTimeout.js__
__node readFileSync.js__
__node readFileAsync.js__

## Code Description
1. Asynchronous non blocking code
2. Node needs asynchronous operations
3. Asynchronous code and callbacks
4. Dealing with commutational blockers

## Code Explanation
node setTimeout.js
- Learning about asynchronous code, that doesn't block main process  

node readFileSync.js
- Reading file synchronously

node readFileAsync.js
- Reading file asynchronously without affecting main process

node commutational-blocking.js
- Checking process that can block main process

node commutational-non-blocking.js
- Checking how to write non blocking code and putting blocking process to run in child process

## Notes
* Don't block main process of node js
* If node process delay a single visitor, it will delay all the visitor
* Node.js is designed to address I/O scalability, not commutational scalability
* When asynchronous code completes, it calls callback functions
* Heavy commutational process that are required to run in main process, needs to be handled by child process

