import {config, BASE_URL, jsonify, configWithAuth } from './BaseConfig'

const ExerciseAdapter = {
  index: (token) => fetch(`${BASE_URL}exercises`, configWithAuth("GET", token)).then(jsonify),
  // show: (id) => fetch(`${BASE_URL}exercises/${id}`).then(jsonify),
}

export default ExerciseAdapter
