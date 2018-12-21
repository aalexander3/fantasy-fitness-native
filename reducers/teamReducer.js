import { SET_INITIAL_STATE, SET_TEAM, INIT_SET_TEAMS } from '../actions/actionTypes'

const teamState = {currentTeam: {}, allTeams: []}

export const teamReducer = (state = teamState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {...state,
        currentTeam: action.payload.attributes.teams[0],
        allTeams: action.payload.attributes.teams
      }
    case SET_TEAM:
      return {...state,
        currentTeam: action.payload
      }
    default:
      return state
  }
}
