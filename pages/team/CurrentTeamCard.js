import React, { Component } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import { AppStyle } from '../../styles/AppStyle';
import { CardStyle } from '../../components/cards/CardStyle';
import { connect } from 'react-redux'
import IsAnimated from '../../HOC/IsAnimated'
import Header from '../../components/headers/Header'

class CurrentTeamCard extends Component {

  render(){
    const { name, motto, image_url, league } = this.props.team

    const profileY = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [100, 275]})
    const opacity = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ transform: [{translateY: profileY }], height, opacity }} >
        <View style={CardStyle.userCard} >
          <Image
            source={{uri: image_url }}
            style={[AppStyle.avatar, { height: 150, width: 150}, {borderRadius: 75}]} />
          <Header text={ name } />
          <Text>{ motto }</Text>
          <Text>League: { league.name }</Text>
        </View>
      </Animated.View >
    )
  }
}

export default IsAnimated(CurrentTeamCard)
