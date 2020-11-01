export const SET_PRODUCTS = 'SET_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'

export function setProducts(products) {
  console.log('5-setProducts')
  return {
    type: SET_PRODUCTS,
    products: products,
  }
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id: id,
  }
}