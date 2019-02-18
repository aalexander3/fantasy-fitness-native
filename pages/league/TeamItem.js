import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { HeaderWithAvatar } from '../../components/headers'
import { NormalLink } from '../../components/buttons'
import { ViewStyles, TouchableHighlight } from '../../styles/ViewStyles'

const TeamItem = ({ team, rosterSize, currentUser, leagueId }) => {

  // need to know current person & if they're already on a team or not.
  // if not - show buttons to join team
  const joinTeam = () => {
    // sends request to add current user to that team
    // create a new user_team
    // needs teamId and userId and authorization ?
    console.log(team);
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

export default connect(mapStateToProps)(TeamItem)
