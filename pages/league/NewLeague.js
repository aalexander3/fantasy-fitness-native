import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, ImagePickerIOS, AsyncStorage } from 'react-native'
import { ImagePicker, Permissions } from 'expo'
import { connect } from 'react-redux'
import Header from '../../components/headers/Header'
import InputWithLabel from '../../components/form/InputWithLabel'
import { setLeague } from '../../actions/leagueActions'
import { setTeam } from '../../actions/teamActions'
import RootAdapter from '../../adapters/RootAdapter'
import { HomeStyle } from '../../styles/HomeStyle'
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
    roster_size: ''
  }

  handleText = (text, name) => {
    this.setState({
      [name]: text
    })
  }

  addPhoto = async () => {
    const options = {
      allowsEditing: true
    }

    let permission = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    let { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync(options)
      if (result.uri) return this.handlePhoto(result.uri)
    }
  }

  handlePhoto = (uri) => {
    this.setState({
      image_url: uri
    })
  }

  handlePress = async () => {
    const { LeagueAdapter } = RootAdapter
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
            // set response as current League!
            // dispatch action
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
      <View style={HomeStyle.profile} >
        <View style={HomeStyle.firstLayer}>
          <Header text="Ready to make a new league?" />
          <Text>First we'll need some basic info</Text>

          <TouchableHighlight
            onPress={this.addPhoto}
            underlayColor='transparent'
          >
          {this.state.image_url !== '' ?
            <Image
              source={{uri: this.state.image_url }}
              style={AppStyle.imageUpload} /> :
            <Image
              source={{uri: 'http://pluspng.com/img-png/free-png-plus-sign-download-512.png' }}
              style={AppStyle.imageUpload} />
          }
          </TouchableHighlight>


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

            <TouchableHighlight
              style={AppStyle.button}
              onPress={this.handlePress}
              underlayColor='transparent' >
              <Text> Create new league! </Text>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
}


// will need to map user or send proper authorization request
export default connect(null, { setLeague, setTeam })(NewLeague)
