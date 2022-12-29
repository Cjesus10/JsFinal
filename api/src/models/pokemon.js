const { ObjectID } = require("bson")
const mongoose = require("mongoose")

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  userId: {
    type: ObjectID,
    required: true
  }

})

module.exports = mongoose.model('Pokemon', pokemonSchema)