import { SET_USER, UPDATE_USER_COMPLETION, ADD_COMPLETION } from './actionTypes'

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user.data
  }
}

export const updateUserCompletion = (completion) => {
  return {
    type: UPDATE_USER_COMPLETION,
    payload: completion
  }
}

export const addCompletion = (completion) => {
  return {
    type: ADD_COMPLETION,
    payload: completion
  }
}
