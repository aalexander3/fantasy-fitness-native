import React from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'
import { Header } from '../../components/headers'
import { VerticalScroll } from '../../components/scrollviews'
import { ViewStyles } from '../../styles/ViewStyles'
import WorkoutCard from './WorkoutCard'

const ExerciseList = ({ exercises }) => {
  const exerciseMap = exercises.map(exercise => <WorkoutCard key={exercise.id} workout={exercise}/>)

  return (
    <View style={ViewStyles.profile} >
      <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '10%'}}>
        <VerticalScroll children={exerciseMap} />
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  }
}

export default connect(mapStateToProps)(ExerciseList)
