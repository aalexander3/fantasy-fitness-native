import { SET_WORKOUTS, SET_WORKOUT, SET_PACKS, CLEAR_WORKOUT } from './actionTypes'

export const setWorkouts = (workouts) => {
  return {
    type: SET_WORKOUTS,
    payload: workouts.data
  }
}

export const setPacks = (packs) => {
  return {
    type: SET_PACKS,
    payload: packs.data
  }
}

export const setWorkout = (workout) => {
  return {
    type: SET_WORKOUT,
    payload: workout
  }
}

export const clearWorkout = (workout) => {
  return {
    type: CLEAR_WORKOUT,
    payload: workout
  }
}
