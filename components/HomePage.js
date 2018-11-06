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

  // componentDidUpdate(prevProps, prevState, snashot){
  //   if (prevState.display === 'PROFILE' && this.state.display !== "PROFILE") this.profileOut()
  // }

  changeDisplay = newDisplay => {
    // what pieces need to be animated??
    // when do they need to change?
    // in what order of events does this need to happen?
    // change to begin animations ==> In/Out ==> setState of display

    switch (newDisplay) {
      case 'PROFILE':
        this.setState({ display: newDisplay, profileY: new Animated.Value(0) }, this.profileIn)
        break
      case 'TEAMS':
        this.setState({ profileY: new Animated.Value(1) }, this.profileOut)
        break
      case 'WORKOUTS':
        this.setState({ display: newDisplay, profileY: new Animated.Value(1) })
        break
      default:
        this.setState({ display: newDisplay, profileY: new Animated.Value(0) }, this.profileIn)
        break
    }
  }

  afterAnimation = () => {
    this.setState({ display: "TEAMS" })
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
    Animated.timing(
      this.state.profileY,
        {
          toValue: 0,
          duration: 400,
          easing: Easing.linear
        }
      ).start(this.afterAnimation)
  }

  renderUser = () => {
    const { user } = this.props
    const { first_name, last_name } = user.attributes
    const { display } = this.state
    const fullName = `${first_name} ${last_name}`

    const profileY = this.state.profileY.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0]
      })

    const height = this.state.profileY.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 275]
      })
    const opacity = this.state.profileY.interpolate({
        inputRange: [0, 1],
        outputRange: [.35, 1]
      })

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
      return (
        <Animated.View style={{ transform: [{translateY: profileY }], height, opacity }} >
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
