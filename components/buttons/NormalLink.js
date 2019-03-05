import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { AppStyle } from '../../styles/AppStyle'


const NormalButton = ({ text, handlePress, style }) => {
  return (
    <TouchableHighlight
      underlayColor='transparent'
      onPress={handlePress} >
      <Text style={[AppStyle.link, style]} > {text} </Text>
    </TouchableHighlight>
  )
}

export default NormalButton
