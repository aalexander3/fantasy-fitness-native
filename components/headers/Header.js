import React from 'react'
import { Text } from 'react-native'
import { HeaderStyles } from './HeaderStyles';


const Header = ({text}) => {
  return (
    <Text style={ HeaderStyles.header }>{text}</Text>
  )
}

export default Header
