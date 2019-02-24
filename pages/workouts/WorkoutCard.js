import React from 'react'
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { WorkoutStyles } from './WorkoutStyles'
import { Header } from '../../components/headers'
import { setWorkout } from '../../actions/workoutActions'


const WorkoutCard = ({ workout, setWorkout }) => {
  const { name, image_url } = workout.attributes

  return (
    <View style={WorkoutStyles.workoutCard} >
      <TouchableHighlight onPress={()=>setWorkout(workout)} underlayColor='transparent' >
        <ImageBackground source={{uri: image_url}} style={WorkoutStyles.backgroundImage} >
          <View style={WorkoutStyles.cardHeader}>
            <Header text={name} style={{color: 'white'}}/>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  )
}

export default connect(null, { setWorkout })(WorkoutCard)
