import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TextInput, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { AppStyle } from '../../styles/AppStyle'
import { HomeStyle } from '../../styles/HomeStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RootAdapter from '../../adapters/RootAdapter'
import InputWithLabel from '../../components/form/InputWithLabel'

import { setUser } from '../../actions/userActions'
import { signIn } from '../../actions/sessionActions'

class SignUpPage extends Component {
  // 

  state = {
    user: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
  }

  _storeData = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (error) {

    }
  }

  handlePress = () => {
    const { UserAdapter } = RootAdapter
    // if login ==> take state and submit a login session
    // if sign up ==> take state and submit a users create request
     // on sucessful login ==> save encoded jwt into AsyncStorage
    UserAdapter.create(this.state.user)
      .then(data => {
        // find a way to global save with the session Reducer
        this._storeData(data.jwt)
        this.props.setUser(data.user)
        this.props.signIn()
      })
  }

  handleText = (text, name) => {
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: text
        }
      }
    })
  }

  renderSignUp = () => {
    const { username, password, password_confirmation, email } = this.state.user

    return (
      <View >
        <Text style={ AppStyle.header }>LOGIN</Text>
        <InputWithLabel
          label="Username"
          name="username"
          type="username"
          icon="ios-person"
          handleText={this.handleText}
          value={username}
          placeholder='Enter your username...' />

        <InputWithLabel
          label="Email"
          name="email"
          type="emailAddress"
          icon="ios-person"
          handleText={this.handleText}
          value={email}
          placeholder='Enter your email...' />

        <InputWithLabel
          label="Password"
          name="password"
          type="password"
          icon="ios-lock"
          handleText={this.handleText}
          value={password}
          placeholder='Enter your password...' />

        <InputWithLabel
          label="Password Confirmation"
          name="password_confirmation"
          type="password"
          icon='ios-lock'
          handleText={this.handleText}
          value={password_confirmation}
          placeholder='Confirm your password...' />

        <TouchableHighlight
          style={AppStyle.button}
          onPress={this.handlePress}
        >
        <Text> Sign Up </Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={ HomeStyle.firstLayer }>
        {this.renderSignUp()}
      </View>
    )
  }
}


export default connect(null, { signIn, setUser })(SignUpPage)
