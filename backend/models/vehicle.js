// Placeholder for MongoDB vehicle model
const mongoose = require('mongoose');
const VehicleSchema = new mongoose.Schema({
  name: String,
  capacity: Number
});
module.exports = mongoose.model('Vehicle', VehicleSchema);
