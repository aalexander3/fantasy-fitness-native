import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { AppStyle } from '../../styles/AppStyle'
import Stack from '../../stack/Stack'
import SignInOrUp from './SignInOrUp'
import HomePage from '../../components/HomePage'
import RootAdapter from '../../adapters/RootAdapter'

// import { setUser } from '../../actions/userActions'
import { initialState } from '../../actions/sessionActions'

// import { initSetTeams } from '../../actions/teamActions'
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
          this.props.initialState(user.user.data)
          this.props.signIn()
      }
      // send reauth request
      // store.dispatch login action
      //
    } catch (error) {

    }
  }

  renderHelper = () => {
    console.log("render");
    const { logged_in } = this.props
    return logged_in ? <Stack /> : <SignInOrUp />
    // return <SignInOrUp />
  }

  render(){
    console.log('USERRR', this.props.user);
    return this.renderHelper()
  }
}

const mapStateToProps = state => {
  return { logged_in: state.session.logged_in }
}

export default connect(mapStateToProps, { initialState, signIn})(LandingPage)
