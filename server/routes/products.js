const express = require('express')
const router = express.Router()

const productDb = require('../db/products')

router.get('/', (req, res) => {
  productDb.getProducts()
    .then(products => {
      res.json(products)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Something went wrong"})
    })
})

module.exports = router