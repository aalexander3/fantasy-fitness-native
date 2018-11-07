import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { connect } from 'react-redux'

import RootAdapter from '../adapters/RootAdapter'
import { setWorkouts, setWorkout } from '../actions/workoutActions'

class WorkoutsPage extends Component {

  componentDidMount(){
    const { WorkoutAdapter } = RootAdapter
    WorkoutAdapter.index().then(this.props.setWorkouts)
  }

  render(){
    return (
      <View>
        <Text>WORKOUTS</Text>
      </View>
    )
  }
}


const mapStateToProps = state => {
  console.log("WORKOUT STATE", state);
   return { workout: state.workout }
}

export default connect(mapStateToProps, { setWorkouts })(WorkoutsPage)
