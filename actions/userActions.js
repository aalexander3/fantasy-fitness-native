import { SET_USER, UPDATE_USER_COMPLETION, SET_TEAM } from './actionTypes'

export const setUser = (user) => {
  console.log("USER",user);
  return {
    type: SET_USER,
    payload: user.data
  }
}

export const updateUserCompletion = (completion) => {
  console.log(completion)
  return {
    type: UPDATE_USER_COMPLETION,
    payload: completion
  }
}
