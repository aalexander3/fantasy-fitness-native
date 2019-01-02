export const BASE_URL = 'http://192.168.1.151:3000/api/v1/'

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

export const configWithMultiPart = (data) => {
  return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    },
    method: 'POST',
    body: data
  }
}

export const jsonify = (res) => res.json()
