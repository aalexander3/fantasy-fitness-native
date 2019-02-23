import React, { Component } from 'react'
import { Animated } from 'react-native'
import VerticalCard from './VerticalCard'
import IsAnimated from '../../HOC/IsAnimated'
import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux'
import { setTeam } from '../../actions/teamActions'

class TeamCard extends Component {

  goToTeam = () => {
    console.log(this.props);
    // switch to the team page & dispatch state of selected team w/ team id
    this.props.setTeam(this.props.team)
    this.props.navigation.navigate('Team')
  }

  render(){
    const { name, motto, image_url, league_id } = this.props.team

    const profileY = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [100, 300]})
    const opacity = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ opacity, height }} >
        <VerticalCard
          image_url={image_url}
          mainText={name}
          subText={motto}
          handlePress={this.goToTeam} />
      </Animated.View>
    )
  }
}

export default IsAnimated(withNavigation(connect(null, { setTeam })(TeamCard)))
