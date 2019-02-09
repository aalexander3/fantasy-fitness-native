import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { AppStyle } from '../../styles/AppStyle'


const NormalButton = ({ text, handlePress }) => {
  
  return (
    <TouchableHighlight
      underlayColor='transparent'
      onPress={handlePress} >
      <Text style={AppStyle.link} > {text} </Text>
    </TouchableHighlight>
  )
}

export default NormalButton
