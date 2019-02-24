import React, { Component } from 'react'
import { View, Text, TouchableHighlight, AsyncStorage } from 'react-native'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import { connect } from 'react-redux'

import { AppStyle } from '../../styles/AppStyle'
import { ViewStyles } from '../../styles/ViewStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { UserAdapter } from '../../adapters/UserAdapter'
import InputWithLabel from '../../components/form/InputWithLabel'
import Header from '../../components/headers/Header'
import { NormalButton, NormalLink } from '../../components/buttons'

import { signIn, setInitialState } from '../../actions/sessionActions'
import { _getToken, _logout, _saveToken } from '../../actions/asyncActions'


class SignUpPage extends Component {

  state = {
    user: {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      bio: '',
      password: '',
      password_confirmation: '',
      avatar: ''
    },
    errors: null,
  }

  _storeData = async (token) => {
    await AsyncStorage.setItem('token', token)
  }

  renderErrors = (errors) => {
    this.setState({errors: errors.message})
  }

  handlePress = () => {
    let formData = this.createFormData()
    // if login ==> take state and submit a login session
    // if sign up ==> take state and submit a users create request
     // on sucessful login ==> save encoded jwt into AsyncStorage
    UserAdapter.create(formData)
      .then(data => {
        if (data.message){
          throw Error(data.message)
        } else {
            this._storeData(data.jwt)
            this.props.setInitialState(data.user.data) // assuming this is still the same data
            this.props.signIn()
        }
      })
      .catch(err => this.renderErrors(err))
  }

  createFormData = () => {
    const { username, email, password, password_confirmation, avatar, first_name, last_name, bio } = this.state.user

    formData = new FormData()
    if (avatar !== '') {
      formData.append('avatar', {
        uri: avatar,
        name: 'avatar.jpg',
        type: 'image/jpg'
      })
    }
    formData.append('username', username)
    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('bio', bio)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('password_confirmation', password_confirmation)
    return formData
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

  handlePhoto = (uri) => {
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          avatar: uri
        }
      }
    })
  }

  renderSignUp = () => {
    const { username, password, password_confirmation, email, first_name, last_name, avatar } = this.state.user
    const { errors } = this.state

    return (
      <View style={ViewStyles.signUpPage}>
        <ImageUpload handlePhoto={this.handlePhoto} imageUrl={avatar} />

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Header text="Sign up or " />
          <NormalLink text="Login" handlePress={this.props.handlePress}/>
        </View>
        {errors && <Text style={AppStyle.label}>{errors}</Text>}
        <InputWithLabel
          label="Username"
          name="username"
          type="username"
          icon="ios-person"
          handleText={this.handleText}
          value={username}
          placeholder='Enter your username...' />

        <InputWithLabel
          label="First Name"
          name="first_name"
          type="username"
          icon="ios-person"
          handleText={this.handleText}
          value={first_name}
          placeholder='Enter your first name...' />

        <InputWithLabel
          label="Last Name"
          name="last_name"
          type="username"
          icon="ios-person"
          handleText={this.handleText}
          value={last_name}
          placeholder='Enter your last name...' />

        <InputWithLabel
          label="Email"
          name="email"
          type="emailAddress"
          icon="ios-send"
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

        <NormalButton text="SIGN UP" handlePress={this.handlePress} />
      </View>
    )
  }

  render() {
    return (
      <View style={ ViewStyles.firstLayer }>
        {this.renderSignUp()}
      </View>
    )
  }
}


export default connect(null, { signIn, setInitialState })(SignUpPage)
