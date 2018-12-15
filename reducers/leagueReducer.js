import { SET_INITIAL_STATE, SET_LEAGUE } from '../actions/actionTypes'

const leagueState = {currentLeague: {}, allLeagues: []}

export const leagueReducer = (state = leagueState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
        return {...state,
          currentLeague: action.payload.attributes.leagues[0],
          allLeagues: action.payload.attributes.leagues
        }
    case SET_LEAGUE:
      return action.payload
    default:
      return state
  }
}
