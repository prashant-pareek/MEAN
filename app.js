// load express module
var express = require('express');
var app = express();
var path = require('path');

var routes = require('./api/routes');

// middleware log every route before 
// serving static files
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// app.use is a middleware
// express.static method here checks for any url that
// matches with any file in public folder, it will directly
// send the file without generating the actual route
// serves index.html file
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

// set app variable port to 3000
app.set('port', 3000);

// use port variable to set app listen to port
// app.listen return object containing various 
// server properties
var server = app.listen(app.get('port'), function() {
  // getting port number from server object
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});