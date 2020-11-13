const connection = require('./connection')

function createOrder(order, db = connection) {
  const newOrder = {}
  const order_code = generateOrderCode()
  
  return db('orders').insert({order_code: order_code})
  .then(ids => {
    const order_id = ids[0]

    newOrder.id = order_id
    newOrder.order_code = order_code
    // creates a variable with all the order lines that need inserting
    const orderLineInsertPromises = order.map(line => {
      const order_line ={
        product_id: line.product_id,
        quantity: line.quantity,
        order_id: order_id
      }
      return db('order_lines').insert(order_line)
    })
      return Promise.all(orderLineInsertPromises)
    })
    .then(() =>{
      return newOrder
  })
}

function generateOrderCode() {
  // get a random num, turn it into hexidecimal, uppercase it, and if shorter than 5, add zeros
  return "ORD" + Math.round(Math.random() * 10000).toString(16).toUpperCase().padStart(5, '0') + "NZ"
}

module.exports = {
  createOrder,

}