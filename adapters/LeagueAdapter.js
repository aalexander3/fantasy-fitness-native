import {config, BASE_URL, jsonify} from './BaseConfig'

const LeagueAdapter = {
  index: () => fetch(`${BASE_URL}leagues`).then(jsonify),
  show: (id) => fetch(`${BASE_URL}leagues/${id}`).then(jsonify),
  create: (id, body) => fetch(`${BASE_URL}leagues/${id}`, config("POST", body)).then(jsonify),
  update: (id, body) => fetch(`${BASE_URL}leagues/${id}`, config("PUT", body)).then(jsonify),
  destroy: (id) => fetch(`${BASE_URL}leagues/${id}`, config("DESTROY")).then(jsonify)
}

export default LeagueAdapter
