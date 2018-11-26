import {config, BASE_URL, jsonify} from './BaseConfig'

const configWithAuth = (token) => {
    return {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      }
  }
}

const SessionAdapter = {
  login: (body) => fetch(`${BASE_URL}login`, config("POST", body)).then(jsonify),
  reauth: (token) => fetch(`${BASE_URL}reauth`, configWithAuth(token)).then(jsonify)
}


export default SessionAdapter
