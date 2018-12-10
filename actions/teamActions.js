import { SET_TEAM } from './actionTypes'

export const setTeam = (team) => {
  console.log(team)
  return {
    type: SET_TEAM,
    payload: team
  }
}
