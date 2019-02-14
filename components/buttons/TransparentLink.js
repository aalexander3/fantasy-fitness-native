import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { AppStyle } from '../../styles/AppStyle'
import { Header } from '../headers'

const TransparentLink = ({ text, handlePress }) => {

  return (
    <TouchableHighlight
      underlayColor='transparent'
      onPress={handlePress} >
      <Header text={text} />
    </TouchableHighlight>
  )
}

export default TransparentLink
