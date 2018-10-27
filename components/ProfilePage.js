import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppStyle } from '../styles/AppStyle';

import RootAdapter from '../adapters/RootAdapter'
import UserCard from './UserCard'



class ProfilePage extends Component {
  state = {
    user: {}
  }

  componentDidMount(){
    const { UserAdapter } = RootAdapter
    UserAdapter.show(1).then(json => {
      this.setState({ user: json.data })
    })
  }

  renderUser = () => {
    const { user } = this.state

    return (
      <UserCard user={ user } />
    )
  }

  render(){
    const { attributes } = this.state.user
    return(
      <View style={ AppStyle.home } >
      { attributes ? this.renderUser() : null }
      </View>
    )
  }
}

export default ProfilePage
