const express = require('express');
const router = express.Router();
let passport = require('passport')

// signup desde facebook
router.get('/facebook/signup', passport.authenticate('facebook-token'), (req, res) => {
  res.status(200).json(req.user)
})

// signup desde facebook
router.post('/facebook/signup', passport.authenticate('facebook-token'), (req, res) => {
  res.status(200).json(req.user)
})

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
