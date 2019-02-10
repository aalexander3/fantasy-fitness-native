import React, { Component } from 'react'
import { View, Text, Animated, Easing, Image } from 'react-native'
import NewLeague from './NewLeague'
import { ViewStyles } from '../../styles/ViewStyles';
import { AppStyle } from '../../styles/AppStyle';
import { CardStyle } from '../../components/cards/CardStyle';
import { connect } from 'react-redux'
import { setLeague } from '../../actions/leagueActions'
import { Header } from '../../components/headers'
import { NormalLink } from '../../components/buttons'
import { UserCard } from '../../components/cards'
import TeamItem from './TeamItem'
import InvitationForm from './InvitationForm'

class LeaguePage extends Component {

  state = {
    inviting: false
  }

  renderLeague = () => {
    if (this.state.inviting) {
      return <InvitationForm goBack={this.getInvitations} currentLeague={this.props.currentLeague} />
    } else {
      if (this.props.currentLeague) {
        const { name, image_url, description, number_of_teams } = this.props.currentLeague

        const leagueInfo = {
          attributes: {
            first_name: name,
            last_name: '',
            avatar: image_url,
            bio: description
          }
        }

        return (
          <View style={ ViewStyles.profile } >
            <View style={ ViewStyles.signUpPage } >
              <UserCard user={leagueInfo} />
              {this.addInvitations()}
            </View>
            <View style={ ViewStyles.secondLayer } >
              <Header text="Workouts" />
            </View>
            <View style={ ViewStyles.thirdLayer } >
              {this.renderTeams()}
            </View>
          </View>
        )
      } else {
          return <NewLeague />
      }
    }
  }

  getInvitations = () => {
    this.setState(prevState => {
      return {
        inviting: !prevState.inviting
      }
    })
  }

  addInvitations = () => {
    // if the league is full - don't have the option to invite friends

    let { roster_size, number_of_teams } = this.props.currentLeague

    let leagueCount = this.props.currentLeague.teams.reduce((acc, team) => { return acc + team.teammates.length }, 0)

    if (leagueCount >= (roster_size * number_of_teams)) return null
    return <NormalLink text="Invite your friends" handlePress={this.getInvitations}/>
  }

  renderTeams = () => {
    const { teams, roster_size, id } = this.props.currentLeague
    if (!teams) return null
    return teams.map(team => {
      return <TeamItem key={team.id} team={team} rosterSize={roster_size} leagueId={id} />
    })
  }

  render(){
    return(
      <View style={ ViewStyles.profile } >
        {this.renderLeague()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    team: state.team,
    currentLeague: state.league.currentLeague
   }
}

export default connect(mapStateToProps, { setLeague })(LeaguePage)
