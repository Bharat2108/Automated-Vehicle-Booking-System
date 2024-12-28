// Placeholder for database configuration
const mongoose = require('mongoose');
const connectDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/avbs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
module.exports = connectDB;
