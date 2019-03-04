import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { WorkoutStyles } from './WorkoutStyles'
import { Header } from '../../components/headers'
import { NormalButton, IconButton, NormalLink } from '../../components/buttons'
import { VideoPlayer } from '../../components/videos'
import { setWorkout } from '../../actions/workoutActions'
import { CompletionAdapter } from '../../adapters'
import { AsyncStorage } from 'react-native'


class WorkoutDisplay extends Component {

  state = {
    playing: false
  }

  completeWorkout = () => {
    // sends request to add completion for current user
    // response gets added to store

    CompletionAdapter.create()
  }

  playTutorial = () => {
    this.setState(prevState => {
      return {
        playing: !prevState.playing
      }
    })
  }

  renderPlayIcon = () => {
    return (this.state.playing ? <IconButton iconName="ios-close" handlePress={this.playTutorial} /> : <IconButton iconName="ios-play" handlePress={this.playTutorial} />)
  }

  renderExercises = () => { 
    const { exercises } = this.props.currentWorkout.attributes
    return exercises.map(exercise => <NormalLink key={exercise.id} text={exercise.name} handlePress={() => console.log('setting the exercise to selected workout')/*this.props.setWorkout(exercise)*/} />)
  } 

  render(){
    const { currentWorkout, display } = this.props
    const { name, image_url, description, default_points, exercises, tutorial,  } = currentWorkout.attributes
    // buttons to mark as complete and to watch a tutorial video, if it exists
    // also need points scored if they exist

    return (
      <View style={ WorkoutStyles.workoutDisplay }>
        <ImageBackground source={{uri: image_url}} style={WorkoutStyles.bannerImage} >
          <View style={WorkoutStyles.cardHeader}>
            <Header text={name} style={WorkoutStyles.bannerHeader} />
            <Text style={WorkoutStyles.bannerText}>{description}</Text>
            <Text style={WorkoutStyles.bannerText}>{default_points ? `Worth ${default_points} points` : null}</Text>
            {exercises && this.renderExercises()}
            {default_points && <NormalButton text="Mark Complete" handlePress={()=> this.completeWorkout()}/>}
            {tutorial && this.renderPlayIcon()}
            {this.state.playing ? <VideoPlayer source={tutorial}/> : null}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default connect(null, { setWorkout })(WorkoutDisplay)
