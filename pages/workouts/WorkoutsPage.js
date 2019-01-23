import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from './WorkoutCard'
import Header from '../../components/headers/Header'
import { AppStyle } from '../../styles/AppStyle';
import { HomeStyle } from '../../styles/HomeStyle'

import { setWorkout } from '../../actions/workoutActions'

class WorkoutsPage extends Component {

  packCards = () => this.props.packs.map(pack => <WorkoutCard workout={pack} key={pack.id} />)

  render(){
    return (
      <View style={ HomeStyle.firstLayer }>
        <Header text="Workouts"/>
        { this.packCards() }
      </View>
    )
  }
}


const mapStateToProps = state => {
   return {
     workouts: state.workout.all,
     packs: state.workout.packs
   }
}

export default connect(mapStateToProps, { setWorkout })(WorkoutsPage)
