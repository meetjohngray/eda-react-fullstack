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
      return sendEmail(order)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Something went wrong"})
    }) 
})

// Send an email to the orders team.
function sendEmail(order){
   return request.post('https://api.sendgrid.com/v3/mail/send')
   .set('Authorization', 'Bearer ' + process.env.SENDGRID_API_KEY)
   .set('Content-Type', 'application/json')
   .send({
     personalizations: [
       {
         to: [
           {
             email: orderTeamEmailToAddress,
             name: orderTeamEmailToAddress
          }
         ],
         subject: 'New order ' + order.order_code,
       }
     ],
       from: {
         email: orderTeamEmailFromAddress,
         name: orderTeamEmailFromAddress
       },
       reply_to: {
         email: orderTeamEmailFromAddress,
         name: orderTeamEmailFromAddress
       },
       content: [
         {
           type: 'text/plain',
           value:`
           Hi there!
           
           You have a new order: ${order.order_code}

           Cheers`
         }
       ]
   })
   .then(() => {
     console.log('email sent')
   })
   .catch(err => {
     console.log('email NOT sent', err)
   })
}

module.exports = router