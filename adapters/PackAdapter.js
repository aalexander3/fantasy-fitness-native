import {config, BASE_URL, jsonify} from './BaseConfig'

const PackAdapter = {
  index: () => fetch(`${BASE_URL}packs`).then(jsonify),
  show: (id) => fetch(`${BASE_URL}packs/${id}`).then(jsonify),
  create: (id, body) => fetch(`${BASE_URL}packs/${id}`, config("POST", body)).then(jsonify),
}

export default PackAdapter
