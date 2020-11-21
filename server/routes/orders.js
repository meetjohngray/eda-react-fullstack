const express = require('express')
const request = require('superagent')
const router = express.Router()

const ordersDb = require('../db/orders')

// Put in the .env file
const orderTeamEmailFromAddress = 'john.gray@devacademy.co.nz'
const orderTeamEmailToAddress = 'john.gray@devacademy.co.nz'

router.post('/', (req, res) => {
  const order = req.body
  ordersDb.createOrder(order)
    .then((order) =>{
      res.json(order)
      return order
    })
    .then(order => {
      // Send an email to the orders team.
      request.post('https://api.sendgrid.com/v3/mailsend')
        .set('Authorization', 'Bearer ' + process.env.SENDGRID_API_KEY)

    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Something went wrong"})
    }) 
})

module.exports = router