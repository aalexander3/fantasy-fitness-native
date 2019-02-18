import {config, BASE_URL, jsonify, configWithAuth, configWithMultiPart} from './BaseConfig'

const LeagueAdapter = {
  index: () => fetch(`${BASE_URL}leagues`).then(jsonify),
  show: (id) => fetch(`${BASE_URL}leagues/${id}`).then(jsonify),
  create: (body, token) => fetch(`${BASE_URL}leagues`, configWithMultiPart(body, token)).then(jsonify),
  update: (id, body) => fetch(`${BASE_URL}leagues/${id}`, config("PUT", body)).then(jsonify),
  destroy: (id) => fetch(`${BASE_URL}leagues/${id}`, config("DESTROY")).then(jsonify),
  invite: (id, body, token) => fetch(`${BASE_URL}leagues/${id}/invite`, configWithAuth("POST", token, body)).then(jsonify),
}

export default LeagueAdapter
