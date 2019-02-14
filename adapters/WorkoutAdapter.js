import {config, BASE_URL, jsonify, configWithAuth } from './BaseConfig'

const WorkoutAdapter = {
  index: (token) => fetch(`${BASE_URL}workouts`, configWithAuth("GET", token)).then(jsonify),
  show: (id) => fetch(`${BASE_URL}workouts/${id}`).then(jsonify),
}

export default WorkoutAdapter
