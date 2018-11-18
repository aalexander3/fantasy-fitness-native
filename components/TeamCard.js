import React, { Component } from 'react'
import { View, Text, Button, Image, Animated, Easing, TouchableHighlight } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { HomeStyle } from '../styles/HomeStyle';
import { connect } from 'react-redux'
import { setTeam } from '../actions/teamActions'

class TeamCard extends Component {

  state = {
    profileY:  new Animated.Value(0)
  }

  componentDidMount(){
    this.setState({ profileY: new Animated.Value(0)}, this.profileIn)
  }

  componentDidUpdate(prevProps){
    if (this.props.nextDisplay !== 'TEAMS') {
      this.profileOut()
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

  goToTeam = () => {
    // switch to the team page & dispatch state of selected team w/ team id
    this.props.setTeam(this.props.team)
    this.props.navigation.navigate('Team')
  }

  render(){
    const { name, motto, image_url, league_id } = this.props.team

    const profileY = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [100, 300]})
    const opacity = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ opacity, height }} >
        <View style={ HomeStyle.teamCard } >
          <Image
            source={{uri: image_url }}
            style={ AppStyle.avatar } />
          <TouchableHighlight
            onPress={this.goToTeam}
            underlayColor='transparent' >
            <Text style={AppStyle.header}>{name}</Text>
          </TouchableHighlight>
          <Text>{ motto }</Text>
        </View>
      </Animated.View>
    )
  }
}

export default connect(null, { setTeam })(TeamCard)
