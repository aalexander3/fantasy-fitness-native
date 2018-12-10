import { SET_LEAGUE } from './actionTypes'

export const setLeague = (league) => {
  return {
    type: SET_LEAGUE,
    payload: league
  }
}
