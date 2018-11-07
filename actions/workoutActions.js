import { SET_WORKOUTS, SET_WORKOUT } from './actionTypes'

export const setWorkouts = (workouts) => {
  return {
    type: SET_WORKOUTS,
    payload: workouts.data
  }
}
export const setWorkout = (workout) => {
  return {
    type: SET_WORKOUT,
    payload: workout.data
  }
}
