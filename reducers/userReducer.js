import { SET_INITIAL_STATE, SET_USER, UPDATE_USER_COMPLETION, ADD_COMPLETION } from '../actions/actionTypes'

const userState = {}

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return action.payload
    case SET_USER:
      return action.payload
    case ADD_COMPLETION:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          completions: [...state.attributes.completions, action.payload]
        }
      }
    case UPDATE_USER_COMPLETION:
      const newCompletions = state.attributes.completions.map(completion => {
        return completion.id === action.payload.id ? action.payload : completion
      })
      return {
        ...state,
        attributes: {
          ...state.attributes,
          completions: newCompletions
        }
      }
    default:
      return state
  }
}
