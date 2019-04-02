import {config, BASE_URL, jsonify, configWithAuth} from './BaseConfig'

const TeamAdapter = {
  index: () => fetch(`${BASE_URL}teams`).then(jsonify),
  show: (id) => fetch(`${BASE_URL}teams/${id}`).then(jsonify),
  create: (id, body) => fetch(`${BASE_URL}teams/${id}`, config("POST", body)).then(jsonify),
  update: (id, body) => fetch(`${BASE_URL}teams/${id}`, config("PUT", body)).then(jsonify),
  destroy: (id) => fetch(`${BASE_URL}teams/${id}`, config("DESTROY")).then(jsonify),
  join: (id, token) => fetch(`${BASE_URL}teams/${id}/join`, configWithAuth("POST", token)).then(jsonify)
}

export default TeamAdapter
