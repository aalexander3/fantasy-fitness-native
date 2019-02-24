import React from 'react'
import { Text } from 'react-native'
import { HeaderStyles } from './HeaderStyles';


const Header = ({text, style }) => {
  return (
    <Text style={ [ HeaderStyles.header, style] }>{text}</Text>
  )
}

export default Header
