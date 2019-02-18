import React, { Component } from 'react'
import { View, Text, ScrollView, AsyncStorage } from 'react-native'
import { ViewStyles } from '../../styles/ViewStyles'
import { NormalLink, NormalButton } from '../../components/buttons'
import { Header } from '../../components/headers'
import Invite from './Invite'
import { LeagueAdapter } from '../../adapters'


class InvitationForm extends Component {

  constructor(props){
    super(props)
    // ref to the scrollview to call methods on it!
    this.scrollView = React.createRef()

    this.state = {
      invitations: [{name: '', email: ''}]
    }
  }

  // needs state to hold dynamic form info
  // array of objects with first name and email address
  // button on click adds a new obj to the form

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
    let token = await AsyncStorage.getItem('token')
    if (token){
      let id = this.props.currentLeague.id
      LeagueAdapter.invite(id, this.state.invitations, token)
        .then(()=> console.log('invitations sent!'))
        // some kind of flash message and clearing out of state.
    }
  }

  render(){
    return (
      <View style={ViewStyles.firstLayer}>
        <Header text="Enter email addresses to invite your friends" />
        <NormalLink handlePress={this.props.goBack} text="Back to league"/>
        <View style={{maxHeight: 500}}>
          <ScrollView
            ref={this.scrollView} >
            {this.renderForm()}
          </ScrollView>
          <NormalLink handlePress={this.addInvite} text="Add another invitation"/>
          <NormalButton handlePress={this.sendInvites} text="Send Invitations!"/>
        </View>
      </View>
    )
  }
}

export default InvitationForm
