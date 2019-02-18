import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { AppStyle } from '../../styles/AppStyle';
import { connect } from 'react-redux'

import RootAdapter from '../../adapters/RootAdapter'
import { setWorkouts, setWorkout, setPacks  } from '../../actions/workoutActions'

class WorkoutsPage extends Component {

  componentDidMount(){
    const { WorkoutAdapter, PackAdapter } = RootAdapter
    WorkoutAdapter.index().then(this.props.setWorkouts)
    PackAdapter.index().then(this.props.setPacks )
  }

  // renderWorkouts = () => {
  //   this.props.workout.all.map(workout => <WorkoutCard wourkout={workout}/>)
  // }

  render(){
    console.log("WORKOUT STATE", this.props);

    return (
      <View>
        <Text>WORKOUTS</Text>
        <Text>WORKOUTS</Text>
        <Text>WORKOUTS</Text>
        <Text>WORKOUTS</Text>
        <Text>WORKOUTS</Text>
        <Text>WORKOUTS</Text>
        <ScrollView horizontal style={{padding: 10}}>
          {/* {this.workoutCards} */}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});


const mapStateToProps = state => {
  // console.log("WORKOUT STATE", state);
   return { workout: state.workout }
}

export default connect(mapStateToProps, { setWorkouts, setPacks })(WorkoutsPage)
