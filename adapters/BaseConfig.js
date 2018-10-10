export const BASE_URL = 'http://10.39.111.23:3000/api/v1/'

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

export const jsonify = (res) => res.json()
