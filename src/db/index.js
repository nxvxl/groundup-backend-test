const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/groundup' 

async function main() {
  await mongoose.connect(MONGO_URI);
}

module.exports = main;