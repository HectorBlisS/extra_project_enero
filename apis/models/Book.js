let mongoose = require('mongoose')
let Schema = mongoose.Schema

let bookSchema = new Schema({
  name: String,
  author: String
}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema)
