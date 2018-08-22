
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
  .then(connection => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log(error.message)
  })

//SCHEMA

const Schema = mongoose.Schema;

  const babySchema = new Schema({
    nameBoy:  { type: String,
      required: true},
    nameGirl: { type: String,
      required: true },
    guess: String,
    suggestedBy: { type: String,
      required: true},
    age: Number,
    meaning: String,
    reason: String
  });

// Model
let BabyName = mongoose.model('BabyName', babySchema);

module.exports = BabyName;