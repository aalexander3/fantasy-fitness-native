import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { AppStyle } from '../../styles/AppStyle'
import Stack from '../../stack/Stack'
import LoginPage from './LoginPage'
import HomePage from '../../components/HomePage'
import RootAdapter from '../../adapters/RootAdapter'

import { setUser } from '../../actions/userActions'
import { signIn } from '../../actions/sessionActions'

class LandingPage extends Component {
  componentDidMount(){
    this._getLogin()
  }

  _getLogin = async () => {
    const { SessionAdapter } = RootAdapter
    try {
        let token = await AsyncStorage.getItem('token')
      if (token){
        let user = await SessionAdapter.reauth(token)
          this.props.setUser(user.user)
          this.props.signIn()
      }
      // send reauth request
      // store.dispatch login action
    } catch (error) {

    }
  }

  renderHelper = () => {
    const { logged_in } = this.props
    // return logged_in ? <Stack /> : <LoginPage />
    return <LoginPage />
  }

  render(){
    return this.renderHelper()
  }

}

const mapStateToProps = state => {
  return { logged_in: state.session.logged_in }
}

export default connect(mapStateToProps, { setUser, signIn })(LandingPage)
