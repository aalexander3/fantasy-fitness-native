import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { compose} from 'redux'

import { AppStyle } from '../../styles/AppStyle'
import { ViewStyles } from '../../styles/ViewStyles'
import { SessionAdapter } from '../../adapters'
import { InputWithLabel } from '../../components/form'
import { Header } from '../../components/headers'
import { NormalButton, NormalLink } from '../../components/buttons'

import { signIn, setInitialState } from '../../actions/sessionActions'
import IsAsync from '../../HOC/IsAsync'

class LoginPage extends Component {

  state = {
    user: {
      username: '',
      password: '',
    },
    errors: null
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

  handlePress = () => {
    // if login ==> take state and submit a login session
    // if sign up ==> take state and submit a users create request
     // on sucessful login ==> save encoded jwt into storage
    SessionAdapter.login(this.state.user)
      .then(json => {
        if (json.message) throw Error(json.message)
        // find a way to global save with the session Reducer
        this.props.setToken(json.jwt)
        this.props.setInitialState(json.user.data) // double check this when we have log out function
        this.props.signIn()
      })
      .catch(this.renderErrors)
  }

  renderErrors = (errors) => {
    this.setState({errors: errors.message})
  }

  renderLogin = () => {
    const { signUp, username, password, user, errors } = this.state

    return (
      <View style={ ViewStyles.signUpPage }>
        <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9wJpJ_lzaO39aKPvLnJiT7oS9RueUTUzxIRr7F7BKb2mbZC8' }}
          style={ AppStyle.medAvatar } />

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Header text="Login or " />
          <NormalLink text="Sign up" handlePress={this.props.handlePress} />
        </View>
        {errors && <Text style={AppStyle.label}>{errors}</Text>}
        <InputWithLabel
          label="Username"
          name="username"
          icon='ios-person'
          handleText={this.handleText}
          value={username}
          type="username"
          placeholder='Enter your username...' />
        <InputWithLabel
          label="Password"
          name="password"
          type="password"
          icon='ios-lock'
          handleText={this.handleText}
          value={password}
          placeholder='Enter your password...' />

        <NormalButton text="LOGIN" handlePress={this.handlePress} />
      </View>
    )
  }

  render() {
    return (
      <View style={ ViewStyles.firstLayer }>
        { this.renderLogin()}
      </View>
    )
  }
}


let enhance = compose(
  IsAsync,
  connect(null, { signIn, setInitialState })
)

export default enhance(LoginPage)
