import { SET_EXERCISES } from './actionTypes'


export const setExercises = (exercises) => {
  return {
    type: SET_EXERCISES,
    payload: exercises.data
  }
}
