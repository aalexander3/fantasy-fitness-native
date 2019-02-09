import React, { Component } from 'react'
import { Animated } from 'react-native'
import VerticalCard from '../../components/cards/VerticalCard'
import IsAnimated from '../../HOC/IsAnimated'

class TeammateCard extends Component {

  render(){
    const { username, bio, avatar, tagline, } = this.props.teammate

    const profileY = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [100, 300]})
    const opacity = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ opacity, height }} >
        <VerticalCard
          image_url={avatar}
          mainText={username}
          subText={tagline}
          handlePress={this.goToTeam} />
      </Animated.View>
    )
  }
}

export default IsAnimated(TeammateCard)
