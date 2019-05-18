const mongoose = require('mongoose');

const planetSchema = mongoose.Schema({
  name: String,
  orbitTime: Number,
  img: String,
  natives: String
});
const planetModel = mongoose.model('Planet', planetSchema);

module.exports = planetModel;
