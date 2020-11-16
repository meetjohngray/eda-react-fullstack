import request from 'superagent'

export function createOrder(order){
  return request.post('/api/orders')
  .send(order) //Put the order in the request body
  .then(res => res.body)
}