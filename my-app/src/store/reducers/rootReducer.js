import cartReducer from './cartReducer'
import userReducer from './userReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
})

export default rootReducer