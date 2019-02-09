import React, { Component } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import Header from '../headers/Header'
import { AppStyle } from '../../styles/AppStyle';
import { CardStyle } from './CardStyle';
import { connect } from 'react-redux'
import IsAnimated from '../../HOC/IsAnimated'


class UserCard extends Component {

  render(){
    const { first_name, last_name, avatar, bio } = this.props.user.attributes
    const profileY = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [100, 275]})
    const opacity = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ transform: [{translateY: profileY }], height, opacity }} >
        <View style={CardStyle.userCard} >
        <Image
          source={{uri: avatar }}
          style={ AppStyle.avatar } />
          <Header text={ `${first_name} ${last_name}` } />
          <Text>{ bio }</Text>
        </View>
      </Animated.View >
    )
  }
}

export default IsAnimated(UserCard)
