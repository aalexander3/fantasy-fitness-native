import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { ViewStyles } from '../../styles/ViewStyles'
import { connect } from 'react-redux'

//prabably need to changeDisplay
// import TeamCard from '../../components/cards/TeamCard'
import CurrentTeamCard from './CurrentTeamCard'
import TeammateCard from './TeammateCard'

import WorkoutCard from '../workouts/WorkoutCard'

import SmallSquareCard from '../../components/cards/SmallSquareCard'
import HeaderWithAvatar from '../../components/headers/HeaderWithAvatar'
import Header from '../../components/headers/Header'


class TeamPage extends Component {

  state = {
    display: 'TEAM',
    nextDisplay: 'TEAM'
  }

  changeDisplay = newDisplay => {
    this.setState({ nextDisplay: newDisplay })
  }

  afterAnimation = () => {
    this.setState({ display: this.state.nextDisplay })
  }

  renderCurrentTeam = () => {
    const { team } = this.props
    const { name, motto, image_url } = team.currentTeam
    const { display } = this.state
    // const fullName = `${first_name} ${last_name}`

    if (display !== 'TEAM') {
      return (
          <TouchableHighlight
            onPress={()=>this.changeDisplay('TEAM')}
            underlayColor='transparent' >
            <HeaderWithAvatar avatar={image_url} text={name} />
          </TouchableHighlight>
        )
    } else {
      return <CurrentTeamCard
        team={ team  }
        nextDisplay={ this.state.nextDisplay }
        afterAnimation={ this.afterAnimation } />
    }
  }

  // renderTeams = () => {
  //   const { allTeams } = this.props.team
  //   const { display } = this.state
  //
  //   if (display === 'TEAMS'){
  //     const teamCards = allTeams.map(team => <TeamCard team={ team } key={ team.name } profileY={this.state.profileY} nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation } navigation={this.props.navigation} />)
  //     return (
  //       <ScrollView horizontal style={{padding: 10}} >
  //         {teamCards}
  //       </ScrollView>
  //     )
  //   } else {
  //     const teamCards = allTeams.map(team => <TeamAvatar image_url={ team.image_url } key={ team.name } />)
  //     return (
  //       <ScrollView horizontal style={{padding: 10}}>
  //         {teamCards}
  //       </ScrollView>
  //     )
  //   }
  // }


// NOTE: hardcoded packs
  renderWorkouts = () => {
     const { league_packs, packs } = this.props.league.currentLeague
     const { currentTeam } = this.props.team
     const { display } = this.state

     if (display === 'WORKOUTS'){
       const workoutCards = packs[0].workouts.map(workout => <WorkoutCard workout={ workout } league_pack={league_packs[0]} pack={ packs[0] } key={`workout-${workout.id}`} profileY={this.state.profileY} nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation } navigation={this.props.navigation} />)
       return (
         <ScrollView horizontal style={{padding: 10}} >
           {workoutCards}
         </ScrollView>
       )
     } else {
       const workoutCards = packs[0].workouts.map(workout => <SmallSquareCard image_url={ workout.image_url } key={`workout-${workout.id}`} />)
       return (
         <ScrollView horizontal style={{padding: 10}}>
           {workoutCards}
         </ScrollView>
       )
     }
   }

  renderTeammates = () => {
    const { teammates } = this.props.team.currentTeam
    const { display } = this.state

    // temp counter to get rid of duplicat user causing anoying key error message
    let key_cunter = 0

    if (display === 'TEAMMATES'){
      const teammatesCard = teammates.map(teammate => <TeammateCard
        teammate={ teammate }
        key={ teammate.id }
        profileY={this.state.profileY}
        nextDisplay={ this.state.nextDisplay }
        afterAnimation={ this.afterAnimation }
        navigation={this.props.navigation} />
      )
      return (
        <ScrollView horizontal style={{padding: 10}} >
          {teammatesCard}
        </ScrollView>
      )
    } else {
      const teammatesCard = teammates.map(teammate => <SmallSquareCard image_url={ teammate.avatar } key={ teammate.id } />)
      return (
        <ScrollView horizontal style={{padding: 10}}>
          {teammatesCard}
        </ScrollView>
      )
    }
  }

  renderTeamPage = () => {
    if (this.props.team.currentTeam) {
      const { attributes } = this.props.user
      const { display } = this.state

      return (
        <View style={ ViewStyles.profile } >
          <View style={ ViewStyles.firstLayer } >
            { attributes && this.renderCurrentTeam() }
          </View>
          <View style={ ViewStyles.secondLayer }>
            <TouchableHighlight
              onPress={()=>this.changeDisplay("WORKOUTS")}
              underlayColor='transparent' >
              <Header text="Weekly Workouts" />
            </TouchableHighlight>
            { attributes && this.renderWorkouts() }
          </View>
          <View style={ ViewStyles.thirdLayer }>
            <TouchableHighlight
              onPress={()=>this.changeDisplay("TEAMMATES")}
              underlayColor='transparent' >
              <Header text="Teammates"/>
            </TouchableHighlight>
            { attributes && this.renderTeammates() }
          </View>
        </View>
      )
    } else {
      return (
        <View style={ViewStyles.firstLayer} >
          <Header text="No teams yet" />
        </View>
      )
    }
  }


  // renderCompletions = () => {
  // this could come in handy soon
  //   const { completions } = this.props.user.attributes
  //   const { display } = this.state
  //
  //   // render claimed workouts, with name and icon as a little avatar
  //   // shows more detail when display is WORKOUTS
  //
  //   if (display === 'WORKOUTS'){
  //     const workoutCards = completions.map((completion) => <CompletionCard completion={ completion } key={ completion.id } nextDisplay={ this.state.nextDisplay } afterAnimation={ this.afterAnimation } />)
  //     return (
  //       <ScrollView horizontal style={{padding: 10}} >
  //         {workoutCards}
  //       </ScrollView>
  //     )
  //   } else {
  //     const workoutCards = completions.map((completion) => <SmallSquareCard image_url={ completion.workout.image_url } key={ completion.id } />)
  //     return (
  //       <ScrollView horizontal style={{padding: 10}}>
  //         {workoutCards}
  //       </ScrollView>
  //     )
  //   }
  // }
  //

  render(){
    return this.renderTeamPage()
  }
}

const mapStateToProps = state => {
  return {
    team: state.team,
    league: state.league,
    user: state.user
  }
}

export default connect(mapStateToProps)(TeamPage)
