let passport = require('passport')
let User = require('../models/User')
var FacebookTokenStrategy = require('passport-facebook-token');


passport.use(new FacebookTokenStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  fbGraphVersion: 'v3.0'
}, function (accessToken, refreshToken, profile, done) {
  User.findOne({ facebookId: profile.id })
    .then(user => {
      if (user) {
        return done(null, user)
      }
      return User.create({
        facebookId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value,
        photoURL: profile.photos[0].value
      })
    })
    .then(u => done(null, u))
    .catch(e => done(e))
}
));

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = passport