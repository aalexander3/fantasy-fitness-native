import React, { Component } from 'react'
import { View, Text, Button, Image, Animated, Easing } from 'react-native'
import { AppStyle } from '../../styles/AppStyle';
import { HomeStyle } from '../../styles/HomeStyle';
import { connect } from 'react-redux'

import { setTeam } from '../../actions/teamActions'

// testing package
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';



class CurrentTeamCard extends Component {

  state = {
    profileY:  new Animated.Value(0)
  }

  onSwipeRight(gestureState) {
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

  componentDidMount(){
    this.setState({ profileY: new Animated.Value(0)}, this.profileIn)
  }

  componentDidUpdate(prevProps){
    if (this.props.nextDisplay !== 'TEAM') {
      this.profileOut()
      // this.setState({ profileY:  new Animated.Value(1)}, this.profileOut)
    }
  }

  profileIn = () => {
    Animated.timing(
    this.state.profileY,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start()
  }

  profileOut = () => {
    Animated.timing(
      this.state.profileY,
        {
          toValue: 0,
          duration: 50,
          easing: Easing.linear
        }
      ).start(this.props.afterAnimation)
  }

  render(){
    // console.log('TEAM CARD', this.props);
    console.log('TEAMYUP', this.props);
    const { name, motto, image_url, league } = this.props.team.currentTeam

    const profileY = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [100, 275]})
    const opacity = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ transform: [{translateY: profileY }], height, opacity }} >
        <GestureRecognizer
          onSwipeRight={(state) => this.onSwipeRight(state)}
          onSwipeLeft={(state) => this.onSwipeLeft(state)}
          >
          <View style={HomeStyle.userCard} >
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

export default connect(mapStateToProps, {setTeam})(CurrentTeamCard)
