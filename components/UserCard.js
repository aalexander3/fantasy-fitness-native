import React, { Component } from 'react'
import { View, Text, Button, Image, Animated, Easing } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { HomeStyle } from '../styles/HomeStyle';
import { connect } from 'react-redux'


class UserCard extends Component {

  state = {
    profileY:  new Animated.Value(0)
  }

  componentDidMount(){
    this.setState({ profileY: new Animated.Value(0)}, this.profileIn)
  }

  componentDidUpdate(prevProps){
    if (this.props.nextDisplay !== 'PROFILE') {
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
    const { first_name, last_name, avatar, bio } = this.props.user.attributes
    const profileY = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [100, 275]})
    const opacity = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})
    console.log(avatar)
    return (
      <Animated.View style={{ transform: [{translateY: profileY }], height, opacity }} >
        <View style={HomeStyle.userCard} >
        <Image
          source={{uri: avatar }}
          style={[AppStyle.avatar, { height: 150, width: 150}, {borderRadius: 75}]} />
          <Text style={ AppStyle.header }>
            { `${first_name} ${last_name}` }
          </Text>
          <Text>{ bio }</Text>
        </View>
      </Animated.View >
    )
  }
}

export default UserCard
