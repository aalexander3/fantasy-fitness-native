export const BASE_URL = 'http://192.168.0.4:3000/api/v1/'

export const config = (method, body=nil) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body)
  }
}

export const configWithAuth = (method, token, body) => {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(body)
  }
}

export const configWithMultiPart = (data, token) => {
  return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    },
    method: 'POST',
    body: data
  }
}

export const jsonify = (res) => res.json()
