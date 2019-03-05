import React, { Component } from 'react'
import { View, Image, Animated, AsyncStorage, ImageBackground } from 'react-native'
import IsAnimated from '../../HOC/IsAnimated'
import { Header } from '../headers'
import { NormalButton } from '../buttons'
import { CardStyle } from './CardStyle';
import { connect } from 'react-redux'
import { CompletionAdapter } from '../../adapters'
import { updateUserCompletion } from '../../actions/userActions'
import { WorkoutStyles } from '../../pages/workouts/WorkoutStyles'


class CompletionCard extends Component {

  updateCompletion = async () => {
    // make a fetch to update the completion from incomplete to complete!
    const id = this.props.completion.id
    const body = {
      completion: {
        completed: !this.props.completion.completed
      }
    }

    let token = await AsyncStorage.getItem('token')

    if (token) {
      CompletionAdapter.update(id, body, token)
        .then(completion => this.props.updateUserCompletion(completion))
    }
  }

  render(){
    const { completed, workout, points } = this.props.completion
    const profileY = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [100, 325]})
    const opacity = this.props.profile.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})
    const pointsAccounted = points + " points " + (completed ? "accounted" : "available")
    return (
      <Animated.View style={{ height, opacity }} >
        <View style={WorkoutStyles.workoutCard} >
          <ImageBackground source={{uri: workout.image_url}} style={WorkoutStyles.backgroundImage} >
            <View style={WorkoutStyles.cardHeader}>
              <Header text={workout.name} style={{color: 'white'}}/>
              <Header text={ pointsAccounted } style={{color: 'white'}} />
              <NormalButton
                text={completed ? "Mark incomplete" : "Mark complete"}
                handlePress={this.updateCompletion} />
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
    )
  }
}

export default IsAnimated(connect(null, { updateUserCompletion })(CompletionCard))
