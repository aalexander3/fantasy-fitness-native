import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { workoutReducer } from './workoutReducer'
import { teamReducer } from './teamReducer'
import { leagueReducer } from './leagueReducer'

const rootReducer = combineReducers({
  user: userReducer,
  workout: workoutReducer,
  team: teamReducer,
  league: leagueReducer
})

export default rootReducer
