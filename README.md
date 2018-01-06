# MEAN
Demo mean stack application

## Commands
__npm init__ 
- Ask certain question to create basic create package.json file

__npm list -g --depth=0__
- List globally installed packages

__npm install express --save__
- Install express package, --save makes package version to get listed in package.json as dependency

__npm install mocha --save-dev__
- Install mocha package, --save-dev makes the package listed as developer dependency in package.json

__npm install__
- Installs all dependencies, including dev dependencies in node_modules directory. If node environment variable is set to production, it will not install dev dependencies. It will not install already installed dependencies.

__npm start__
- Runs command listed under name start in package.json scripts section

__npm install --production__
- Force not to install dev dependencies 

## Code Description
1. * NPM for dependency management

## Notes
package.json file list and manages dependencies that is required to run node js app
The wildcard ^ before package version in dependency section in package.json file, indicates that running command npm install with package.json in directory, it will latest minor version or patch version but not major latest version of package.  
eg: "express": "^4.16.2"  
It can install express version 4.17.0 or 4.16.3 if available, but not 5.0.0  

scripts section in package.json list short name of commands to run. Eg for "start" : "node app.js", command "npm start" will run "node app.js".  

npm command gives extra information while running command  
* app name
* app version
* app location i.e path of app directory



