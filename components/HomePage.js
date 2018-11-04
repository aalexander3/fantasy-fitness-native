import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Animated, Easing } from 'react-native'
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
    display: 'PROFILE',
    profileY:  new Animated.Value(0)
  }

  componentDidMount(){
    const { UserAdapter } = RootAdapter
    UserAdapter.show(7).then(this.props.setUser)
    this.profileIn()
  }

  changeDisplay = newDisplay => {
    switch (newDisplay) {
      case 'PROFILE':
        this.setState({ display: newDisplay, profileY: new Animated.Value(0) }, this.profileIn)
        break;
      case 'TEAMS':
        this.setState({ display: newDisplay, profileY: new Animated.Value(1) }, () => {
          this.profileOut()
        })
        break;
      case 'PROFILE':

        break;
      default:

    }
  }

  profileIn = () => {
    Animated.timing(
    this.state.profileY,
      {
        toValue: 1,
        duration: 400,
        easing: Easing.linear
      }
    ).start()
  }

  profileOut = () => {
    console.log(this.state.profileY);
    Animated.timing(
      this.state.profileY,
        {
          toValue: 0,
          duration: 400,
          easing: Easing.linear
        }
      ).start()
  }

  renderUser = () => {
    const { user } = this.props
    const { first_name, last_name } = user.attributes
    const { display } = this.state
    const fullName = `${first_name} ${last_name}`

    if (display !== 'PROFILE') {
      const profileY = this.state.profileY.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200]
        })

      return (
        <Animated.View style={{ transform: [{translateY: profileY }] }} >
          <TouchableHighlight
            onPress={()=>this.changeDisplay('PROFILE')}
            underlayColor='white' >
              <Text style={AppStyle.header}>
                { fullName }
              </Text>
          </TouchableHighlight>
        </Animated.View>)
    } else {
      const profileY = this.state.profileY.interpolate({
          inputRange: [0, 1],
          outputRange: [-200, 0]
        })

      return (
        <Animated.View style={{ transform: [{translateY: profileY }] }} >
          <UserCard user={ user } />
        </Animated.View>
      )
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
