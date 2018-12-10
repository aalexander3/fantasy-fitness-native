import { SET_LEAGUE } from '../actions/actionTypes'

const leagueState = {}

export const leagueReducer = (state = leagueState, action) => {
  switch (action.type) {
    case SET_LEAGUE:
      return action.payload
    default:
      return state
  }
}
