import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { AppStyle } from '../../styles/AppStyle'


const NormalButton = ({ text, handlePress }) => {
  
  return (
    <TouchableHighlight
      style={AppStyle.button}
      onPress={handlePress} >
      <Text> {text} </Text>
    </TouchableHighlight>
  )
}

export default NormalButton
