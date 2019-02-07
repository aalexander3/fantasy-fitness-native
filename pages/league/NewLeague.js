import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './../../components/headers/Header'
import InputWithLabel from './../../components/form/InputWithLabel'
import { HomeStyle } from '../../styles/HomeStyle'


// schema for a league
// -----
// name
// image_url
// description
// motto
// number_of_teams
// roster_size

class NewLeague extends Component {
  state = {
    name: '',
    image_url: '',
    description: '',
    motto: '',
    number_of_teams: 0,
    roster_size: 0
  }

  handleText = () => {

  }

  render(){
    const { name, image_url, description, motto, number_of_teams, roster_size } = this.state
    return (
      <View style={HomeStyle.firstLayer} >
        <Header text="Ready to make a new league?" />
        <Text>First we'll need some basic info</Text>
        <InputWithLabel
          label="League Name"
          name="name"
          icon='ios-trophy'
          handleText={this.handleText}
          value={name}
          type="username"
          placeholder='Enter a league name...' />
      </View>
    )
  }
}

export default NewLeague
