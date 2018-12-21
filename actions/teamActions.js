import { INIT_SET_TEAMS, SET_TEAM } from './actionTypes'

export const setTeam = (team) => {
  // debugger
  // console.log('TEAM', team);
  return {
    type: SET_TEAM,
    payload: team
  }
}

export const initSetTeams = (teams) => {
  return {
    type: INIT_SET_TEAMS,
    payload: teams
  }
}
