import request from 'superagent'

export function getOrders(){
  return request.get('/api/orders')
  .then(res => res.body)
}