import { SIGN_IN } from '../actions/actionTypes'
// SIGN_IN, SIGN_IN, SIGN_UP
const sessionState = {
  logged_in: false
}

export const sessionReducer = (state = sessionState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {logged_in: action.payload}
    default:
      return state
  }
}
