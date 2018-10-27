import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppStyle } from '../styles/AppStyle';


class UserCard extends Component {

  render(){
    const { first_name, last_name, avatar, bio } = this.props.user.attributes
    return (
      <View style={ AppStyle.userCard } >
        <Text style={ AppStyle.header }>{ `${first_name} ${last_name}` }</Text>
        <Text>{ bio }</Text>
        <Image
          source={{uri: avatar }}
          style={ AppStyle.avatar } />
      </View>
    )
  }
}

export default UserCard
