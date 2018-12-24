import React from 'react'
import { Text } from 'react-native'
import { AppStyle } from '../../styles/AppStyle';


const Header = ({text}) => {
  return (
    <Text style={ AppStyle.header }>{text}</Text>
  )
}

export default Header
