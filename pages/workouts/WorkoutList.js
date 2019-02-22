import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from './WorkoutCard'
import { Header } from '../../components/headers'
import { VerticalScroll } from '../../components/scrollviews'
import { ViewStyles } from '../../styles/ViewStyles'
import { WorkoutStyles } from './WorkoutStyles'


const WorkoutList = ({ workouts }) => {
  workoutMap = workouts.map(workout => <WorkoutCard key={workout.id} workout={workout} />)

  return (
    <View style={ViewStyles.profile} >
      <View style={WorkoutStyles.centeredView}>
        <VerticalScroll children={workoutMap} />
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    workouts: state.workout.all,
  }
}

export default connect(mapStateToProps)(WorkoutList)
