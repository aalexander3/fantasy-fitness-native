import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from './WorkoutCard'
import Header from '../../components/headers/Header'
import { ViewStyles } from '../../styles/ViewStyles'

import { setWorkout } from '../../actions/workoutActions'

class WorkoutsPage extends Component {

  renderWorkoutPage = () => {
    if (this.props.packs) {
      return (
        <View style={ViewStyles.firstLayer} >
          <Header text="Workouts" />
          this.packCards()
        </View>
      )
    } else {
      return (
        <View style={ViewStyles.firstLayer} >
          <Header text="No workouts" />
        </View>
      )
    }
  }

  packCards = () => this.props.packs.map(pack => <WorkoutCard workout={pack} key={pack.id} />)

  render(){
    return this.renderWorkoutPage()
  }
}


const mapStateToProps = state => {
   return {
     workouts: state.workout.all,
     packs: state.workout.packs
   }
}

export default connect(mapStateToProps, { setWorkout })(WorkoutsPage)
