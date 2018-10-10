import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
// import { createStackNavigator } from 'react-navigation';
import { AppStyle } from '../styles/AppStyle';


class ProfilePage extends Component {

  goToProfile = () => {
    this.props.navigation.navigate('Home', {name: 'arren'})
  }

  render(){
    console.log(this.props);
    return(
      <View style={ AppStyle.childOne }>
        <Text>Prof Page</Text>
        <Button
          title="Go to Home Page"
          onPress={this.goToProfile} />
      </View>
    )
  }
}

export default ProfilePage
