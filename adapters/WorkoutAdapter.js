import {config, BASE_URL, jsonify} from './BaseConfig'

const WorkoutAdapter = {
  index: () => fetch(`${BASE_URL}workouts`).then(jsonify),
  show: (id) => fetch(`${BASE_URL}workouts/${id}`).then(jsonify),
}

export default WorkoutAdapter
