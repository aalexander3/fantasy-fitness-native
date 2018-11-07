import { SET_USER } from './actionTypes'

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user.data
  }
}
