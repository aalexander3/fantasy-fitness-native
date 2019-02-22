import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { AppStyle } from '../../styles/AppStyle'
import { Header } from '../headers'

const TransparentLink = ({ text, handlePress, active }) => {

  return (
    <TouchableHighlight
      underlayColor='transparent'
      onPress={handlePress} >
      <Header text={text} style={active ? {color: '#E53B49'} : null}/>
    </TouchableHighlight>
  )
}

export default TransparentLink
