import React, { Component } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import { AppStyle } from '../../styles/AppStyle';
import { CardStyle } from '../../components/cards/CardStyle';
import { connect } from 'react-redux'
import IsAnimated from '../../HOC/IsAnimated'
import Header from '../../components/headers/Header'

import { setTeam } from '../../actions/teamActions'

// testing package
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

class CurrentTeamCard extends Component {

  onSwipeRight(gestureState) {
    // Make sure this still works with multiple teams
    let teams = this.props.team.allTeams
    let team = this.props.team.currentTeam
    let teamIndexInTeams = teams.indexOf(team)

    if (teams.length >= teamIndexInTeams + 2){
      this.props.setTeam(teams[teamIndexInTeams + 1])
    }else{
      this.props.setTeam(teams[0])
    }
  }

  onSwipeLeft(gestureState) {
    let teams = this.props.team.allTeams
    let team = this.props.team.currentTeam
    let teamIndexInTeams = teams.indexOf(team)

    if (teamIndexInTeams > 0){
      this.props.setTeam(teams[teamIndexInTeams - 1])
    }else{
      this.props.setTeam(teams[teams.length -1])
    }
  }

  render(){
    // might need to grab from this.props.currentTeam????
    const { name, motto, image_url, league } = this.props.team.currentTeam

    const profileY = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [100, 275]})
    const opacity = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ transform: [{translateY: profileY }], height, opacity }} >
        <GestureRecognizer
          onSwipeRight={(state) => this.onSwipeRight(state)}
          onSwipeLeft={(state) => this.onSwipeLeft(state)}
          >
          <View style={CardStyle.userCard} >
            <Image
              source={{uri: image_url }}
              style={[AppStyle.avatar, { height: 150, width: 150}, {borderRadius: 75}]} />
            <Text style={ AppStyle.header }>{ name }</Text>
            <Text>{ motto }</Text>
            <Text>League: { league.name }</Text>
          </View>
        </GestureRecognizer>
      </Animated.View>
    )
  }
}

const mapStateToProps = state => {
  return {
    team: state.team
  }
}


export default IsAnimated(connect(null, {setTeam})(CurrentTeamCard))
