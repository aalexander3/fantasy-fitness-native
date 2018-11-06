import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { HomeStyle } from '../styles/HomeStyle';
import { connect } from 'react-redux'

class TeamCard extends Component {

  render(){
    const { name, motto, image_url, league_id } = this.props.team
    return (
      <View style={ HomeStyle.teamCard } >
        <Image
          source={{uri: image_url }}
          style={ AppStyle.avatar } />
        <Text style={ AppStyle.header }>
          { name }
        </Text>
        <Text>{ motto }</Text>
      </View>
    )
  }
}

export default TeamCard
