import React, { Component } from 'react'
import { View, Text, Button, Image, Animated, Easing, TouchableHighlight } from 'react-native'
import { AppStyle } from '../../styles/AppStyle';
import { HomeStyle } from '../../styles/HomeStyle';


class WorkoutCard extends Component {

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
    // debugger

    // const { username, bio, avatar, tagline, } = this.props.teammate
    const { name, category, image_url, description, default_points } = this.props.workout

    const profileY = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [100, 300]})
    const opacity = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ opacity, height }} >
        <View style={ HomeStyle.teamCard } >
          <Image
            source={{uri: image_url }}
            style={ AppStyle.avatar } />
          <TouchableHighlight
            onPress={this.goToTeam} // make go to workout function?
            underlayColor='transparent' >
            <Text style={AppStyle.header}>Name: {name}</Text>
          </TouchableHighlight>
          <Text>Category: { category }</Text>
          <Text>Points: { default_points }</Text>
        </View>
      </Animated.View>
    )
  }
}

export default WorkoutCard
