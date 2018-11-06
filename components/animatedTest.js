import React, { Component } from 'react'
import { View, Text, Animated, Easing, Image  } from 'react-native'
import { HomeStyle } from '../styles/HomeStyle';
import { connect } from 'react-redux'

class LeaguePage extends Component {

  state = {
    spinValue: new Animated.Value(0)
  }

  // constructor() {
  //   super()
  //   this.spinValue = new Animated.Value(0)
  // }


  componentDidMount(){
    this.spin()
  }

  spin = () => {
    this.setState({spinValue: new Animated.Value(0)}, () => {
      Animated.timing(
        this.state.spinValue,
        {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear
        }
      ).start(this.spin)
    })
  }
  //
  // nextSpin = () => {
  //   this.setState({spinValue: new Animated.Value(0)}, this.spin)
  // }

  render(){
    const spin = this.state.spinValue.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={HomeStyle.profile}>
        <View style={HomeStyle.firstLayer}>
        <Text >LEAGUE</Text>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{rotate: spin}] }}
            source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
        />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(LeaguePage)
