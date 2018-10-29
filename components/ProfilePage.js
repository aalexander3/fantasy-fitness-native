import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, Animated } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { connect } from 'react-redux'
import { setUser } from '../actions/userActions'
import Scroller from './Scroller'

import RootAdapter from '../adapters/RootAdapter'
import UserCard from './UserCard'
import TeamCard from './TeamCard'

class ProfilePage extends Component {
  state = {
    scrollHeight: 0,
  }

  componentDidMount(){
    const { UserAdapter } = RootAdapter
    UserAdapter.show(7).then(this.props.setUser)
  }

  renderUser = () => {
    const { user } = this.props

    return (
      <UserCard user={ user } scrollHeight={this.state.scrollHeight}/>
    )
  }

  renderTeams = () => {
    const { teams } = this.props.user.attributes
    return teams.map((team) => {
      return <TeamCard team={ team } key={ team.name } />
    })
  }

  handleScroll = (e) => {
    this.setState({
      scrollHeight: e.nativeEvent.contentOffset.y
    })
  }

  render(){
    const { attributes } = this.props.user
    return (
      // <View>
        <ScrollView
          style={ AppStyle.profile }
          onScroll={this.handleScroll}
          scrollEventThrottle={1} >
          { attributes ? this.renderUser() : null }
          <Text style={ AppStyle.header }>
            My Teams
          </Text>
          <ScrollView horizontal style={{height: 380, marginBottom: 30}}>
            { attributes ? this.renderTeams() : null }
          </ScrollView>
          <ScrollView horizontal style={{height: 380, marginBottom: 30}}>
            { attributes ? this.renderTeams() : null }
          </ScrollView>
        </ScrollView>
      // </View>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps, { setUser })(ProfilePage)
