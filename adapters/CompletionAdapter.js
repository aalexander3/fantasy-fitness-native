import {config, BASE_URL, jsonify, configWithAuth } from './BaseConfig'

const CompletionAdapter = {
  // create: (id, body) => fetch(`${BASE_URL}completions/${id}`, config("POST", body)).then(jsonify),
  create: (body) => fetch(`${BASE_URL}completions/`, config("POST", body)).then(jsonify),
  update: (id, body, token) => fetch(`${BASE_URL}completions/${id}`, configWithAuth("PUT", token, body)).then(jsonify),
}

export default CompletionAdapter
