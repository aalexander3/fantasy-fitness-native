import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TextInput, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { AppStyle } from '../styles/AppStyle'
import { HomeStyle } from '../styles/HomeStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RootAdapter from '../adapters/RootAdapter'

import { setUser } from '../actions/userActions'
import { signIn } from '../actions/sessionActions'

class SignInPage extends Component {

  state = {
    signUp: false,
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

  renderLogin = () => {
    const { signUp, username, password, user } = this.state

    return (
      <View >
        <Text style={ AppStyle.header }>LOGIN</Text>
        <Text style={ AppStyle.label }>Username</Text>
        <View style={ AppStyle.form }>
          <Ionicons
            name={'ios-person'}
            transform={[{ rotateX: '45deg' }]}
            size={30}
            color={'#424242'} />
          <TextInput
            name="username"
            style={ AppStyle.input }
            onChangeText={(username) => this.setState({ user: {...this.state.user, username }})}
            value={user.username}
            placeholder="Enter your username"
            textContentType='username'
            autoCapitalize='none'
          />
        </View>
        <Text style={ AppStyle.label }>Email</Text>
        <View style={ AppStyle.form }>
          <Ionicons
            name={'ios-person'}
            transform={[{ rotateX: '45deg' }]}
            size={30}
            color={'#424242'} />
          <TextInput
            name="email"
            style={ AppStyle.input }
            onChangeText={(email) => this.setState({ user: {...this.state.user, email }})}
            value={user.email}
            placeholder="Enter your email"
            textContentType='emailAddress'
            autoCapitalize='none'
          />
        </View>

        <Text style={ AppStyle.label }>Password</Text>
        <View style={ AppStyle.form }>
          <Ionicons
            name={'ios-lock'}
            transform={[{ rotateX: '45deg' }]}
            size={30}
            color={'#424242'} />
          <TextInput
            style={ AppStyle.input }
            onChangeText={(password) => this.setState({ user: {...this.state.user, password }})}
            value={user.password}
            placeholder="Enter your password"
            secureTextEntry={true}
            textContentType='password'
            autoCapitalize='none'
          />
        </View>
        <Text style={ AppStyle.label }>Password Confirmation</Text>
        <View style={ AppStyle.form }>
          <Ionicons
            name={'ios-lock'}
            transform={[{ rotateX: '45deg' }]}
            size={30}
            color={'#424242'} />
          <TextInput
            style={ AppStyle.input }
            onChangeText={(password_confirmation) => this.setState({ user: {...this.state.user, password_confirmation }})}
            value={user.password_confirmation}
            placeholder="Re-enter your password"
            secureTextEntry={true}
            textContentType='password'
            autoCapitalize='none'
          />
        </View>
        <TouchableHighlight
          style={AppStyle.button}
          onPress={this.handlePress}
        >
        <Text> Log in </Text>
        </TouchableHighlight>
      </View>
    )
  }

  renderSignUp = () => {
    const { signUp, username, password } = this.state

    return (
      <View>
        <Text style={AppStyle.header}>Sign Up</Text>
        <Text >Username</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ username: text })}
          value={username}
          placeholder="Enter your username"
        />
        <Text>Password</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ password: text })}
          value={password}
          placeholder="Enter your password"
        />
        <TouchableHighlight
          onPress={this.handlePress}
          title="Login"
        >
        <Text> Sign up </Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const { signUp, username, password } = this.state

    return (
      <View style={ HomeStyle.firstLayer }>
        { signUp ? this.renderSignUp() : this.renderLogin() }
      </View>
    )
  }
}


export default connect(null, { signIn, setUser })(SignInPage)
