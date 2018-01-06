var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
  console.log('Get the hotels');
  res
    .status(200)
    .json(hotelData);
}

module.exports.hotelsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  var thisHotel = hotelData[hotelId];
  console.log('Get hotelId', hotelId);
  res
    .status(200)
    .json(thisHotel);
}