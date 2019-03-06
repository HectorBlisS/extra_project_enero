let router = require('express').Router()
let Book = require('../models/Book')

//RESTful

//2 rutas

//generales

router.post('/', async (req, res, next) => {
  try {
    let book = await Book.create(req.body)
    res.status(201).json(book)
  } catch (e) {
    next(e)
  }
})

router.get('/', async (req, res, next) => {
  try {
    let books = await Book.find()
    res.status(200).json(books)
  }
  catch (e) {
    next(e)
  }
})



//especificas

module.exports = router