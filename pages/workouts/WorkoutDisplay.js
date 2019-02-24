import React, { Component } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { WorkoutStyles } from './WorkoutStyles'
import { Header } from '../../components/headers'
import { NormalButton, IconButton } from '../../components/buttons'
import { VideoPlayer } from '../../components/videos'


class WorkoutDisplay extends Component {

  state = {
    playing: false
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
            {default_points && <NormalButton text="Mark Complete" handlePress={()=> console.log('pressed the button')}/>}
            {tutorial && this.renderPlayIcon()}
            {this.state.playing ? <VideoPlayer source={tutorial}/> : null}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default WorkoutDisplay
