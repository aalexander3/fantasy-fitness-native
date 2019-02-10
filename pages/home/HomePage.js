import React, { Component, Fragment } from 'react'
import { View, Text, Button, Image, ScrollView, TouchableHighlight } from 'react-native'
import { AppStyle } from '../../styles/AppStyle'
import { ViewStyles } from '../../styles/ViewStyles'
import { ScrollStyle } from '../../styles/ScrollStyle'
import { connect } from 'react-redux'

import UserCard from '../../components/cards/UserCard'
import TeamCard from '../../components/cards/TeamCard'
import CompletionCard from '../../components/cards/CompletionCard'
import SmallSquareCard from '../../components/cards/SmallSquareCard'
import { HeaderWithAvatar, Header } from '../../components/headers'
import { TransparentLink } from '../../components/buttons'



class HomePage extends Component {

  state = {
    display: 'PROFILE',
    nextDisplay: 'PROFILE'
  }

  changeDisplay = newDisplay => {
    // what pieces need to be animated??
    // when do they need to change?
    // in what order of events does this need to happen?
    // change to begin animations ==> In/Out ==> setState of display
    this.setState({ nextDisplay: newDisplay })
  }

  afterAnimation = () => {
    this.setState({ display: this.state.nextDisplay })
  }

  renderHomePage = () => {

    const { attributes } = this.props.user
    const { display } = this.state

    if (this.props.league){
      return (
        <Fragment>
          <View style={ ViewStyles.secondLayer }>
            <TransparentLink text="My Teams" handlePress={()=>this.changeDisplay("TEAMS")} />
            { attributes ? this.renderTeams() : null }
          </View>
          <View style={ ViewStyles.thirdLayer }>
            <TransparentLink text="Claimed Workouts" handlePress={()=>this.changeDisplay("WORKOUTS")} />
            { attributes ? this.renderCompletions() : null }
          </View>
        </Fragment>
      )
    } else {
        return (
          <View style={ ViewStyles.secondLayer }>
            <Header text="It looks like you don't belong to a league yet!" />
            <TransparentLink text="Create a new league" handlePress={()=>{ this.props.navigation.navigate('League') }} />
          </View>
      )
    }
  }

  renderUser = () => {
    const { user } = this.props
    const { first_name, last_name, avatar } = user.attributes
    const { display } = this.state
    const fullName = `${first_name} ${last_name}`

    if (display !== 'PROFILE') {
      return (
          <TouchableHighlight
            onPress={()=>this.changeDisplay('PROFILE')}
            underlayColor='transparent' >
            <HeaderWithAvatar avatar={avatar} text={fullName}/>
          </TouchableHighlight>)
    } else {
      return <UserCard user={ user } nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation }/>
    }
  }

  renderTeams = () => {
    const { teams } = this.props.user.attributes
    const { display } = this.state

    if (display === 'TEAMS'){
      const teamCards = teams.map(team => <TeamCard team={ team } key={ team.name } profileY={this.state.profileY} nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation } navigation={this.props.navigation} />)
      return (
        <ScrollView horizontal style={ScrollStyle.activeScroll} >
          {teamCards}
        </ScrollView>
      )
    } else {
      const teamCards = teams.map(team => <SmallSquareCard image_url={ team.image_url } key={ team.name } />)
      return (
        <ScrollView horizontal style={ScrollStyle.scrollView}>
          {teamCards}
        </ScrollView>
      )
    }
  }

  renderCompletions = () => {
    const { completions } = this.props.user.attributes
    const { display } = this.state

    // render claimed workouts, with name and icon as a little avatar
    // shows more detail when display is WORKOUTS

    if (display === 'WORKOUTS'){
      const workoutCards = completions.map((completion) => <CompletionCard completion={ completion } key={ completion.id } nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation } />)
      return (
        <ScrollView horizontal style={ScrollStyle.activeScroll} >
          {workoutCards}
        </ScrollView>
      )
    } else {
      const workoutCards = completions.map((completion) => <SmallSquareCard image_url={ completion.workout.image_url } key={ completion.id } />)
      return (
        <ScrollView horizontal style={ScrollStyle.scrollView}>
          {workoutCards}
        </ScrollView>
      )
    }
  }

  render(){
    const { attributes } = this.props.user

    return (
      <View style={ ViewStyles.profile } >
        <View style={ ViewStyles.firstLayer } >
          { attributes ? this.renderUser() : null }
        </View>
        {this.renderHomePage()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    league: state.league.currentLeague
   }
}

export default connect(mapStateToProps)(HomePage)
