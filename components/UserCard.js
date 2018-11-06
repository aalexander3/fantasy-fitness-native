import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { HomeStyle } from '../styles/HomeStyle';
import { connect } from 'react-redux'


class UserCard extends Component {

  render(){
    const { first_name, last_name, avatar, bio } = this.props.user.attributes

    return (
      <View style={HomeStyle.userCard} >
        <Image
          source={{uri: avatar }}
          style={[AppStyle.avatar, { height: 150, width: 150, borderRadius: 75}]} />
        <Text style={ AppStyle.header }>
          { `${first_name} ${last_name}` }
        </Text>
        <Text>{ bio }</Text>
      </View>
    )
  }
}

export default UserCard
