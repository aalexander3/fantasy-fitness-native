import React, { Component } from 'react'
import { View, Animated, Easing} from 'react-native'

const IsAnimated = (WrappedComponent) => {
  return class extends Component {
    state = {
      profile:  new Animated.Value(0)
    }

    componentDidMount(){
      this.setState({ profile: new Animated.Value(0)}, this.profileIn)
    }

    // componentWillUnmount() {
    //   this.profileOut()
    // }

    componentDidUpdate(prevProps){
      if (prevProps.nextDisplay !== this.props.nextDisplay) {
        this.profileOut()
      }
    }

    profileIn = () => {
      Animated.timing(
      this.state.profile,
        {
          toValue: 1,
          duration: 200,
          easing: Easing.linear
        }
      ).start()
    }

    profileOut = () => {
      Animated.timing(
        this.state.profile,
          {
            toValue: 0,
            duration: 50,
            easing: Easing.linear
          }
        ).start(this.props.afterAnimation)
    }

    render(){
      return <WrappedComponent
        profile={this.state.profile}
        profileIn={this.profileIn}
        profileOut={this.profileOut} {...this.props} />;
    }
  };
}

export default IsAnimated
