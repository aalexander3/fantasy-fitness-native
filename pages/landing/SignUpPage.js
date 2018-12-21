import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TextInput, AsyncStorage, Image, ImagePickerIOS } from 'react-native'
import { ImagePicker, Permissions } from 'expo'
import { connect } from 'react-redux'

import { AppStyle } from '../../styles/AppStyle'
import { HomeStyle } from '../../styles/HomeStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RootAdapter from '../../adapters/RootAdapter'
import InputWithLabel from '../../components/form/InputWithLabel'

import { signIn, setInitialState } from '../../actions/sessionActions'

class SignUpPage extends Component {

  state = {
    user: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      avatar: ''
    },
    errors: null,
  }

  _storeData = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (error) {

    }
  }

  renderErrors = (errors) => {
    this.setState({errors: errors.message})
  }

  handlePress = () => {
    const { UserAdapter } = RootAdapter

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
    const { username, email, password, password_confirmation, avatar } = this.state.user

    formData = new FormData()
    if (avatar !== '') {
      formData.append('avatar', {
        uri: avatar,
        name: 'avatar.jpg',
        type: 'image/jpg'
      })
    }
    formData.append('username', username)
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

  addPhoto = async () => {
    const options = {
      allowsEditing: true
    }

    let permission = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    let { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL)
    console.log(status)
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync(options)
      console.log(result)
      if (result.uri) return this.handlePhoto(result.uri)
    }
  }

  renderSignUp = () => {
    const { username, password, password_confirmation, email } = this.state.user
    const { errors } = this.state

    return (
      <View style={AppStyle.signUpPage}>
        <TouchableHighlight
          onPress={this.addPhoto}
          underlayColor='transparent'
        >
        {this.state.user.avatar !== '' ?
          <Image
            source={{uri: this.state.user.avatar }}
            style={AppStyle.imageUpload} /> :
          <Image
            source={{uri: 'http://pluspng.com/img-png/free-png-plus-sign-download-512.png' }}
            style={AppStyle.imageUpload} />
        }
        </TouchableHighlight>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={ AppStyle.header }>Sign Up or </Text>
          <TouchableHighlight
            onPress={this.props.handlePress}
            underlayColor='transparent'
          ><Text style={ AppStyle.link }>Login</Text>
          </TouchableHighlight>
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

        <TouchableHighlight
          style={AppStyle.button}
          onPress={this.handlePress}
          underlayColor='transparent'
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


export default connect(null, { signIn, setInitialState })(SignUpPage)
