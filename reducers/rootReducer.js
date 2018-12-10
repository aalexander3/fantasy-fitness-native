import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { workoutReducer } from './workoutReducer'
import { teamReducer } from './teamReducer'
import { leagueReducer } from './leagueReducer'
import { sessionReducer } from './sessionReducer'

const rootReducer = combineReducers({
  user: userReducer,
  workout: workoutReducer,
  team: teamReducer,
  league: leagueReducer,
  session: sessionReducer
})

export default rootReducer
