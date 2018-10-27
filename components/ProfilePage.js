import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppStyle } from '../styles/AppStyle';

import RootAdapter from '../adapters/RootAdapter'



class ProfilePage extends Component {
  state = {
    user: {}
  }

  componentDidMount(){
    const { UserAdapter } = RootAdapter
    UserAdapter.show(1).then(json => {
      console.log(json)
      this.setState({ user: json.data })
    })
    // UserAdapter.show(1).then(console.log)
  }

  renderUser = () => {
    const { attributes } = this.state.user

    const image = attributes.avatar
    console.log(image);

    return (
      <View>
        <Text>{ `${attributes.first_name} ${attributes.last_name}` }</Text>
        <Text>{ attributes.bio }</Text>
        <Image
          source={{uri: image }}
          style={{width: 200, height: 200 }} />
      </View>
    )
  }

  render(){
    console.log(this.state.user);
    const { attributes } = this.state.user
    return(
      <View style={ AppStyle.home } >
      { attributes ? this.renderUser() : null }
      </View>
    )
  }
}

export default ProfilePage
