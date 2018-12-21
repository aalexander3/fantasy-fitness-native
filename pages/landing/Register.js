import React, { Component } from 'react'
import { View } from 'react-native'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'


class Register extends Component {
  state = {
    signUp: true
  }

  handlePress = () => {
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

export default Register
