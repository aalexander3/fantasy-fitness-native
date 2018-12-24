import React, { Component } from 'react'
import { View, Text, Button, Image, Animated, Easing } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { HomeStyle } from '../styles/HomeStyle';
import { connect } from 'react-redux'
import IsAnimated from '../HOC/IsAnimated'


class UserCard extends Component {

  render(){
    const { first_name, last_name, avatar, bio } = this.props.user.attributes
    const profileY = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [100, 275]})
    const opacity = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

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

export default IsAnimated(UserCard)
