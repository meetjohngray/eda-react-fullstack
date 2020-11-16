import { combineReducers } from 'redux'

import cart from './cart'
import products from './products'
import message from './message'

export default combineReducers({
   cart,
   products,
   message
})