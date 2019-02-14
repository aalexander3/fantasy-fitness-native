import React from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../components/headers'
import { ViewStyles } from '../../styles/ViewStyles'


const ExerciseList = () => {
  return (
    <View style={ViewStyles.firstLayer} >
      <Header text="Exercises" />
    </View>
  )
}

export default ExerciseList
