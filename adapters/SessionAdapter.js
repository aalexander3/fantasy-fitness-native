import { config, BASE_URL, jsonify, configWithAuth } from './BaseConfig'

const SessionAdapter = {
  login: (body) => fetch(`${BASE_URL}login`, config("POST", body)).then(jsonify),
  reauth: (token) => fetch(`${BASE_URL}reauth`, configWithAuth(token)).then(jsonify)
}

export default SessionAdapter
