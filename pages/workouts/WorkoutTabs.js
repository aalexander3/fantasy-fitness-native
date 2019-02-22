import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TransparentLink } from '../../components/buttons'
import { WorkoutStyles } from './WorkoutStyles'
import { clearWorkout } from '../../actions/workoutActions'

const WorkoutTabs = ({ activeTab, handlePress, clearWorkout }) => {

  const goToTab = tab => {
    handlePress(tab)
    clearWorkout()
  }

  return (
    <View style={WorkoutStyles.tabBar}>
      <TransparentLink text="Workouts" handlePress={()=>goToTab("WORKOUTS")} active={activeTab==="WORKOUTS"} />
      <TransparentLink text="Exercises" handlePress={()=>goToTab('EXERCISES')} active={activeTab==="EXERCISES"}/>
      <TransparentLink text="Packs" handlePress={()=>goToTab('PACKS')} active={activeTab==="PACKS"}/>
    </View>
  )
}


export default connect(null, { clearWorkout })(WorkoutTabs)
