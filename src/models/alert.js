const { mongoose, } = require("mongoose");

const AlertSchema = new mongoose.Schema({
  timestamp: Number,
  machine: String,
  anomaly: String,
  sensor: String,
  soundClip: String,
  reason: String,
  action: String,
  comment: String,
})

module.exports = mongoose.model('Alert', AlertSchema)