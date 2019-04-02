import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { HeaderWithAvatar } from '../../components/headers'
import { NormalLink } from '../../components/buttons'
import { ViewStyles, TouchableHighlight } from '../../styles/ViewStyles'
import { TeamAdapter } from '../../adapters'
import IsAsync from '../../HOC/IsAsync'

const TeamItem = ({ team, rosterSize, currentUser, leagueId, getToken }) => {

  const joinTeam = async () => {
    // sends request to add current user to that team
    // create a new user_team
    // needs teamId and userId and authorization ?
    // NOTE: do this soon and verify that it works!
    // w/ token and teamId should be able to make the join
    let token = await getToken()
    const teamId = team.id
    if (token){
      TeamAdapter.join(teamId, token)
        .then(console.log)
    }
  }

  const renderLink = () => {
    const onTeamInLeague = currentUser.attributes.teams.find(team => team.league.id === leagueId)
    const teamIsFull = team.teammates.length === rosterSize
    if (!onTeamInLeague && !teamIsFull) {
      return <NormalLink text="Join Team" handlePress={joinTeam}/>
    }
  }

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <HeaderWithAvatar text={team.name} avatar={team.image_url} />
      {renderLink()}
    </View>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

const enhance = compose(
  IsAsync,
  connect(mapStateToProps)
)

export default enhance(TeamItem)
