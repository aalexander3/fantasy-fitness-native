import { SET_WORKOUT, SET_WORKOUTS, SET_WORKOUT_PACKS } from '../actions/actionTypes'

const workoutState = {all: [], packs: [], current: null}

export const workoutReducer = (state = workoutState, action) => {
  switch (action.type) {
    case SET_WORKOUTS:
      return {...state, all: action.payload}
    case SET_WORKOUT:
      return {...state, current: action.payload}
    case SET_WORKOUT_PACKS:
      return {...state, packs: action.payload}
    default:
      return state
  }
}
