import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { connect } from 'react-redux'


class UserCard extends Component {

  render(){
    const { first_name, last_name, avatar, bio } = this.props.user.attributes
    const { scrollHeight } = this.props
    console.log(scrollHeight)
    return (
      <View style={scrollHeight < 350 ? [AppStyle.userCard, {height: (350 - scrollHeight)}, {backgroundColor: 'red'}] : [AppStyle.userCard, { height: 0 }, {backgroundColor: 'red'}]} >
        <Image
          source={{uri: avatar }}
          style={scrollHeight < 350 ? [AppStyle.avatar, { height: 150 - scrollHeight, width: 150 - scrollHeight, borderRadius: 75 - (scrollHeight/2)}] : [AppStyle.avatar, { height: 150 - scrollHeight, width: 0, borderRadius: 0 }] } />
        <Text style={ AppStyle.header }>
          { `${first_name} ${last_name}` }
        </Text>
        { scrollHeight < 80 ? <Text>{ bio }</Text> : null }
      </View>
    )
  }
}

export default UserCard
