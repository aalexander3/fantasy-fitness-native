import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { connect } from 'react-redux'


class UserCard extends Component {

  render(){
    const { first_name, last_name, avatar, bio } = this.props.user.attributes
    const { scrollHeight } = this.props
    return (
      <View style={ scrollHeight < 100 ? AppStyle.userCard : AppStyle.userSlice } >
        <Image
          source={{uri: avatar }}
          style={ AppStyle.avatar } />
        <Text style={ AppStyle.header }>
          { `${first_name} ${last_name}` }
        </Text>
        { scrollHeight < 100 ? <Text>{ bio }</Text> : null }
      </View>
    )
  }
}

export default UserCard
