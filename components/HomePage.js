import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { AppStyle } from '../styles/AppStyle';


class HomePage extends Component {

  goToProfile = () => {
    this.props.navigation.navigate('Profile', {name: 'arren'})
  }

  render(){
    console.log(this.props.navigation)
    return(
      <View style={ AppStyle.childOne }>
        <Text>Home Page</Text>
        <Button
          title="Go to Profile Page"
          onPress={this.goToProfile} />
      </View>
    )
  }
}

export default HomePage
