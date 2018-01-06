// load express module
var express = require('express');
var app = express();

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