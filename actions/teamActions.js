import { INIT_SET_TEAMS, SET_TEAM } from './actionTypes'

export const setTeam = (teams) => {
  // debugger
  // console.log('TEAM', team);
  return {
    type: SET_TEAM,
    payload: teams
  }
}

export const initSetTeams = (teams) => {
  // debugger
  return {
    type: INIT_SET_TEAMS,
    payload: teams
  }
}
