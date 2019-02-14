import React from 'react'
import { View, TouchableHighlight, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AppStyle } from '../../styles/AppStyle'


const IconButton = ({ text, handlePress, iconName }) => {

  return (
    <TouchableHighlight
      style={AppStyle.icon}
      onPress={handlePress} >
      <Ionicons
        name={iconName}
        transform={[{ rotateX: '45deg' }]}
        size={25}
        color={'white'} />
    </TouchableHighlight>
  )
}

export default IconButton
