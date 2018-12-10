export const BASE_URL = 'http://10.39.108.161:3000/api/v1/'

export const config = (method, body=nil) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body)
  }
}

export const configWithAuth = (token) => {
    return {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      }
  }
}

export const jsonify = (res) => res.json()
