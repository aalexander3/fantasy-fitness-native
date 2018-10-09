import {config, BASE_URL, jsonify} from './BaseConfig'

const CompletionAdapter = {
  create: (id, body) => fetch(`${BASE_URL}completions/${id}`, config("POST", body)).then(jsonify),
  update: (id, body) => fetch(`${BASE_URL}completions/${id}`, config("PUT", body)).then(jsonify),
}

export default CompletionAdapter
