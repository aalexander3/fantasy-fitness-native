import { SET_WORKOUTS, SET_WORKOUT, SET_PACKS } from '../actions/actionTypes'


const workoutState = {all: [], current: null, packs: []}

export const workoutReducer = (state = workoutState, action) => {
  switch (action.type) {
    case SET_WORKOUTS:
      return {...state, all: action.payload}
    case SET_PACKS:
      return {...state, packs: action.payload}
    case SET_WORKOUT:
      return {...state, current: action.payload}
    default:
      return state
  }
}
