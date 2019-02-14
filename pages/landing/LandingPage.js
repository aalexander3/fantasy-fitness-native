import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import Stack from '../../stack/Stack'
import SignInOrUp from './SignInOrUp'
import HomePage from '../home/HomePage'
import { SessionAdapter, WorkoutAdapter, PackAdapter } from '../../adapters'

import { setInitialState, signIn } from '../../actions/sessionActions'
import { setWorkouts, setPacks } from '../../actions/workoutActions'

class LandingPage extends Component {
  componentDidMount(){
    this._getLogin()
  }

  _logout = async () => {
    await AsyncStorage.removeItem('token')
  }

  _getLogin = async () => {
    try {
      let token = await AsyncStorage.getItem('token')
      if (token){
        let user = await SessionAdapter.reauth(token)
        let workouts = await WorkoutAdapter.index(token)
        let packs = await PackAdapter.index(token)
          this.props.setInitialState(user.user.data)
          this.props.signIn()
          this.props.setWorkouts(workouts)
          this.props.setPacks(packs)
      }
    } catch (error) {

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

export default connect(mapStateToProps, { setInitialState, signIn, setWorkouts, setPacks })(LandingPage)
