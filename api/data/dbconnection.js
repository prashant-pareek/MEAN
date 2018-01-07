var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017';
var dbname = 'meanhotel';

var _connection = null;

var open = function() {
  // Use connect method to connect to the server
  MongoClient.connect(dburl, function(err, client) {
    if(err) {
      console.log('DB connection failed');
      return;
    }
   
    _connection = client.db(dbname);

   console.log('DB connection open');
  });
};

var get = function() {
  return _connection;
};

module.exports = {
  open : open,
  get : get
};