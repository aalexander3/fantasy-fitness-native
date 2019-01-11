import React, { Component } from 'react'
import { View, Text, Button, Image, Animated, Easing, TouchableHighlight } from 'react-native'
import { AppStyle } from '../../styles/AppStyle';
import { HomeStyle } from '../../styles/HomeStyle';


class TeammateCard extends Component {

  state = {
    profileY:  new Animated.Value(0)
  }

  componentDidMount(){
    this.setState({ profileY: new Animated.Value(0)}, this.profileIn)
  }

  componentDidUpdate(prevProps){
    if (this.props.nextDisplay !== 'TEAMMATES') {
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

  render(){
    const { username, bio, avatar, tagline, id } = this.props.teammate

    const profileY = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [100, 300]})
    const opacity = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ opacity, height }} >
        <View style={ HomeStyle.teamCard } >
          <Image
            source={{uri: avatar }}
            style={ AppStyle.avatar } />
          <TouchableHighlight
            onPress={this.goToTeam} // make go to Teammate function?
            underlayColor='transparent' >
            <Text style={AppStyle.header}>{`${username}`}</Text>
          </TouchableHighlight>
          <Text>{ tagline }</Text>
        </View>
      </Animated.View>
    )
  }
}

export default TeammateCard
