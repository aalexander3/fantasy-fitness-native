import React from 'react'
import { TouchableHighlight } from 'react-native'
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
