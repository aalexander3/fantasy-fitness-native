import React, { Component } from 'react'
import { View, Text, TouchableHighlight, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Header } from '../../components/headers'
import { NormalButton, IconButton } from '../../components/buttons'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import InputWithLabel from '../../components/form/InputWithLabel'
import { setLeague } from '../../actions/leagueActions'
import { setTeam } from '../../actions/teamActions'
import { LeagueAdapter } from '../../adapters'
import { ViewStyles } from '../../styles/ViewStyles'
import { AppStyle } from '../../styles/AppStyle'


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
    number_of_teams: '',
    roster_size: '',
    passcode: ''
  }

  handleText = (text, name) => {
    this.setState({
      [name]: text
    })
  }

  handlePhoto = (uri) => {
    this.setState({
      image_url: uri
    })
  }

  handlePress = async () => {
    let token = await AsyncStorage.getItem('token')

    let formData = this.createFormData()
    if (token) {
      LeagueAdapter.create(formData, token)
        .then(data => {
          if (data.message){
            throw Error(data.message)
          } else {
            this.props.setLeague(data.league)
            this.props.setTeam(data.teams[0])
          }
        })
        .catch(err => console.log(err))
    }
  }

  createFormData = () => {
    const { name, image_url, description, motto, number_of_teams, roster_size } = this.state

    formData = new FormData()
    if (image_url !== '') {
      formData.append('image_url', {
        uri: image_url,
        name: 'avatar.jpg',
        type: 'image/jpg'
      })
    }
    formData.append('name', name)
    formData.append('description', description)
    formData.append('motto', motto)
    formData.append('number_of_teams', number_of_teams)
    formData.append('roster_size', roster_size)
    return formData
  }

  render(){
    const { name, image_url, description, motto, number_of_teams, roster_size } = this.state
    return (
        <View style={ViewStyles.signUpPage}>
          <Header text="Ready to make a new league?" />
          <Text>First we'll need some basic info</Text>

          <ImageUpload handlePhoto={this.handlePhoto} imageUrl={image_url} />

          <InputWithLabel
            label="League Name"
            name="name"
            icon='ios-trophy'
            handleText={this.handleText}
            value={name}
            type="username"
            placeholder='Enter a league name...' />

          <InputWithLabel
            label="Description"
            name="description"
            icon='ios-trophy'
            handleText={this.handleText}
            value={description}
            type="none"
            placeholder='Enter a description for your league...' />

          <InputWithLabel
            label="Number of teams"
            name="number_of_teams"
            icon='ios-trophy'
            handleText={this.handleText}
            value={number_of_teams}
            type="none"
            placeholder='Enter maximum number of teams'
            keyboard="numeric" />

          <InputWithLabel
            label="Roster Size"
            name="roster_size"
            icon='ios-trophy'
            handleText={this.handleText}
            value={roster_size}
            type="none"
            placeholder='Enter maximum roster size'
            keyboard="numeric" />

          <NormalButton text="Create a new league!" handlePress={this.handlePress}/>
        </View>
    )
  }
}


// will need to map user or send proper authorization request
export default connect(null, { setLeague, setTeam })(NewLeague)
