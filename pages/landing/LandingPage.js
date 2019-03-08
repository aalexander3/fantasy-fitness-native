import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Stack from '../../stack/Stack'
import SignInOrUp from './SignInOrUp'
import HomePage from '../home/HomePage'
import { SessionAdapter, WorkoutAdapter, PackAdapter, ExerciseAdapter } from '../../adapters'

import { setInitialState, signIn } from '../../actions/sessionActions'
import { setWorkouts, setPacks } from '../../actions/workoutActions'
import { setExercises } from '../../actions/exerciseActions'
import IsAsync from '../../HOC/IsAsync'

class LandingPage extends Component {
  componentDidMount(){
    this._getLogin()
  }

  _logout = async () => this.props.removeToken()

  _getLogin = async () => {
    try {
      let token = await this.props.getToken()
      if (token){
        let user = await SessionAdapter.reauth(token)
        let workouts = await WorkoutAdapter.index(token)
        let packs = await PackAdapter.index(token)
        let exercises = await ExerciseAdapter.index(token)
          this.props.setInitialState(user.user.data)
          this.props.signIn()
          this.props.setWorkouts(workouts)
          this.props.setPacks(packs)
          this.props.setExercises(exercises)
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

const enhance = compose(
  IsAsync,
  connect(mapStateToProps, { setInitialState, signIn, setWorkouts, setPacks, setExercises })
)

export default enhance(LandingPage)
