import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TouchableHighlight } from 'react-native'
import { AppStyle } from '../styles/AppStyle'
import { HomeStyle } from '../styles/HomeStyle'
import { connect } from 'react-redux'
import { setUser } from '../actions/userActions'

import RootAdapter from '../adapters/RootAdapter'
import UserCard from './UserCard'
import TeamCard from './TeamCard'
import TeamAvatar from './TeamAvatar'

class HomePage extends Component {
  state = {
    scrollHeight: 0,
    display: 'PROFILE'
  }

  componentDidMount(){
    const { UserAdapter } = RootAdapter
    UserAdapter.show(7).then(this.props.setUser)
  }

  changeDisplay = newDisplay => {
    this.setState({ display: newDisplay})
  }

  renderUser = () => {
    const { user } = this.props
    const { first_name, last_name } = user.attributes
    const { display } = this.state
    const fullName = `${first_name} ${last_name}`

    if (display !== 'PROFILE') {
      return (
        <TouchableHighlight
          onPress={()=>this.changeDisplay("PROFILE")}
          underlayColor='white' >
            <Text style={AppStyle.header}>
              { fullName }
            </Text>
        </TouchableHighlight>)
    } else {
      return <UserCard user={ user } />
    }
  }

  renderTeams = () => {
    const { teams } = this.props.user.attributes
    const {display } = this.state

    if (display === 'TEAMS'){
      const teamCards = teams.map((team) => <TeamCard team={ team } key={ team.name } />)
      return (
        <ScrollView horizontal style={{padding: 10}} >
          {teamCards}
        </ScrollView>
      )
    } else {
      const teamCards = teams.map((team) => <TeamAvatar team={ team } key={ team.name } />)
      return (
        <ScrollView horizontal style={{padding: 10}}>
          {teamCards}
        </ScrollView>
      )
    }
  }

  renderCompletions = () => {
    // render claimed workouts, with name and icon as a little avatar
    // shows more detail when display is WORKOUTS
  }

  render(){
    const { attributes } = this.props.user
    const { display } = this.state

    return (
      <View style={ HomeStyle.profile } >
        <View style={ HomeStyle.firstLayer } >
          { attributes ? this.renderUser() : null }
        </View>
        <View style={ HomeStyle.secondLayer }>
          <TouchableHighlight
            onPress={()=>this.changeDisplay("TEAMS")}
            underlayColor='white' >
            <Text style={AppStyle.header}>My Teams</Text>
          </TouchableHighlight>
          { attributes ? this.renderTeams() : null }
        </View>
        <View style={ HomeStyle.thirdLayer }>
          <TouchableHighlight
            onPress={()=>this.changeDisplay("WORKOUTS")}
            underlayColor='white' >
            <Text style={AppStyle.header}>Claimed Workouts</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps, { setUser })(HomePage)
