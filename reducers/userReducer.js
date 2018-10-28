const userState = {}

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload
    default:
      return state
  }
}
