import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from './WorkoutCard'
import Header from '../../components/headers/Header'
import { ViewStyles } from '../../styles/ViewStyles'
// import WorkoutStack from './WorkoutStack'

// react navigation doesn't like having two different stacks. will just create a similar tab bar for the top instead...

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
    return (
      <View style={ViewStyles.firstLayer}>
        {this.renderWorkoutPage()}
      </View>
    )
  }
}


const mapStateToProps = state => {
   return {
     workouts: state.workout.all,
     packs: state.workout.packs
   }
}

export default connect(mapStateToProps, { setWorkout })(WorkoutsPage)
