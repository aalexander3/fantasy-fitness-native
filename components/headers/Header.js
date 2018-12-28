import React from 'react'
import { Text } from 'react-native'
import { HeaderStyles } from '../../styles/HeaderStyles';


const Header = ({text}) => {
  return (
    <Text style={ HeaderStyles.header }>{text}</Text>
  )
}

export default Header
