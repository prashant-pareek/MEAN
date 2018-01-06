// load express module
var express = require('express');
var app = express();
var path = require('path');

// middleware log every route before 
// serving static files
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// logs only css routes, removing css from url
app.use('/css', function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// app.use is a middleware
// express.static method here checks for any url that
// matches with any file in public folder, it will directly
// send the file without generating the actual route
// serves index.html file
app.use(express.static(path.join(__dirname, 'public')));

// middleware log only routes that comes 
// after serving static files
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// set sub set of route to public 
// app.use('/public', express.static(path.join(__dirname, 'public')));

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