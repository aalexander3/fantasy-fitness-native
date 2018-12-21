import {config, BASE_URL, jsonify, configWithMultiPart} from './BaseConfig'

const UserAdapter = {
  index: () => fetch(`${BASE_URL}users`).then(jsonify),
  show: (id) => fetch(`${BASE_URL}users/${id}`).then(jsonify),
  create: (data) => fetch(`${BASE_URL}users`, configWithMultiPart(data)).then(jsonify),
  // create: (body) => fetch(`${BASE_URL}users`, config("POST", body)).then(jsonify),
  update: (id, body) => fetch(`${BASE_URL}users/${id}`, config("PUT", body)).then(jsonify),
  destroy: (id) => fetch(`${BASE_URL}users/${id}`, config("DESTROY")).then(jsonify)
}

export default UserAdapter
