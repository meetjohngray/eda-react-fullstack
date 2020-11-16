export const SET_PRODUCTS = 'SET_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const EMPTY_CART = 'EMPTY_CART'
export const SET_MESSAGE = 'SET_MESSAGE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

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

export function emptyCart() {
  return {
    type: EMPTY_CART
  }
}

export function setMessage(messageType, text) {
  return {
    type: SET_MESSAGE,
    message: {
      messageType,
      text,
    }
  }
}  

export function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  }
}