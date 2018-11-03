import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { HomeStyle } from '../styles/HomeStyle';

class TeamAvatar extends Component {

  render(){
    const { name, motto, image_url, league_id } = this.props.team
    return (
      <View style={ HomeStyle.teamAvatar } >
        <Image
          source={{uri: image_url }}
          style={ HomeStyle.avatar } />
      </View>
    )
  }
}

export default TeamAvatar
