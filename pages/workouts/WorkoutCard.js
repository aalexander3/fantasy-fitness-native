import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { WorkoutStyles } from './WorkoutStyles'
import { Header } from '../../components/headers'

const WorkoutCard = ({ workout }) => {
  const { name, image_url } = workout.attributes

  return (
    <View style={WorkoutStyles.workoutCard} >
      <ImageBackground source={{uri: image_url}} style={{width: '100%', height: '100%', opacity: '.8'}} >
        <Header text={name} />
      </ImageBackground>
    </View>
  )
}

export default WorkoutCard
