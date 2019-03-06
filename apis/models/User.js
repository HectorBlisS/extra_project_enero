let mongoose = require('mongoose')
let Schema = mongoose.Schema
let passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new Schema({
  displayName: String,
  email: String,
  facebookId: String,
  photoURL: String
}, { timestamps: true })

userSchema.plugin(passportLocalMongoose, { usernameField: "email" })

module.exports = mongoose.model('User', userSchema)

