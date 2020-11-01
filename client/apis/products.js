import request from 'superagent'

 export function getProducts(){
  console.log('3-getProducts API')
   return request.get('/api/products')
   .then(res => res.body)
 }