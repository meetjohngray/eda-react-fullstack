import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/index'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MESSAGE:
      return action.message
    case CLEAR_MESSAGE:
      return initialState
    default:
      return state
  }
}

export default reducer 