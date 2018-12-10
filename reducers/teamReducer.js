import { SET_TEAM } from '../actions/actionTypes'

const teamState = {}

export const teamReducer = (state = teamState, action) => {
  switch (action.type) {
    case SET_TEAM:
      return action.payload
    default:
      return state
  }
}
