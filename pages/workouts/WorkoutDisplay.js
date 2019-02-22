import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { WorkoutStyles } from './WorkoutStyles'
import { Header } from '../../components/headers'

const WorkoutDisplay = ({ currentWorkout, display }) => {


  const { name, image_url, description, default_points, exercises, tutorial,  } = currentWorkout.attributes
  // buttons to mark as complete and to watch a tutorial video, if it exists
  // also need points scored if they exist
  return (
    <View style={ WorkoutStyles.workoutDisplay }>
        <ImageBackground source={{uri: image_url}} style={WorkoutStyles.bannerImage} >
          <View style={WorkoutStyles.cardHeader}>
            <Header text={name} style={WorkoutStyles.bannerHeader} />
            <Text style={WorkoutStyles.bannerText}>{description}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default WorkoutDisplay
