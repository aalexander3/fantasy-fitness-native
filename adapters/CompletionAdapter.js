import { BASE_URL, jsonify, configWithAuth } from './BaseConfig'

const CompletionAdapter = {
  create: (body, token) => fetch(`${BASE_URL}completions`, configWithAuth("POST", token, body)).then(jsonify),
  update: (id, body, token) => fetch(`${BASE_URL}completions/${id}`, configWithAuth("PUT", token, body)).then(jsonify),
}

export default CompletionAdapter
