import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { workoutReducer } from './workoutReducer'

const rootReducer = combineReducers({
  user: userReducer,
  workout: workoutReducer
})

export default rootReducer
