import { SET_PRODUCTS } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      console.log('6-setProducts in Redux')
      return action.products
    default:
      return state
  }
}

export default reducer