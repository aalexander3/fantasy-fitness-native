<<<<<<< HEAD
import { SET_INITIAL_STATE, SET_TEAM, INIT_SET_TEAMS } from '../actions/actionTypes'
=======
import { SET_TEAM, SET_USER} from '../actions/actionTypes'
>>>>>>> master

const teamState = {currentTeam: '', allTeams: []}

export const teamReducer = (state = teamState, action) => {
  console.log('TEAM REDUCER', action);
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {...state,
        currentTeam: action.payload.attributes.teams[0],
        allTeams: action.payload.attributes.teams
      }
    case SET_TEAM:
      return action.payload
    default:
      return state
  }
}
