// load express module
var express = require('express');
var app = express();
var path = require('path');

// sending html file from public folder as response
app.get('/', function(req, res) {
  console.log('Get the Homepage');

  // here we put public and index.html in separate arguments
  // reason being different operating system uses different
  // directory separator
  res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'index.html'));
});

// set route for get request at path /
// passing request and response object
// in callback function
app.get('/', function(req, res) {
  console.log('Get the Homepage');

  // send text message to browser
  //res.send('Express yourself');

  // setting response status code
  // by chainin status function 
  // to response object
  res
    .status(404)
    .send('Express yourself');
});

// seding json response, useful for api response
app.get('/json', function(req, res) {
  console.log('Get the json');

  res
    .status(200)
    .json({'jsonData': true});
});

// sending file
app.get('/file', function(req, res) {
  console.log('Get the file');

  res
    .status(200)
    // join to path variable current directory path
    // using __dirname and file name
    .sendFile(path.join(__dirname, 'app.js'));
});

// set app variable port to 3000
app.set('port', 3000);

// use port variable to set app listen to port
// app.listen return object containing various 
// server properties
var server = app.listen(app.get('port'), function() {
  // console message after app started listening to port
  console.log('Magic happens on port ' + app.get('port'));

  // getting port number from server object
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});