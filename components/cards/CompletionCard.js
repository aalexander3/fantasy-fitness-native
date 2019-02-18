import React, { Component } from 'react'
import { View, Button, Image, Animated, AsyncStorage } from 'react-native'
import IsAnimated from '../../HOC/IsAnimated'
import Header from '../headers/Header'
import { AppStyle } from '../../styles/AppStyle';
import { CardStyle } from './CardStyle';
import { connect } from 'react-redux'
import RootAdapter from '../../adapters/RootAdapter'
import { updateUserCompletion } from '../../actions/userActions'

class CompletionCard extends Component {

  updateCompletion = async () => {
    const { CompletionAdapter } = RootAdapter
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

    return (
      <Animated.View style={{ height, opacity }} >
        <View style={ completed ? CardStyle.completedCard : CardStyle.incompleteCard } >
          <Image
            source={{uri: workout.image_url }}
            style={{ height: 125, width: 125}} />
            <View>
              <Header text={ completed ? "Complete" : "Incomplete" } />
              <Header text={ points + " points available" } />
              <Header text={ workout.name } />
              <Button
                title={completed ? "Mark incomplete" : "Mark complete"}
                onPress={this.updateCompletion}/>
            </View>
        </View>
      </Animated.View>
    )
  }
}

export default IsAnimated(connect(null, { updateUserCompletion })(CompletionCard))
