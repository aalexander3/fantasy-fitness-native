import React, { Component } from 'react'
import { View, Text, Button, Image, Animated, Easing } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { HomeStyle } from '../styles/HomeStyle';
import { connect } from 'react-redux'

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
    console.log(this.props)
    const { completed, workout, points } = this.props.completion
    const profileY = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [100, 325]})
    const opacity = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ height, opacity }} >
        <View style={ completed ? [HomeStyle.teamCard, {borderColor: 'green', borderWidth: 2}] :[HomeStyle.teamCard, {borderColor: 'red', borderWidth: 2}] } >
          <Image
            source={{uri: workout.image_url }}
            style={[AppStyle.avatar, { height: 150, width: 150}, {borderRadius: 75}]} />
          <Text>{ completed ? "Complete" : "Incomplete" }</Text>
          <Text>{ points + " points available" }</Text>

          <Text style={ AppStyle.header }>{ workout.name }</Text>
        </View>
      </Animated.View>
    )
  }
}

export default CompletionCard
