import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Animated, Easing } from 'react-native'
import { AppStyle } from '../styles/AppStyle'
import { HomeStyle } from '../styles/HomeStyle'
import { connect } from 'react-redux'
import { setUser } from '../actions/userActions'

import RootAdapter from '../adapters/RootAdapter'
import UserCard from './UserCard'
import TeamCard from './TeamCard'
import CompletionCard from './CompletionCard'
import TeamAvatar from './TeamAvatar'

class HomePage extends Component {

  state = {
    display: 'PROFILE',
    nextDisplay: 'PROFILE'
  }

  componentDidMount(){
    const { UserAdapter } = RootAdapter
    UserAdapter.show(7).then(this.props.setUser)
  }

  changeDisplay = newDisplay => {
    // what pieces need to be animated??
    // when do they need to change?
    // in what order of events does this need to happen?
    // change to begin animations ==> In/Out ==> setState of display
    this.setState({ nextDisplay: newDisplay })
  }

  afterAnimation = () => {
    this.setState({ display: this.state.nextDisplay })
  }

  renderUser = () => {
    const { user } = this.props
    const { first_name, last_name } = user.attributes
    const { display } = this.state
    const fullName = `${first_name} ${last_name}`

    if (display !== 'PROFILE') {
      return (
          <TouchableHighlight
            onPress={()=>this.changeDisplay('PROFILE')}
            underlayColor='white' >
              <Text style={AppStyle.header}>
                { fullName }
              </Text>
          </TouchableHighlight>)
    } else {
      return <UserCard user={ user } nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation }/>
    }
  }

  renderTeams = () => {
    const { teams } = this.props.user.attributes
    const { display } = this.state

    if (display === 'TEAMS'){
      const teamCards = teams.map((team) => <TeamCard team={ team } key={ team.name } nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation } />)
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
    const { completions } = this.props.user.attributes
    const { display } = this.state

    // render claimed workouts, with name and icon as a little avatar
    // shows more detail when display is WORKOUTS

    if (display === 'WORKOUTS'){
      const workoutCards = completions.map((completion) => <CompletionCard completion={ completion } key={ completion.id } nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation } />)
      return (
        <ScrollView horizontal style={{padding: 10}} >
          {workoutCards}
        </ScrollView>
      )
    } else {
      const workoutCards = completions.map((completion) => <TeamAvatar team={ completion } key={ completion.id } />)
      return (
        <ScrollView horizontal style={{padding: 10}}>
          {workoutCards}
        </ScrollView>
      )
    }
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
          { attributes ? this.renderCompletions() : null }
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps, { setUser })(HomePage)
