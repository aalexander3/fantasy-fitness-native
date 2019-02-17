import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { WorkoutStyles } from './WorkoutStyles'
import { Header } from '../../components/headers'

const WorkoutDisplay = ({ currentWorkout, display }) => {


  const { name, image_url, description, default_points } = currentWorkout.attributes

  return (
    <View style={ WorkoutStyles.workoutDisplay }>
      <ImageBackground source={{uri: image_url}} style={{ width: '100%', height: 400, paddingTop: 30 }} >
        <Header text={name} />
        <Text>{description}</Text>
      </ImageBackground>
    </View>
  )
}

export default WorkoutDisplay
