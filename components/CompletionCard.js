import React, { Component } from 'react'
import { View, Text, Button, Image, Animated, Easing } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { HomeStyle } from '../styles/HomeStyle';
import { connect } from 'react-redux'
import RootAdapter from '../adapters/RootAdapter'
import { updateUserCompletion } from '../actions/userActions'

class CompletionCard extends Component {

  state = {
    profileY:  new Animated.Value(0)
  }

  componentDidMount(){
    this.setState({ profileY: new Animated.Value(0)}, this.profileIn)
  }

  componentDidUpdate(prevProps){
    if (this.props.nextDisplay !== 'WORKOUTS') {
      this.profileOut()
    }
  }

  updateCompletion = () => {
    const { CompletionAdapter } = RootAdapter
    // make a fetch to update the completion from incomplete to complete!
    const id = this.props.completion.id
    const body = {
      completion: {
        completed: !this.props.completion.completed
        }
    }
    CompletionAdapter.update(id, body)
      .then(completion => {

        this.props.updateUserCompletion(completion)
      })
  }

  profileIn = () => {
    Animated.timing(
    this.state.profileY,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start()
  }

  profileOut = () => {
    Animated.timing(
      this.state.profileY,
        {
          toValue: 0,
          duration: 50,
          easing: Easing.linear
        }
      ).start(this.props.afterAnimation)
  }

  render(){
    const { completed, workout, points } = this.props.completion
    const profileY = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [100, 325]})
    const opacity = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ height, opacity }} >
        <View style={ completed ? HomeStyle.completedCard : HomeStyle.incompleteCard } >
          <Image
            source={{uri: workout.image_url }}
            style={{ height: 125, width: 125}} />
            <View>
              <Text style={ HomeStyle.completionHeader }>{ completed ? "Complete" : "Incomplete" }</Text>
              <Text style={ HomeStyle.completionHeader }>{ points + " points available" }</Text>
              <Text style={ HomeStyle.completionHeader }>{ workout.name }</Text>
              <Button
                title={completed ? "Mark incomplete" : "Mark complete"}
                onPress={this.updateCompletion}/>
            </View>
        </View>
      </Animated.View>
    )
  }
}

export default connect(null, { updateUserCompletion })(CompletionCard)
