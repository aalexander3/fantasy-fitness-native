import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { AppStyle } from '../styles/AppStyle'
import Stack from '../stack/Stack'
import SignInPage from '../components/SignInPage'
import HomePage from '../components/HomePage'
import RootAdapter from '../adapters/RootAdapter'

import { setUser } from '../actions/userActions'
import { signIn } from '../actions/sessionActions'

class LandingPage extends Component {
  componentDidMount(){
    this._getLogin()
  }

  _getLogin = async () => {
    console.log('trying login')
    const { SessionAdapter } = RootAdapter
    try {
      token = await AsyncStorage.getItem('token')
      console.log(token)
      if (token){
        SessionAdapter.reauth(token)
          .then(user => {
            console.log(user)
            this.props.setUser(user.user)
            this.props.signIn()
          })
      }
      // send reauth request
      // store.dispatch login action
    } catch (error) {

    }
  }

  renderHelper = () => {
    const { logged_in } = this.props
    console.log('logged in ? ', logged_in)
    return logged_in ? <Stack /> : <SignInPage />
  }

  render(){
    // logged_in ? render stack : render login/sign upn forms
    return this.renderHelper()
  }

}

const mapStateToProps = state => {
  return { logged_in: state.session.logged_in }
}

export default connect(mapStateToProps, { setUser, signIn })(LandingPage)
