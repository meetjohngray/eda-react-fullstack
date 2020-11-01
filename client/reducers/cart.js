import { ADD_TO_CART } from "../actions"

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_TO_CART:
        // Check if it's in the cart
        // const itemInCart = state.find(item => {
        //   return item.product_id == action.id
        // }) 
        // If it is, add another to the quantity
        // if(itemInCart) {
        //   return state.map(item => {
        //     if(item.product_id == action.id) {
        //       item.quantity++
        //     }
        //     return item
        //   })

         // If not, add it  
        // } else {
        //   return [...state, {product_id: action.id, quantity: 1}]
        // }

        // Another way of doing the above
        let foundInCart = false
        let newState = state.map(item => {
          if(item.product_id == action.id) {
            foundInCart = true
            item.quantity++
          }
          return item
        })

        if(!foundInCart) {
          newState.push({product_id: action.id, quantity: 1})
        }

        return newState
        
      default:
        return state
  }
}

export default reducer