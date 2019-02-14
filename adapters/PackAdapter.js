import {config, BASE_URL, jsonify, configWithAuth} from './BaseConfig'

const PackAdapter = {
  index: (token) => fetch(`${BASE_URL}packs`, configWithAuth("GET", token)).then(jsonify),
  show: (id) => fetch(`${BASE_URL}packs/${id}`).then(jsonify),
  create: (id, body) => fetch(`${BASE_URL}packs/${id}`, config("POST", body)).then(jsonify),
}

export default PackAdapter
