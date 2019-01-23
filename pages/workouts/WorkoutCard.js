import React from 'react'
import { View, Text } from 'react-native'

const WorkoutCard = (props) => {
  return (
    <View>
      <Text>
        {props.workout.attributes.name}
      </Text>
    </View>
  )
}

export default WorkoutCard
