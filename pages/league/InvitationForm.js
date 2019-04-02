import React, { Component } from 'react'
import { View, Text, ScrollView, Alert } from 'react-native'
import { ViewStyles } from '../../styles/ViewStyles'
import { NormalLink, NormalButton, IconButton } from '../../components/buttons'
import { Header } from '../../components/headers'
import Invite from './Invite'
import { LeagueAdapter } from '../../adapters'
import IsAsync from '../../HOC/IsAsync'


class InvitationForm extends Component {

  constructor(props){
    super(props)
    // ref to the scrollview to call methods on it!
    this.scrollView = React.createRef()

    this.state = {
      invitations: [{name: '', email: ''}]
    }
  }

  handleText = (text, name, idx) => {
    let invitations = [...this.state.invitations]
    invitations[idx] = {
      ...invitations[idx],
      [name]: text
    }

    this.setState(prevState => {
      return {
        ...this.state,
        invitations
      }
    })
  }

  addInvite = () => {
    this.setState({
      ...this.state,
      invitations: [...this.state.invitations, {name: '', email: ''}]
    }, () => this.scrollView.current.scrollToEnd({animated: true}))
  }

  renderForm = () => {
    return this.state.invitations.map((invitation, idx) => {
      return <Invite key={idx} invitation={invitation} handleText={this.handleText} idx={idx} />
    })
  }

  sendInvites = async () => {
    let token = await this.props.getToken()
    if (token){
      let id = this.props.currentLeague.id
      LeagueAdapter.invite(id, this.state.invitations, token)
        .then(this.completeInvites)
        // some kind of flash message and clearing out of state.
        // should also set some kind of feedback
        // this.props.goBack() // takes you back to LeaguePage
    }
  }

  completeInvites = (res) => {
    this.setState({ invitations: [{name: '', email: ''}] })
    Alert.alert(
      'Invites Sent!',
      res.message,
      [{ text: 'OK', onPress: this.props.goBack }]
    )
  }

  render(){
    return (
      <View style={ViewStyles.firstLayer}>
        <IconButton handlePress={this.props.goBack} iconName="ios-arrow-back"/>
        <View style={ViewStyles.signUpPage}>
          <Header text="Enter email addresses to invite your friends" />
          <View style={{maxHeight: 500, alignItems: 'center', marginBottom: 10}}>
            <ScrollView
              ref={this.scrollView} >
              {this.renderForm()}
            </ScrollView>
            <IconButton handlePress={this.addInvite} iconName="ios-add-circle-outline"/>
          </View>
          <NormalButton handlePress={this.sendInvites} text="Send Invitations!"/>
        </View>
      </View>
    )
  }
}

export default IsAsync(InvitationForm)
