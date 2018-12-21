import { SIGN_IN, SET_INITIAL_STATE } from './actionTypes'

export const signIn = () => {
  return {
    type: SIGN_IN,
    payload: true
  }
}

export const setInitialState = (user) => {
  console.log('init state', user);
  return {
    type: SET_INITIAL_STATE,
    payload: user
  }
}
