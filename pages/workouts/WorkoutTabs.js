import React from 'react'
import { View } from 'react-native'
import { TransparentLink } from '../../components/buttons'
import { WorkoutStyles } from './WorkoutStyles'

const WorkoutTabs = ({ activeTab, handlePress }) => {
  return (
    <View style={WorkoutStyles.tabBar}>
      <TransparentLink text="Workouts" handlePress={()=>handlePress('WORKOUTS')} />
      <TransparentLink text="Exercises" handlePress={()=>handlePress('EXERCISES')} />
      <TransparentLink text="Packs" handlePress={()=>handlePress('PACKS')} />
    </View>
  )
}


export default WorkoutTabs
