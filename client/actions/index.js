export const SET_PRODUCTS = 'SET_PRODUCTS'

export function setProducts(products) {
  console.log('5-setProducts')
  return {
    type: SET_PRODUCTS,
    products: products,
  }
}