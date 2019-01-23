import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { AppStyle } from '../../styles/AppStyle'
import Stack from '../../stack/Stack'
import SignInOrUp from './SignInOrUp'
import HomePage from '../../components/HomePage'
import RootAdapter from '../../adapters/RootAdapter'
// import { _getToken, _logout } from '../../actions/asyncActions'

import { setInitialState } from '../../actions/sessionActions'
import { signIn } from '../../actions/sessionActions'

class LandingPage extends Component {
  componentDidMount(){
    // this._logout()
    this._getLogin()
  }

  _logout = async () => {
    await AsyncStorage.removeItem('token')
  }

  _getLogin = async () => {
    const { SessionAdapter } = RootAdapter
    let token = await AsyncStorage.getItem('token')
    if (token){
      console.log(token);
      let user = await SessionAdapter.reauth(token)
        this.props.setInitialState(user.user.data)
        this.props.signIn()
    }
  }

  renderHelper = () => {
    const { logged_in } = this.props
    return logged_in ? <Stack /> : <SignInOrUp />
    // return <SignInOrUp />
  }

  render(){
    return this.renderHelper()
  }
}

const mapStateToProps = state => {
  return { logged_in: state.session.logged_in }
}

export default connect(mapStateToProps, { setInitialState, signIn})(LandingPage)
