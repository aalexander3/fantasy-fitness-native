import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from './WorkoutCard'
import WorkoutTabs from './WorkoutTabs'
import WorkoutList from './WorkoutList'
import ExerciseList from './ExerciseList'
import PackList from './PackList'
import { Header } from '../../components/headers'
import { ViewStyles } from '../../styles/ViewStyles'


class WorkoutsPage extends Component {

  state = {
    display: 'WORKOUTS'
  }

  handlePress = (tab) => {
    this.setState({ display: tab })
  }

  renderWorkoutPage = () => {
    switch (this.state.display) {
      case 'WORKOUTS':
        return <WorkoutList />
      case 'EXERCISES':
        return <ExerciseList />
      case 'PACKS':
        return <PackList />
      default:
        return <WorkoutList />
    }
  }

  render(){
    return (
      <View style={ViewStyles.profile}>
        <WorkoutTabs activeTab={this.state.display} handlePress={this.handlePress}/>
        {this.renderWorkoutPage()}
      </View>
    )
  }
}

export default WorkoutsPage
