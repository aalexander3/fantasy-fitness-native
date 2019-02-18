import { SET_WORKOUTS, SET_WORKOUT, SET_PACKS } from './actionTypes'
// import { SET_WORKOUTS, SET_WORKOUT, SET_WORKOUT_PACKS } from './actionTypes'

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
    payload: workout.data
  }
}

// export const setWorkoutPacks = (packs) => {
//   return {
//     type: SET_WORKOUT_PACKS,
//     payload: packs
//   }
// }
