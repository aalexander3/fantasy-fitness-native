import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { AppStyle } from '../../styles/AppStyle'


class SignInOrUp extends Component {
  // 
  state = {
    signUp: false
  }

  handlePress = () => {
    this.setState(prevState => {
      return {
        signUp: !prevState.signUp
      }
    })
  }

  render(){
    const { signUp } = this.state
    return (
      <View style={{flex:1}}>
        { signUp ? <SignUpPage handlePress={this.handlePress} /> : <LoginPage handlePress={this.handlePress} /> }
      </View>
    )
  }

}

export default SignInOrUp
