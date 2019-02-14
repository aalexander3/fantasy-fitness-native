import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../components/headers'
import { ViewStyles } from '../../styles/ViewStyles'


const WorkoutList = () => {
  return (
    <View style={ViewStyles.firstLayer} >
      <Header text="Workouts" />
    </View>
  )
}

export default WorkoutList
